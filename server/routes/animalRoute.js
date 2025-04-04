import express from "express";
import AnimalController from "../controllers/animalController.js"


// const express = require("express");
// const AnimalController = require("../controllers/animalController");

const router = express.Router();

router.get("/animals", AnimalController.getAll);
// router.post("/animals", AnimalController.create);

// module.exports = router;
export default router; 
