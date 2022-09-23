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

app.listen(8081, () =>{
    console.log("Server Open");
});