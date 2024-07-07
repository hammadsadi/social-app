import Post from "../models/post/post.js";
import User from "../models/user/user.js";
import { v2 as cloudinary } from "cloudinary";
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

    // Image Upload
    if (img) {
      const resImage = await cloudinary.uploader.upload(img);
      img = resImage.secure_url;
    }

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

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check Post
    if (!post) {
      return res.status(404).json({ error: "Post Not Found" });
    }

    if (post.user.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ error: "You are Not Authorized for Delete This Post!" });
    }

    // Delete Img
    if (post.img) {
      await cloudinary.uploader.destroy(
        post.img.split("/").pop().split(".")[0]
      );
    }

    // Delete Post
    await Post.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Post Deleted Successful" });
  } catch (error) {
    console.log("error in deletePost Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
