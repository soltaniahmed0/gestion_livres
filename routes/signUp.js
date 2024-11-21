import express from "express";
import { signup } from "../controllers/signUp.js";
import validateSignup from "../middlewares/validateSignUp.js";
const router = express.Router();

router.post("/", validateSignup, signup);

export default router;
