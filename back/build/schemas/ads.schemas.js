"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AdsSchema = new mongoose_1.Schema({
    game: String,
    nameNickName: String,
    xyYears: Number,
    discord: String,
    daysToPlay: (Array),
    hourToPlay: Number,
    connectToTalk: Boolean,
    userId: String
});
exports.default = (0, mongoose_1.model)('Ads', AdsSchema);
