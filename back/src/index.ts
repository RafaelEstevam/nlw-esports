import express from 'express';
import mongoose, { ConnectOptions } from "mongoose";
import cors from 'cors';
import { routes } from './routes';

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nlw', {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions, () => {
    console.log("Mongo connected");
});

app.use(express.json());
app.use(routes);


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

app.listen(8081, () =>{
    console.log("Server Open");
});