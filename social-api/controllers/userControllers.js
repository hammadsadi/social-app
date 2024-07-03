import User from "../models/user/user.js";

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
      res.status(200).json({ message: "User Followed Successful" });
    }
  } catch (error) {
    console.log("error in userFollowUnFollow Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
