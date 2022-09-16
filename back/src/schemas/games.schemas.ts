import {Schema, model} from 'mongoose';

const GameSchema = new Schema({
    name: String,
    thumbnail: String
});

export default model('Games', GameSchema);


