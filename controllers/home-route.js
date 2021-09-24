const router = require("express").Router();
const { post, comment } = require("../models");

const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await post.findAll({
      include: [
        {
          model: comment,
          attributes: ["username", "comment_info"],
        },
      ],
    });
    const posts = postData.map((comments) => comments.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await post.findByPk(req.params.id);
    const post = postData.get({ plain: true });
    res.render("post", { posts, loggedIn: req.sessions.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
