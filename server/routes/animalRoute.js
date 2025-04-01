const express = require("express");
const router = express.Router();
const AnimalController = require("../controllers/animalController");

router.get("/animals", AnimalController.getAll);
// router.post("/animals", AnimalController.create);

module.exports = router;
