import express from 'express';
import { Router } from 'express'
import productModel from '../dao/models/products.model.js';
import { v4 as uuidv4 } from 'uuid';
import cartModel from '../dao/models/carts.model.js';

function generateID(){
  const newID = uuidv4().substring(0, 8);
  return newID
}

const router = Router();

router.get('/:pid', async (req, res) => {
  const id = req.params.name
  const product = await productModel.findOne({ id }).lean().exec()
  res.render('product', { product })
});

router.post('/', async (req, res ) => {
  const productForm = req.body
  const productNew = {...productForm, code: generateID()}
  const productGenerate = new productModel(productNew)
  await productGenerate.save()
  res.redirect('/realtimeproducts')
})

router.put('/pid', async (req, res) => {
  const pid = req.params.name
  const productNewData = req.body
  try{
    await cartModel.updateOne({ id }, { ...productNewData })
  }catch(err){
    console.log({err})
  }
})

router.delete('/:pid', async (req, res )=> {
 const pid = req.params.name
 try{
  await cartModel.deleteOne({ id })
 }catch (err) {
  console.log({err})
 }
})



export default router