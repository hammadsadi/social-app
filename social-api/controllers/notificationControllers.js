import Notification from "../models/notification/notification.js";

// Get All Notifications
export const getAllNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    // Get Notifications
    const notifications = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "userName profileImage",
    });

    // Update All Notification as a read
    await Notification.updateMany({ to: userId }, { read: true });
    res.status(200).json(notifications);
  } catch (error) {
    console.log("error in getAllNotifications Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete All Notifications
export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    // Delete Notification
    await Notification.deleteMany({ to: userId });
    res.status(200).json({ message: "Notification Delete Successful" });
  } catch (error) {
    console.log("error in deleteNotifications Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete One Notification
