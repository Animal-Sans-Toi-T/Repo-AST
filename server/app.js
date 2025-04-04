import cors from "cors";
import express from "express";
import animalRoutes from "./routes/animalRoute.js"


// const cors = require("cors");
// const express = require("express");
// const animalRoutes = require("./routes/animalRoute");

const app = express();
const port = 3000;

app.use(express.json());  

// Active CORS pour autoriser les requêtes depuis localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));

// Routes
app.use("/api", animalRoutes);

// Route pour récupérer l'url locale de mes images

app.use("/uploads", express.static("public/uploads"));

// Limitation d'accès, une surcouche de sécurité

app.use("/config", (req, res) => {
  res.status(403).send("Accès interdit");
});

app.use("/node_modules", (req, res) => {
  res.status(403).send("Accès interdit");
});

app.use("/.env", (req, res) => {
  res.status(403).send("Accès interdit");
});

// Pour afficher mes erreurs ou bugs

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message })
});

// Pour lancer mon API 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// -----------------------------------------NODEMAILER ----------------------------

import emailRoutes from "./routes/emailRoutes.js";

app.use("/apiemail", emailRoutes);

//apparemment permet de mieux voir les requêtes qui échouent
app.use((req, res, next) => {
  console.log("404 NOT FOUND:", req.method, req.url);
  res.status(404).send("Not Found");
});