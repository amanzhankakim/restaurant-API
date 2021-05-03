const express = require("express");

const router = express.Router();
const Post = require("../models/Model");

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.send(post);
  } catch (e) {
    res.json({ message: err });
  }
});

router.get("/findByName/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ name: req.params.id });
    res.send(post);
  } catch (e) {
    res.json({ message: err });
  }
});

router.get("/findById/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.send(post);
  } catch (e) {
    res.json({ message: err });
  }
});

router.post("/", (req, res) => {
  const post = new Post({
    name: req.body.name,
    address: req.body.address,
    menu: req.body.type,
  });

  console.log(post);

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
