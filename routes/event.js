import express from "express";
import { createEvent } from "../controllers/event.js";
import validateEvent from "../middlewares/validateEvent.js";

const router = express.Router();

router.post("/", validateEvent, createEvent);

export default router;
