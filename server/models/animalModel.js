const pool = require("../config/db");

const Animal = {
  async getAllAnimals(limit = 10, offset = 0) {
    const connection = await pool.getConnection();
    const baseUrl = "http://localhost:3000/uploads/"; //Pour simuler mes images en back

    const query = `
      SELECT
        a.nom,
        a.sexe,
        a.race,
        a.commentaire,
        CASE
          WHEN p.adresse IS NOT NULL THEN CONCAT(?, p.adresse)
          ELSE NULL
        END AS photo
      FROM animaux a
      LEFT JOIN photos p ON a.REFA = p.refa
      WHERE a.bloque = 'N'
      AND a.loge != ''
      LIMIT ? OFFSET ?
    `;
    const results = await connection.query(query, [baseUrl, limit, offset]);
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
