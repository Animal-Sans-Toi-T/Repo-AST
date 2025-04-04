import Animal from "../models/animalModel.js";
import Joi from "joi";


// const Animal = require("../models/animalModel");
// const Joi = require("joi");

// Bibliothèque Joi pour gérer les inputs pluss facilement

const animalSchema = Joi.object({
  nom: Joi.string().min(3).required(),
  espece: Joi.string().min(3).required(),
  age: Joi.number().integer().min(0).required()
})

const AnimalController = {
  async getAll(req, res) {
    const { limit = 10, offset = 0 } = req.query;
    try {
      const animals = await Animal.getAllAnimals(limit, offset);
      res.json(animals);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Une erreur est survenue" });
    }
  },

  // async create(req, res) {

  //   const { error } = animalSchema.validate(req.body);
  //   if(error) {
  //     return res.status(400).json({ error: error.details[0].message });
  //   }

  //   const { nom, espece, age } = req.body;
  //   try {
  //     await Animal.createAnimal(nom, espece, age);
  //     res.status(201).json({ message: "Animal créé avec succès" });
  //   } catch (err) {
  //     res.status(500).json({ error: "Une erreur est survenue" });
  //   }
  // },
};

// module.exports = AnimalController;
export default AnimalController;