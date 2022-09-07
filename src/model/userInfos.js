const mongoose = require("mongoose");

// Creating UserInfo Schema

const userInfoSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
    nickName: { type: String },
    mobile: { type: Number },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    state: { type: String },
    pinCode: { type: Number },
    profileImage: { type: String },
    status: { type: Boolean },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("UserInfo", userInfoSchema);
