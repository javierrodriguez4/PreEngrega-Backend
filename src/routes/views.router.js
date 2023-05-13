import express from 'express';
import { Router } from 'express'
import productModel from '../dao/models/products.model.js';
import { v4 as uuidv4 } from 'uuid';

function generateID(){
  const newID = uuidv4().substring(0, 8);
  return newID
}


const router = Router();

//router products

router.get('/products', async (req, res) => {
  const products = await productModel.find().lean().exec()
  res.render('index', { products })
});

router.get('/products/create', (req, res)=>{
  res.render('form')
})

router.get('/products/:pid', async (req, res) => {
  const id = req.params.name
  const product = await productModel.findOne({ id }).lean().exec()
  res.render('product', { product })
});

//router carts

router.get('/carts', async (req, res) => {
    const products = await productModel.find().lean().exec()
    res.render('carts', {})
  });
  

export default router