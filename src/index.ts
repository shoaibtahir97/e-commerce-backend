import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productsRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
const PORT = process.env.PORT || 5000;

connectDB(); //Connecting to Database

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
