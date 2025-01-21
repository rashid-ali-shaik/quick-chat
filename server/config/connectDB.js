const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    mongoose.connection.on("error", (err) => {
      console.log("MongoDB connection error: " + err);
    });
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log("Error in DB connection: " + error);
    process.exit(1);
  }
};

module.exports = connectDB;
