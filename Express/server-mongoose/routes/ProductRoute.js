const express = require('express');
const router = express.Router();
const Products = require('../models/ProductsModel');
//const Users = require('../models/UserModel');

// Endpoint to get all products
router.get('/all', async (req, res) => {
    try {
        const products = await Products.find(); // Fetch all products from the database
        res.status(200).json(products); // Return the products as JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Return error if something goes wrong
    }
});

router.post('/addproduct', async (req, res) =>{
    try {
      const ProductData = new Products(req.body)
      const {title, img, price} = ProductData
      if(!title || !img || !price){
             res.status(401).json({message:"All fields are required"})
      }
    const storedata = await ProductData.save()
    res.status(200).json(storedata);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.put('/update:id', async (req,res) =>{
    try{
        const id = req.params.id
        const existproduct = await Products.findOne({ _id: id})
        if(!existproduct){
            res.status(401).json({message:"Product not found"})
        }
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
})





module.exports = router;
