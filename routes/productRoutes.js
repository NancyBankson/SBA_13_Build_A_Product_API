require("dotenv").config();
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/api/products/:id', productController.getSingleProduct);
router.post('/api/products', productController.createNewProduct);
router.put('/api/products/:id', productController.updateProduct);
router.delete('/api/products/:id', productController.deleteProduct);
router.get('/api/products', productController.queryProduct);

module.exports = router;