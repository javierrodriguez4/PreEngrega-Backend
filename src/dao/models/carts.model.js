import mongoose from "mongoose";

const cartsCollection = 'carts';

const cartSchema = new mongoose.Schema({
    items: [
        {
            producto: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product', 
                required: true 
            },
            cantidad: { 
                type: Number, 
                required: true 
            }
        }
    ],
    default:[]
}, {
    timestamps: true
});

cartSchema.pre('findOne', function(next) {
    this.populate('items.producto');
    next();
});

const cartModel = mongoose.model( cartsCollection, cartSchema)

export default cartModel

