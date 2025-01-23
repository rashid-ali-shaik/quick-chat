const router = require("express").Router();
const User = require("../models/user");
router.get("/getLoggedInUser", async (req, res) => {
  const user = await User.findOne({ _id: req.userId }).select("-password");
  res.status(200).json(user);
});

router.get("/getAllUsers", async (req, res) => {
  const users = await User.find({ _id: { $ne: req.userId } }).select(
    "-password"
  );
  res.status(200).json(users);
});

module.exports = router;
