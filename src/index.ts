import express from "express";
import products from "./products.js";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((item, index) => {
    item._id === Number(req.params.id);
  });
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
