const express = require("express");
require("express-async-errors");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/errorHandler");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const chatRouter = require("./routes/chat");
const authMiddleware = require("./middlewares/authMiddleware");
const morgan = require("morgan");
const app = express();
//middleware
app.use(express.json());
app.use(morgan("dev"));
//Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authMiddleware, userRouter);
app.use("/api/v1/chat", authMiddleware, chatRouter);
app.use("/api/v1/message", authMiddleware, require("./routes/message"));
//not found middleware
app.use(notFound);
// global error handler
app.use(errorHandler);
module.exports = app;
