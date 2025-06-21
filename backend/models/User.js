const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String
});

module.exports = mongoose.model("User", UserSchema);
// This code defines a Mongoose schema for a User model in a MongoDB database.
// The User model includes fields for name, email, and password, with email being required and unique.