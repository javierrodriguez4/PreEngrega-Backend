import express from 'express';
import { Router } from 'express'
import productModel from '../dao/models/products.model.js';


const router = Router();

router.get('/', async (req, res) => {
  const products = await productModel.find().lean().exec()
  res.render('realTimeProducts', { products })
});



export default router