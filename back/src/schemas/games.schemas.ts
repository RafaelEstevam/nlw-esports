import {Schema, model} from 'mongoose';

const GameSchema = new Schema({
    name: String,
    thumbnail: String,
    ads: Array
});

export default model('Games', GameSchema);


