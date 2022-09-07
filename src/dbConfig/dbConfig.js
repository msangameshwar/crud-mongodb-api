const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  // check database connection
  mongoose.connection.on("connected", () => {
    console.log("Database Connection Established");
  });

  try {
    /** Database connection */
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      w: "majority",
    });
  } catch (error) {
    console.error(error, "Database Connection Failed");
    process.exit(1);
  }
};
