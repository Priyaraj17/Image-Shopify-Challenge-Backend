const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("../controllers/authController.js");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route("/:id").get(userController.getUser);

module.exports = router;
