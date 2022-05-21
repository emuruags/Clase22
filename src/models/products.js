import mongoose from "mongoose";

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 200
    },
    price: {
        type: Number,
        required: true
    },
    thumbnails: {
        type: String,
        max: 1000
    }
});

export const products = mongoose.model(productsCollection, productsSchema);