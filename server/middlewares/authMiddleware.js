const { verifyToken } = require("../utils/jwt");
const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ msg: "No token provided" });
  }
  const token = authorization.split(" ")[1];
  try {
    const decoded = verifyToken({ token });
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
