const router = require("express").Router();
const { post } = require("../..models");

// finding by ID
router.get("/:id", async (req, res) => {
  try {
    const postData = await post.findByPk(req.params.id);
    if (!postData) {
      res.status(200).json({ message: "Nothing found" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creating a new post

router.post("/", async (req, res) => {
  try {
    const postData = await post.create({
      username: req.body.username,
      postText: req.body.postText,
      title: req.body.title,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// updating by ID
router.put("/:id", async (req, res) => {
  try {
    const postData = await post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "Nothing found" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postData = await post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "Nothing found " });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
