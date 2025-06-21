const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    console.log("🔍 Using DB:", mongoose.connection.name); // ✅ Add this line
  })
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("Collabri API Running"));

app.listen(5000, () => console.log("Server started on port 5000"));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// const authRoutes = require("./routes/auth");
// app.use("/api/auth", authRoutes);
