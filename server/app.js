const express = require("express");
const animalRoutes = require("./routes/animalRoute");

const app = express();
const port = 3000;

app.use(express.json());  

// Routes
app.use("/api", animalRoutes);

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
