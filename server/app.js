const express = require("express");
require("express-async-errors");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/errorHandler");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const authMiddleware = require("./middlewares/authMiddleware");
const app = express();
//middleware
app.use(express.json());

//Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authMiddleware, userRouter);
//not found middleware
app.use(notFound);
// global error handler
app.use(errorHandler);
module.exports = app;
