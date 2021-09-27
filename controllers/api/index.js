const router = require("express").Router();

const comments = require("./comment");
const posts = require("./post");
const user = require("./user");

router.use("comment", comments);
router.use("/post", posts);
router.use("/users", user);

module.exports = router;
