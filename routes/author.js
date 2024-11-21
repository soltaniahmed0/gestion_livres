import Book from "../models/Author.js";
import express from "express";
import { addAuthor } from "../controllers/author.js";

const router = express.Router();

router.post("/", addAuthor);
export default router;
