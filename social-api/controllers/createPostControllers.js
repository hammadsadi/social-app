import Post from "../models/post/post.js";
import User from "../models/user/user.js";

export const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    const { img } = req.body;
    const userId = req.user._id.toString();

    // Get User
    const user = await User.findById(userId);

    // User Validate
    if (!user) return res.status(404).json({ error: "User Not Found" });

    // Post Validation
    if (!text & !img)
      return res.status(400).json({ error: "Post Must have Text or Image" });

    const newPost = new Post({
      user: userId,
      text,
      img,
    });

    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    console.log("error in createPost Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
