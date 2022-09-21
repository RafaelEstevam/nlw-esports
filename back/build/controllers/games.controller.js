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
exports.GamesController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const games_schemas_1 = __importDefault(require("../schemas/games.schemas"));
const GamesController = {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield games_schemas_1.default.find();
            return res.status(200).json(games);
        });
    },
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (mongoose_1.default.Types.ObjectId.isValid(id)) {
                const game = yield games_schemas_1.default.findById(id);
                if (game) {
                    return res.status(200).json(game);
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
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = req.body;
            const searchedGame = yield games_schemas_1.default.findOne({ name: game.name });
            if (!searchedGame) {
                const newGame = yield games_schemas_1.default.create(game);
                newGame.save();
                res.status(201).json({ newGame });
            }
            else {
                res.status(400).json({ "message": "Game already registred." });
            }
        });
    },
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = req.body;
            const id = game.id;
            if (mongoose_1.default.Types.ObjectId.isValid(id)) {
                const searchedGame = yield games_schemas_1.default.findById(id);
                if (searchedGame) {
                    const gameUpdated = yield games_schemas_1.default.findOneAndUpdate({ id }, { name: game.name, thumbnail: game.thumbnail }, { new: true });
                    return res.status(200).json(gameUpdated);
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
                const searchedGame = yield games_schemas_1.default.findById(id);
                if (searchedGame) {
                    yield games_schemas_1.default.findByIdAndDelete(id);
                    return res.status(200).json({ message: "Game deleted" });
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
exports.GamesController = GamesController;
