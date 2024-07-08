import Notification from "../models/notification/notification.js";
import Post from "../models/post/post.js";
import User from "../models/user/user.js";
import { v2 as cloudinary } from "cloudinary";

// Get All Posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });

    if (posts.length === 0) return res.status(200).json([]);
    res.status(200).json(posts);
  } catch (error) {
    console.log("error in getAllPosts Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

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

export const createPostComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user._id;
    const { text } = req.body;

    // Check Comment Text
    if (!text) {
      return res.status(400).json({ error: "Text Field Required" });
    }

    // Get Post
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post Not Found" });

    // Create Comment
    const comment = {
      user: userId,
      text,
    };

    post.comments.push(comment);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.log("error in createPostComment Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const postLikeUnLike = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id: postId } = req.params;

    // Find Post
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post Not Found" });

    // Check Like or Unlike
    const checkReaction = post.likes.includes(userId);
    if (checkReaction) {
      // unLike or Remove Like
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      await User.updateOne({ _id: userId }, { $pull: { likedPosts: postId } });
      res.status(200).json({ message: "Post Unlike Successful" });
    } else {
      // like
      post.likes.push(userId);
      await User.updateOne({ _id: userId }, { $push: { likedPosts: postId } });
      await post.save();

      // Notification
      const notification = new Notification({
        from: userId,
        to: post.user,
        type: "like",
      });

      await notification.save();
      res.status(200).json({ message: "Post Liked Successful" });
    }
  } catch (error) {
    console.log("error in postLikeUnLike Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Liked Posts

export const getLikedPosts = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    // Get User
    if (!user) res.status(404).json({ message: "User Not Found" });

    // Get Liked posts
    const likedPosts = await Post.find({ _id: { $in: user.likedPosts } })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });
    res.status(200).json(likedPosts);
  } catch (error) {
    console.log("error in getLikedPosts Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
