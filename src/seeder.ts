import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUserId = createdUsers[0]?._id;
    const updatedProducts = products.map((product, index) => {
      return { ...product, user: adminUserId };
    });
    await Product.insertMany(updatedProducts);
    console.log("Data Imported:");
    process.exit();
  } catch (err) {
    console.log("Error", err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data destroyed");
    process.exit();
  } catch (err) {
    console.log("Error", err);
    process.exit(1);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
