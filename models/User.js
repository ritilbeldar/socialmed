const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("./Post");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already exits"],
  },

  avatar: {
    type: String,
  },

  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  enrollment: {
    type: Number,
    minLength: [12, `Use without "R" `],
    maxLength: [12, "max 12 digit"],
    default: null,
  },

  username: {
    type: String,
    unique: true,
    maxLength: 20,
    default: null,
  },

  department: {
    type: String,
    default: null,
  },

  gender: {
    type: String,
    default: null,
  },
  dob: {
    type: Date,
    default: null,
  },

  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function (token) {
  return jwt.sign({ _id: this._id }, process.env.JWTSECRETKEY);
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  console.log(resetToken);

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};
module.exports = mongoose.model("User", userSchema);
