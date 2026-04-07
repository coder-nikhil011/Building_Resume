const app = require("./app");
const { connectDB } = require("./src/config/db");

const PORT = 5000;

const startServer = async () => {
  // Connect to MySQL first
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 ResumeCraft server running on http://localhost:${PORT}`);
    console.log(`📋 API docs: http://localhost:${PORT}/api/health`);
    console.log(`🌍 Environment: ${"development"}`);
  });
};

startServer();