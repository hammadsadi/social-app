import Notification from "../models/notification/notification.js";
import User from "../models/user/user.js";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
// Get User profile
export const getUserProfile = async (req, res) => {
  try {
    const { username } = req.params;
    // Get User by User Name
    const user = await User.findOne({ userName: username });
    if (!user) return res.status(404).json({ error: "User Not Found" });
    res.status(200).json({ user });
  } catch (error) {
    console.log("error in Get User profile Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// User Follow unFollow
export const userFollowUnFollow = async (req, res) => {
  try {
    // Get id
    const { id } = req.params;
    const userModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);

    // Check User
    if (id === req.user._id.toString())
      return res
        .status(400)
        .json({ error: "You Can not Follow/UnFollow Yourself" });
    if (!userModify || !currentUser)
      return res.status(404).json({ error: "User Not Found" });

    // check Following
    const isFollowing = currentUser.following.includes(id);
    if (isFollowing) {
      // UnFollow
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
      res.status(200).json({ message: "User UnFollowed Successful" });
    } else {
      // Follow
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });

      // Create Notification
      const newNotification = new Notification({
        type: "follow",
        from: req.user?._id,
        to: userModify?._id,
      });
      await newNotification.save();
      res.status(200).json({ message: "User Followed Successful" });
    }
  } catch (error) {
    console.log("error in userFollowUnFollow Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Suggested User
export const getSuggestedUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const userFollowedByMe = await User.findById(userId).select("following");
    const users = await User.aggregate([
      {
        $match: {
          _id: { $ne: userId },
        },
      },
      { $sample: { size: 10 } },
    ]);

    const filterUsers = users.filter(
      (user) => !userFollowedByMe.following.includes(user._id)
    );

    const suggestedUser = filterUsers.slice(0, 4);
    suggestedUser.forEach((user) => (user.password = null));
    res.status(200).json(suggestedUser);
  } catch (error) {
    console.log("error in getSuggestedUser Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {
      fullName,
      userName,
      email,
      currentPassword,
      newPassword,
      bio,
      link,
      country,
      district,
      relationStatus,
    } = req.body;
    const { profileImage, coverImage } = req.body;
    const userId = req.user._id;
    let user = await User.findById(userId);

    // Check User
    if (!user) return res.status(404).json({ error: "User Not Found" });

    // Check New Password and Old Password
    if ((!newPassword && currentPassword) || (!currentPassword && newPassword))
      return res.status(400).json({ error: "Both Password Incorrect!" });

    // Check Password Length
    if (newPassword?.length < 6)
      return res
        .status(400)
        .json({ error: "Password must be at least 6 Characters long" });

    // Check Password DB
    if (newPassword && currentPassword) {
      const matchUpdatePass = await bcrypt.compare(
        currentPassword,
        user.password
      );
      // Check DB Password
      if (!matchUpdatePass)
        return res.status(400).json({ error: "Incorrect Current Password!" });
      // Generate Hash Pass
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(newPassword, salt);
    }

    //  Image Upload
    if (profileImage) {
      // Delete Cloudinary Old Image
      if (user.profileImage) {
        await cloudinary.uploader.destroy(
          user.profileImage.split("/").pop().split(".")[0]
        );
      }
      const uploadProfileImage = await cloudinary.uploader.upload(profileImage);
      profileImage = uploadProfileImage.secure_url;
    }
    if (coverImage) {
      // Delete Cloudinary Old Image
      if (user.coverImage) {
        await cloudinary.uploader.destroy(
          user.coverImage.split("/").pop().split(".")[0]
        );
      }
      const uploadCoverImage = await cloudinary.uploader.upload(coverImage);
      coverImage = uploadCoverImage.secure_url;
    }
    user.fullName = fullName || user.fullName;
    user.userName = userName || user.userName;
    user.email = email || user.email;
    user.bio = bio || user.bio;
    user.link = link || user.link;
    user.country = country || user.country;
    user.district = district || user.district;
    user.relationStatus = relationStatus || user.relationStatus;
    user.coverImage = coverImage || user.coverImage;
    user.profileImage = profileImage || user.profileImage;

    await user.save();

    // Password null for Response
    user.password = null;
    res.status(200).json(user);
  } catch (error) {
    console.log("error in updateProfile Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
