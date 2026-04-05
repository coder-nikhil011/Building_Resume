const app = require("./app");
const { connectDB } = require("./src/config/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to MySQL first
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 ResumeCraft server running on http://localhost:${PORT}`);
    console.log(`📋 API docs: http://localhost:${PORT}/api/health`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  });
};

startServer();