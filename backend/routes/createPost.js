const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");

router.get("/allposts", requireLogin, async (req, res) => {
  try {
    const posts = await POST.find().populate("postedBy", "_id name");
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/createPost", requireLogin, async (req, res) => {
  const { body, pic } = req.body;
  if (!body || !pic) {
    return res.status(422).json({ error: "Please add all the fields" });
  }

  const post = new POST({
    body: body,
    photo: pic,
    postedBy: req.user,
  });

  try {
    const result = await post.save();
    res.json({ post: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/myposts", requireLogin, async (req, res) => {
  try {
    const myposts = await POST.find({ postedBy: req.user._id })
      .populate("postedBy", "_id name")
      .sort("-createdAt");
    res.json(myposts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/like", requireLogin, async (req, res) => {
  try {
    const result = await POST.findByIdAndUpdate(
      req.body.postId,
      {
        $push: { likes: req.user._id },
      },
      { new: true }
    ).populate("postedBy", "_id name Photo");
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(422).json({ error: err.message });
  }
});

router.put("/unlike", requireLogin, async (req, res) => {
  try {
    const result = await POST.findByIdAndUpdate(
      req.body.postId,
      {
        $pull: { likes: req.user._id },
      },
      { new: true }
    ).populate("postedBy", "_id name Photo");
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(422).json({ error: err.message });
  }
});

router.put("/comment", requireLogin, async (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };

  try {
    const result = await POST.findByIdAndUpdate(
      req.body.postId,
      {
        $push: { comments: comment },
      },
      { new: true }
    )
      .populate("comments.postedBy", "_id name")
      .populate("postedBy", "_id name Photo");
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(422).json({ error: err.message });
  }
});

module.exports = router;

