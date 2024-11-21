import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routerBooks from "./routes/book.js";
import authorRoutes from "./routes/author.js";
import categoryRoutes from "./routes/category.js";
import signupRoutes from "./routes/signUp.js";
import eventRoutes from "./routes/event.js";

mongoose
  .connect(
    "mongodb+srv://wrestling0ahmed:AHMED123@cluster0.hnksf.mongodb.net/isamm"
  )
  .then(function () {
    console.log("Connection réussie");
  })
  .catch(function (e) {
    console.log("Connection échouée: ", e);
  });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", routerBooks);
app.use("/api/authors", authorRoutes);
app.use("/api/Categories", categoryRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/events", eventRoutes);

export default app;
