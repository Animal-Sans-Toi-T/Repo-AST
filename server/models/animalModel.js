const pool = require("../config/db");

const Animal = {
  async getAllAnimals(limit = 10, offset = 0) {
    const connection = await pool.getConnection();
    const query = "SELECT nom, sexe, race, commentaire FROM animaux WHERE bloque = 'N' LIMIT ? OFFSET ?";
    const results = await connection.query(query, [limit, offset]);
    connection.end();
    return results;
  },

  // async createAnimal(nom, espece, age) {
  //   const connection = await pool.getConnection();
  //   const query = "INSERT INTO animal (Nom, Espece, Age) VALUES (?, ?, ?)";
  //   await connection.query(query, [nom, espece, age]);
  //   connection.end();
  // },
};

module.exports = Animal;
