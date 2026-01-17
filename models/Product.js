const mongoose = require('mongoose')
const { Schema } = mongoose

// create the new schema for Product

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        message: "Name is required."
    },
    description: {
        type: String,
        required: true,
        message: "Description is required.",
        min: [0.01, "Price must be greater than zero."]
    },
    price: {
        type: Number,
        required: true,
        message: "Price is required."
    },
    category: {
        type: String,
        required: true,
        message: "Category is required."
    },
    inStock: {
        type: Boolean,
        default: true
    },
    tags: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product