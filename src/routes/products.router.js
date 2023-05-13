import express from 'express';
import { Router } from 'express'
import productModel from '../dao/models/products.model.js';
import { v4 as uuidv4 } from 'uuid';

function generateID(){
  const newID = uuidv4().substring(0, 8);
  return newID
}


const router = Router();

router.post('/', async (req, res ) => {
  const productForm = req.body
  const productNew = {...productForm, code: generateID()}
  const productGenerate = new productModel(productNew)
  await productGenerate.save()
  res.redirect('/realtimeproducts')
})

router.delete('/:pid', (req, res )=> {
 const pid = req.params.name
})

export default router