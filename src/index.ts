import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";
const PORT = process.env.PORT || 5000;

connectDB(); //Connecting to Database

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find(
    (item, index) => item._id === Number(req.params.id)
  );
  console.log("product", product);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
