const { Schema, model } = require("mongoose");

// Define the product schema
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

// Create the product model from the schema
const Products = model("products", ProductSchema);

module.exports = Products;
