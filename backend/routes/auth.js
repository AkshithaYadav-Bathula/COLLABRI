// // const express = require("express");
// // const router = express.Router();
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");

// // const User = require("../models/User");

// // // POST /api/auth/register
// // router.post("/register", async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     // 🔍 Check if user exists
// //     const existingUser = await User.findOne({ email });

// //     if (existingUser) {
// //       return res.status(400).json({ error: "User already exists" });
// //     }

// //     // 🔐 Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // 📝 Create new user
// //     const newUser = new User({ name, email, password: hashedPassword });
// //     await newUser.save();
// //     console.log("User saved to MongoDB:", newUser);

// //     // 🔑 Create JWT token
// //     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

// //     res.json({
// //       message: "User registered",
// //       token,
// //       user: {
// //         name: newUser.name,
// //         email: newUser.email
// //       }
// //     });
// //   } catch (err) {
// //     console.error("Error in /register:", err);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // // POST /api/auth/login
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     // Check if user exists
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(400).json({ error: "User does not exist" });
// //     }

// //     // Compare password
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ error: "Invalid password" });
// //     }

// //     // Create JWT token
// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

// //     res.json({
// //       message: "Login successful",
// //       token,
// //       user: {
// //         name: user.name,
// //         email: user.email
// //       }
// //     });
// //   } catch (err) {
// //     console.error("Login error:", err);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// // Register Route
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
    
//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     // Create user
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();
    
//     res.json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }
    
//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }
    
//     // Create JWT token
//     const token = jwt.sign(
//       { userId: user._id }, 
//       process.env.JWT_SECRET, 
//       { expiresIn: "7d" }
//     );
    
//     res.json({
//       token,
//       user: { id: user._id, name: user.name, email: user.email }
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists with this email" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during registration" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during login" });
  }
});

module.exports = router;