//obtener los usuarios de la base de datos

import pool from "../../../../config/db/conectionDb.js";

export const getSoftModel = async () => {
  const SQLquery = { text: "SELECT * FROM usuarios" };
  const response = await pool.query(SQLquery);
  return response.rows;
};
