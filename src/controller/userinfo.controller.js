const userInfo = require("../model/userInfos");

const addUserInfo = async (req, res) => {
    try {
      
    const update = await userInfo.findOneAndUpdate(
      { userid: req.params.id },
      req.body,
      { new: true }
    );

    return res.status(200).json({ data: update });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Opps, Something went wrong. Please try again later",
    });
  }
};

const allUsersInfo = async (req, res) => {
  try {
    const users = await userInfo.find();
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

module.exports = { addUserInfo,allUsersInfo };
