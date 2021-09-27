const router = require("express").Router();
const { comment } = require("../../models");

// grabbing by ID
router.get("/:id", async (req, res) => {
  try {
    const commData = await comment.findByPk(req.params.id);
    if (!commData) {
      res.status(404).json({ message: "Nothing Found" });
      return;
    }
    res.status(200).json(commData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//creating new comment
router.post("/", async (req, res) => {
  try {
    const commData = await comment.create({
      username: req.body.username,
      comment_info: req.body.comment_info,
    });
    res.status(200).json(commData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const commData = await comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commData) {
      res.status(404).json({ message: "Nothing Found" });
      return;
    }
    res.status(200).json(commData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
