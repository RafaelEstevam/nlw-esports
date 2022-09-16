import {Schema, model} from 'mongoose';

const AdsSchema = new Schema({
    game: String,
    nameNickName: String,
    xyYears: Number,
    discord: String,
    daysToPlay: Array<String>,
    hourToPlay: Number,
    connectToTalk: Boolean,
    userId: String
});

export default model('Ads', AdsSchema);


