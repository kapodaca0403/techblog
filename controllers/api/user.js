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

router.post("/login", async (req, res) => {
  try {
    const dbUserData = await user.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res.status(400).json({ message: "Login Failed. Try Again" });
      return;
    }
    const CorrPw = await dbUserData.checkPassword(req.body.password);
    if (!CorrPw) {
      res
        .status(400)
        .json({ message: "Incorrect Email or Password. Try again" });
      return;
    }
    req.session.save(() => {
      req.session.loggedin = true;
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in, have fun" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedin) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
