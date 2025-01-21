const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { createToken } = require("../utils/jwt");
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide name, email and password" });
  }

  const user = await User.findOne({ email });
  if (user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "User already exists with that email" });
  }
  const newUser = await User.create({ name, email, password });
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, msg: "user created successfully" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide an email and password" });
  }

  if (!user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Invalid credentials" });
  }

  const isPasswordCorrect = await user.comparePasswords(password);

  if (!isPasswordCorrect) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Invalid credentials" });
  }

  const jwtPayload = { id: user._id, name: user.name };
  const token = createToken({ payload: jwtPayload });
  res
    .status(StatusCodes.OK)
    .json({ name: user.name, email: user.email, token: token });
};

const logout = async (req, res) => {
  throw new Error("This is an error");
  res.send("Logout");
};

module.exports = {
  register,
  login,
  logout,
};
