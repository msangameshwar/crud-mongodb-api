const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Creating User Schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);

/* converting plian password to hash vale */
userSchema.pre("save", async function (next) {
  let user = this;
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR));
    const newPasswordHash = await bcrypt.hash(user.password, salt);
    user.password = newPasswordHash;
    return next();
  }
  return next();
});

module.exports = mongoose.model("User", userSchema);
