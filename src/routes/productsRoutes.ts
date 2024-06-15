import { Router } from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

const router = Router();

// Fetch all products
router.route("/").get(getProducts);

// Fetch single product
router.route("/:id").get(getProductById);

export default router;
