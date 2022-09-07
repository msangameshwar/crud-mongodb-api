const User = require("../model/user");
const UserInfo = require("../model/userInfos");

const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

const userById = async (req, res) => {
  try {
    const user = await User.findOne();
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

const addUser = async (req, res) => {
  try {
    const add = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      status: req.body.status,
    });
    const newUser = await add.save();
    const userid = newUser._id;
    
    const saveUserInfo = new UserInfo({
      userid: userid,
    });

    await saveUserInfo.save();

    return res.status(200).json({ data: newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { allUsers, userById, addUser };
