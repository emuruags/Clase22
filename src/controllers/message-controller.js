import { mongooseCon } from "../config/configurations.js";
import mongoose from 'mongoose';
import { normalizeMessage } from './normalizr-controller.js';


await mongooseCon();

const mongooseSchema = new mongoose.Schema({
    author: {
        id: {
            type: String,
            required: true,
            max: 100
        },
        nombre: {
            type: String,
            required: true,
            max: 100
        },
        apellido: {
            type: String,
            required: true,
            max: 50
        },
        edad: {
            type: Number,
            required: true
        },
        alias: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true,
            max: 100
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    },
    text: {
        type: String,
        required: true,
        max: 400
    }
});

const messageModel = mongoose.model('messages', mongooseSchema);

const saveMessage = async (message) => {
    const newMessage = new messageModel(message);
    try {
        newMessage.save();
    } catch (error) {
        throw new Error(error);
    }
}

const getMessage = async () => {
    try {
        const message = await messageModel.find();
        return normalizeMessage(message);
    } catch (error) {
        throw new Error(error);
    }
}


export { saveMessage, getMessage };