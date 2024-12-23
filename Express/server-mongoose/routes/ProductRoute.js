const express = require('express');
const router = express.Router();
const Products = require('../models/ProductsModel');
//const validate = require('../configs/auth')

// Endpoint to get all products
router.get('/count', async (req, res) => {
    try {
        const count = await Products.countDocuments(); 
        return res.status(200).json({count : count }); 
    } catch (error) {
       return res.status(500).json({ message: error.message }); 
    }
});

// Method : GET  || API : localhost:5000/products/all
router.get('/all', async (req, res) => {
    try {
        const products = await Products.find()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : POST  || API : localhost:5000/products/addproduct
router.post('/addproduct', async (req, res) =>{
    try {
      const ProductData = new Products(req.body)
      const {title, img, price} = ProductData
      if(!title || !img || !price){
             return res.status(400).json({message:"All fields are required"})
      }
    const storedata = await ProductData.save()
    return res.status(200).json(storedata);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
})


router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingproduct = await Products.findOne({ _id: id })
        if (!existingproduct) {
            res.status(404).json({ message: "Product not found" })
        }
        const updatedproduct = await Products.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingproduct = await Products.findOne({ _id: id })
        if (!existingproduct) {
            res.status(404).json({ message: "Product not found" })
        }
        await Products.findByIdAndDelete(id)
        res.status(200).json({ message: "Product Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})





module.exports = router;
