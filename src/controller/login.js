const User = require("../model/user");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
/* Login User */
const login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    /* Return if no user found */
    if (!user) {
      return res.status(401).json({
        message: "The username you entered isn't connected to an account.",
      });
    }

    const verifyPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (verifyPassword) {
      /*  Generate new Token */
      const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY);

      return res.status(200).json({
        message: "Login Successfully!",
        token: token,
      });
    }
    return res.status(400).json({
      message: "The password that you've entered is incorrect.",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Oops, Something went wrong. please try again later" });
  }
};

module.exports = login;
