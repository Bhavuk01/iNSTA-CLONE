const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const POST = mongoose.model("POST");
const USER = mongoose.model("USER");
const requireLogin = require("../middlewares/requireLogin");

// To get user profile
router.get("/user/:id", async (req, res) => {
  try {
    const user = await USER.findOne({ _id: req.params.id }).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const posts = await POST.find({ postedBy: req.params.id })
      .populate("postedBy", "_id")
      .exec();

    res.status(200).json({ user, posts });
  } catch (err) {
    return res.status(422).json({ error: err.message });
  }
});

// To follow user
router.put("/follow", requireLogin, async (req, res) => {
  try {
    const updatedFollowedUser = await USER.findByIdAndUpdate(
      req.body.followId,
      { $push: { followers: req.user._id } },
      { new: true }
    );

    const updatedFollowingUser = await USER.findByIdAndUpdate(
      req.user._id,
      { $push: { following: req.body.followId } },
      { new: true }
    );

    res.json({ followedUser: updatedFollowedUser, followingUser: updatedFollowingUser });
  } catch (err) {
    return res.status(422).json({ error: err.message });
  }
});

// To unfollow user
router.put("/unfollow", requireLogin, async (req, res) => {
  try {
    const updatedUnfollowedUser = await USER.findByIdAndUpdate(
      req.body.followId,
      { $pull: { followers: req.user._id } },
      { new: true }
    );

    const updatedUnfollowingUser = await USER.findByIdAndUpdate(
      req.user._id,
      { $pull: { following: req.body.followId } },
      { new: true }
    );

    res.json({ unfollowedUser: updatedUnfollowedUser, unfollowingUser: updatedUnfollowingUser });
  } catch (err) {
    return res.status(422).json({ error: err.message });
  }
});

// To upload profile pic
router.put("/uploadProfilePic", requireLogin, async (req, res) => {
  try {
    const updatedUser = await USER.findByIdAndUpdate(
      req.user._id,
      { $set: { Photo: req.body.pic } },
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    return res.status(422).json({ error: err.message });
  }
});

module.exports = router;
