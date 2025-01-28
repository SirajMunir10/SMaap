const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// ✅ Setup Socket.IO with CORS for frontend at http://localhost:5173
// ✅ Setup Socket.IO with CORS for frontend at http://localhost:5173
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Ensure frontend can connect
    methods: ["GET", "POST"],
  },
});

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MySQL Database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "71235351siraj",
  database: "smaap",
  port: 3307, // Change if needed
});

// ✅ Check DB Connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

// ✅ Signup API
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const sql =
    "INSERT INTO smaap.login (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, data) => {
    if (err) {
      console.error("Signup Error:", err);
      return res.status(500).json("Error");
    }
    res.status(201).json("Signup successful");
  });
});

// ✅ Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM smaap.login WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error("Login Error:", err);
      return res.status(500).json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

// ✅ Room Booking API
app.post("/rooms", (req, res) => {
  const {
    userEmail,
    roomId,
    roomName,
    roomType,
    price,
    checkinDate,
    checkoutDate,
  } = req.body;
  const sql = `
    INSERT INTO smaap.bookings (user_email, room_id, room_name, room_type, price, checkin_date, checkout_date)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [userEmail, roomId, roomName, roomType, price, checkinDate, checkoutDate],
    (err) => {
      if (err) {
        console.error("Booking Error:", err);
        return res.status(500).json("Booking failed.");
      }
      res.status(200).json("Booking successful.");
    }
  );
});

// ✅ Room Cancellation API
app.delete("/rooms", (req, res) => {
  const { userEmail, roomId } = req.body;
  const sql = "DELETE FROM smaap.bookings WHERE user_email = ? AND room_id = ?";
  db.query(sql, [userEmail, roomId], (err) => {
    if (err) {
      console.error("Cancellation Error:", err);
      return res.status(500).json("Cancellation failed.");
    }
    res.status(200).json("Booking canceled.");
  });
});

// ✅ SOCKET.IO for Real-time FAQ
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("get_faqs", () => {
    db.query("SELECT * FROM faq", (err, results) => {
      if (err) {
        console.error("Error fetching FAQs:", err);
        return;
      }
      socket.emit("faqs", results);
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ✅ Start Server on Port 8081
server.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});
