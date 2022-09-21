"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ads_schemas_1 = __importDefault(require("../schemas/ads.schemas"));
const AdsController = {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ads = yield ads_schemas_1.default.find();
            return res.status(200).json(ads);
        });
    },
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (mongoose_1.default.Types.ObjectId.isValid(id)) {
                const ads = yield ads_schemas_1.default.findById(id, { discord: 0 });
                if (ads) {
                    return res.status(200).json(ads);
                }
                else {
                    return res.status(400).json({ message: "Not found" });
                }
            }
            else {
                return res.status(400).json({ message: "Invalid Id" });
            }
        });
    },
    getAdsByGameName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { game } = req.body;
            const ads = yield ads_schemas_1.default.find({ game }, { discord: 0 });
            if (ads.length > 0) {
                return res.status(200).json(ads);
            }
            else {
                return res.status(400).json({ message: "Not found" });
            }
        });
    },
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ads = req.body;
            const newAds = yield ads_schemas_1.default.create(ads);
            newAds.save();
            res.status(201).json({ newAds });
        });
    },
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ads = req.body;
            const id = ads.id;
            const { connectToTalk, daysToPlay, discord, game, hourToPlay, nameNickName, xyYears } = ads;
            if (mongoose_1.default.Types.ObjectId.isValid(id)) {
                const searchedAds = yield ads_schemas_1.default.findById(id);
                if (searchedAds) {
                    const adsUpdated = yield ads_schemas_1.default.findOneAndUpdate({ id }, { connectToTalk, daysToPlay, discord, game, hourToPlay, nameNickName, xyYears }, { new: true });
                    return res.status(200).json(adsUpdated);
                }
                else {
                    return res.status(400).json({ message: "Not found" });
                }
            }
            else {
                return res.status(400).json({ message: "Invalid Id" });
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            if (mongoose_1.default.Types.ObjectId.isValid(id)) {
                const searchedAds = yield ads_schemas_1.default.findById(id);
                if (searchedAds) {
                    yield ads_schemas_1.default.findByIdAndDelete(id);
                    return res.status(200).json({ message: "Ads deleted" });
                }
                else {
                    return res.status(400).json({ message: "Not found" });
                }
            }
            else {
                return res.status(400).json({ message: "Invalid Id" });
            }
        });
    }
};
exports.AdsController = AdsController;
