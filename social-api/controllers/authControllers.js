import User from "../models/user/user.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/gemerateToken/generateToken.js";
// Create User
export const signUp = async (req, res) => {
  try {
    const { fullName, userName, email, password } = req.body;

    // Email Validate
    const emailRegex = /^([a-zA-Z0-9. _%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid Email Address" });
    }

    // Check Exist User by User Name
    const existUserName = await User.findOne({ userName });
    if (existUserName) {
      return res.status(400).json({ error: "Username Already Taken!" });
    }

    // Check Exist User By Email
    const existUserEmail = await User.findOne({ email });
    if (existUserEmail) {
      return res.status(400).json({ error: "Email Already Exists!" });
    }
    // check Password Length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least Characters long" });
    }

    // Hash Password
    const genSalt = await bcrypt.genSalt(16);
    const hasPassword = await bcrypt.hash(password, genSalt);

    // Create user
    const newUser = new User({
      email,
      fullName,
      userName,
      password: hasPassword,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        email: newUser.email,
        followers: newUser.followers,
        following: newUser.following,
        profileImage: newUser.profileImage,
        coverImage: newUser.coverImage,
        bio: newUser.bio,
        link: newUser.link,
        country: newUser.country,
        district: newUser.district,
        relationStatus: newUser.relationStatus,
      });
    } else {
      return res.status(400).json({ error: "Invalid User data" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signin = async (req, res) => {
  try {
    // Get User Info
    const { userName, password } = req.body;
    // Check User and Verify
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({ error: "Wrong Username or Password" });
    }

    // Match Password
    const checkPass = bcrypt.compareSync(password, user?.password);
    if (!checkPass) {
      return res.status(400).json({ error: "Wrong Username or Password" });
    }

    // Generate Token
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      followers: user.followers,
      following: user.following,
      profileImage: user.profileImage,
      coverImage: user.coverImage,
      bio: user.bio,
      link: user.link,
      country: user.country,
      district: user.district,
      relationStatus: user.relationStatus,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
// User Logout
export const signOut = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Logged in User
export const loggedInUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json({ user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
