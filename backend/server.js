const app = require("./app");
const { connectDB } = require("./src/config/db");
require("dotenv").config();

const PORT = 5000;

const startServer = async () => {
  try {
    // Connect DB
    await connectDB();
    console.log("✅ Database connected");

    // 🔥 START SERVER (this was missing)
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
    });

  } catch (error) {
    console.error("❌ Server failed to start:", error);
  }
};

startServer();