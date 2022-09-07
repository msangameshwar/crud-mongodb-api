const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  author: { type: String, trim: true, required: true },
  isActive: { type: Boolean, default: 1 },
});

module.exports = mongoose.model("book", bookSchema);
