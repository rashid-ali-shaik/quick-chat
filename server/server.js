const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");
const connectDB = require("./config/connectDB");

const port = process.env.PORT || 3000;

const start = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
