import express from "express";
import { getAllsoft } from "../../src/api/v1/controllers/softjobsController.js";
import { isLogin } from "../../middlewares/isLogin.js";

const router = express.Router();
router.get("/usuarios", isLogin, getAllsoft);

export default router;
