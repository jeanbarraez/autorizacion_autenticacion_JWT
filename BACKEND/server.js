import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import loginRoutes from "./config/routes/loginRoutes.js";
import userRoutes from "./config/routes/userRoutes.js";
import getRoutes from "./config/routes/getRoutessoft.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());
app.use(userRoutes);
app.use(loginRoutes);
app.use(getRoutes);

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));
