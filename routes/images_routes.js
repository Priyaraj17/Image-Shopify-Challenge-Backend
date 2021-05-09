const express = require("express");
const imageController = require("../controllers/image_controller");

const router = express.Router();

router
  .route("/")
  .get(imageController.getAllImages)
  .post(imageController.createImage);

router
  .route("/:id")
  .get(imageController.getImage)
  .delete(imageController.deleteImage);

module.exports = router;
