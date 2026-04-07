const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host:     "localhost",
  port:     3306,
  user:     "root",
  password: "",
  database: "resumecraft",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection
const connectDB = async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ MySQL connected successfully");
    conn.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };