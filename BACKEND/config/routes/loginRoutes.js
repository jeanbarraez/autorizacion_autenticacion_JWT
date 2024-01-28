import express from "express";
import { loginUser } from "../../src/api/v1/controllers/loginControllers.js";
import { validparameters } from "../../middlewares/validateParametersLogin.js";

const router = express.Router();

router.post("/login", validparameters, loginUser);

export default router;
