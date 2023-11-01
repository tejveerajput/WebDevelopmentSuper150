const express = require('express');
const Product = require('../model/Product');
const router = express.Router(); //Mini application


//Read
router.get('/products' , async (req ,res)=>{
    let products = await Product.find({}); //promise
    res.render('products/index' , {products});
})

module.exports = router;