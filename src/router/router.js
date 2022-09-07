const router = require("express").Router();
const { allUsers, addUser } = require("../controller/user.controller");
const {
  addUserInfo,
  allUsersInfo,
} = require("../controller/userinfo.controller");
const login = require("../controller/login");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/allUser", isAuthenticated, allUsers);
router.get("/allUserInfo", isAuthenticated, allUsersInfo);
router.post("/addUser", addUser);
router.post("/updateUserInfo/:id", isAuthenticated, addUserInfo);
router.post("/login", login);

module.exports = router;
