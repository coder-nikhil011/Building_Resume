const app = require("./app");
const { connectDB } = require("./src/config/db");

const PORT = 5000;

const startServer = async () => {
  // Connect to MySQL first
  await connectDB();
};

startServer();