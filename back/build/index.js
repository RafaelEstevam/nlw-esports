"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
mongoose_1.default.connect('mongodb://localhost:27017/nlw', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Mongo connected");
});
app.use(express_1.default.json());
app.use(routes_1.routes);
// app.get('/', (req, res) => {
//     return res.status(201).json({"message": "Hello world"});
// });
// app.post('/ads', (req, res) => {
//     const {ads} = req.body;
//     return res.status(201).json(ads);
// });
// app.get('/ads', (req, res) => {
//     const {ads} = req.body;
//     return res.status(200).json(ads);
// });
// app.get('/ads/:id', (req, res) => {
//     const {id} = req.params;
//     const ads = {}
//     return res.status(200).json(ads);
// });
// app.put('/ads/:id', (req, res) => {
//     const {ads} = req.body;
//     return res.json(ads);
// });
// app.delete('/ads/:id', (req, res) => {
//     const {ads} = req.body;
//     return res.json(ads);
// });
// app.get('/games', (req, res) => {
//     const {game} = req.body;
//     return res.status(200).json(game);
// });
// app.get('/games/:id', (req, res) => {
//     const {id} = req.params;
//     const game = {}
//     return res.status(200).json(game);
// });
// app.post('/games', (req, res) => {
//     const {game} = req.body;
//     return res.status(201).json(game);
// });
// app.put('/games/:id', (req, res) => {
//     const {game} = req.body;
//     return res.json(game);
// });
// app.delete('/games/:id', (req, res) => {
//     const {game} = req.body;
//     return res.json(game);
// });
app.listen(8081, () => {
    console.log("Server Open");
});
