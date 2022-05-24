import mongoose from 'mongoose';

export const mongooseCon = async () => mongoose.connect('mongodb+srv://emurua:MongoCoderHouse1717!@cluster0.q6bht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('Mongo connected'))
    .catch(err => console.log(err));


export default { mongooseCon };