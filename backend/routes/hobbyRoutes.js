const express = require("express");
const hobbyCtrl = require("../controllers/hobby");
const router = express.Router();

router.get("/", hobbyCtrl.getHobbies);
router.get("/:id", hobbyCtrl.getHobbyById);
router.post("/create", hobbyCtrl.createHobby);
router.delete("/delete", hobbyCtrl.deleteAll);

module.exports = router;
