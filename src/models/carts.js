import mongoose from "mongoose";

const cartsCollection = 'cart';

const cartsSchema = new mongoose.Schema({

    timestamp: {
        type: Date,
        required: true
    },
    product: {
        type: Array,
        "default": []
    },
    total: { type: Number }

});

export const cart = mongoose.model(cartsCollection, cartsSchema);