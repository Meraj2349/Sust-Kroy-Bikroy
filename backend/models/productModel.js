import mongoose from "mongoose";

// This will create a schema for the reviews
const reviewesSchema = mongoose.Schema(
  {
    // This will create a relationship between the product and the user
    user: {
        //
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    //this will automatically create timestamps for each review
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    // This will create a relationship between the product and the user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewesSchema],

    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    comments: [
      {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
      },
    ],
  },
  {
    // This will automatically create timestamps for each product
    timestamps: true,
  }
);

// This will create a model called Product

const Product = mongoose.model("Product", productSchema);

export default Product;
