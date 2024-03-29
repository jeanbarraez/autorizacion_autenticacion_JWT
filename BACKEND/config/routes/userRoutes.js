import express from "express";
import { createNewUser } from "../../src/api/v1/controllers/usersController.js";
import { validateParametersUser } from "../../middlewares/ValidateParametersUsers.js";

const router = express.Router();

router.post("/usuarios", validateParametersUser, createNewUser);

export default router;