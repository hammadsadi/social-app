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
