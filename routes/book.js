import Book from "../models/Book.js";
import express from "express";
import {
  fetchBooks,
  getBookById,
  deleteBook,
  updateBook,
  addBook2,
} from "../controllers/book.js";

const router = express.Router();

router.get("/", fetchBooks);

router.get("/:id", getBookById);

router.post("/", addBook2);

router.patch("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;
