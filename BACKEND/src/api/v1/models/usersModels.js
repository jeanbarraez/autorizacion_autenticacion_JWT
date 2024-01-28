import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs"; //bcryptjs se puede utilizar para codificar contraseñas, comparar contraseñas con hashes

export const createUser = async (email, password, rol, lenguage) => {
  const hashedPassword = bcrypt.hashSync(password);
  const SQLquery = {
    text: "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [email, hashedPassword, rol, lenguage],
  };

  const response = await pool.query(SQLquery);

  return response.rows[0];
};

export const byEmail = async (email) => {
  const SQLquery = {
    text: "SELECT * FROM usuarios WHERE email = $1",
    values: [email],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
