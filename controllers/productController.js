const Product = require("../models/Product");

async function getSingleProduct(req, res) {
    try {
        const foundProduct = await Product.findById(req.params.id);
        if (foundProduct) {
            res.json(foundProduct);
        } else {
            res.status(400).json({ error: "Product not found." })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Id." })
    }
}

async function createNewProduct(req, res) {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(400).json({ error: "Failed to create product.", details: error.message });
    }
}

async function updateProduct(req, res) {
    try {
        const editedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(editedProduct);
    } catch (error) {
        console.error("Error editing product:", error);
        res.status(400).json({ error: "Failed to edit product.", details: error.message });
    }
}

async function deleteProduct(req, res) {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);
        if (deleteProduct) {
            console.log("Product deleted:", deleteProduct.title);
        } else {
            console.log("Could not find product.");
        }
        res.send("Product deleted.");
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(400).json({ error: "Failed to delete product.", details: error.message });
    }
}

async function queryProduct(req, res) {
    try {
        const queryObj = { ...req.query };
        if (!queryObj.minPrice) {
            queryObj.minPrice = 0;
        }
        if (!queryObj.maxPrice) {
            queryObj.maxPrice = 100000;
        }
        console.log(queryObj.category);
        const foundBooks = await Product.find({
            category: queryObj.category,
            price: { $gte: queryObj.minPrice, $lte: queryObj.maxPrice }
        })
        if (foundBooks) {
            res.json(foundBooks);
        } else {
            res.status(400).json({ error: "Product list not found." })
        }
    } catch (error) {
        res.status(400).json({ error: "Error getting product list." })
    }
}

module.exports = {
    getSingleProduct,
    createNewProduct,
    updateProduct,
    deleteProduct,
    queryProduct
};