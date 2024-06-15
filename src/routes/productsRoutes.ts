import { Router } from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = Router();

// Fetch all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// Fetch single product
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log("product", product);
    if (product) {
      res.json(product);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default router;
