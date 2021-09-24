const router = require("express").Router();
const { user } = require("../../models");

// creating new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await user.create({
      username: req.body.username,
      email: req.body.email,
      pw: req.body.pw,
    });
    req.session.save(() => {
      req.session.logIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
