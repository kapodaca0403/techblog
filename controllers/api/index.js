const router = require("express").Router();

const dashRoutes = require("./dashboard-route");

router.use("/dashboard", dashRoutes);

module.exports = router;
