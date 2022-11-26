const express = require("express");
const userCtrl = require("../controllers/auth");
const router = express.Router();

router.get("/", userCtrl.getUsers);
router.get("/:id", userCtrl.getUserById);
router.post("/signup", userCtrl.signup);
router.delete("/", userCtrl.deleteAll);
router.delete("/:id", userCtrl.deleteUserById);
router.patch("/:id", userCtrl.updateUser);

router.post("/upload", userCtrl.uploadImage);

module.exports = router;
