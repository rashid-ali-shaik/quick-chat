const router = require("express").Router();
const User = require("../models/user");
router.get("/getLoggedInUser", async (req, res) => {
  const user = await User.findOne({ _id: req.userId }).select("-password");
  res.status(200).json(user);
});

module.exports = router;
