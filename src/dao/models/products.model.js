import mongoose from "mongoose";

const productsCollection = 'products';

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    category: String,
    status: Boolean,
    description: String,
    price: Number,
    thumbnail: String,
    code: String,
    stock: Number

})

const productModel = mongoose.model( productsCollection, productSchema)

export default productModel