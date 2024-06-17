import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [reviewSchema],
    rating: {
      rate: { type: Number, required: true },
      count: { type: Number, required: true },
    },
    countInStock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
