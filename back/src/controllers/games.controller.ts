import { Response, Request } from "express";
import mongoose from "mongoose";
import GameSchema from "../schemas/games.schemas";
import { Game } from "../interfaces/games.interface";

const GamesController = {
    async get(req: Request, res: Response){
        const games = await GameSchema.find();
        return res.status(200).json(games);
    },
    async getById(req: Request, res: Response){
        const {id} = req.params;
        if(mongoose.Types.ObjectId.isValid(id)){
            const game = await GameSchema.findById(id);
            if(game){
                return res.status(200).json(game);
            }else{
                return res.status(400).json({message: "Not found"});
            }
        }else{
            return res.status(400).json({message: "Invalid Id"});
        }
    },
    async post(req: Request, res: Response){
        const game:Game = req.body;
        const searchedGame = await GameSchema.findOne({name: game.name});
        if(!searchedGame){
            const newGame = await GameSchema.create(game);
            newGame.save();
            res.status(201).json({newGame});
        }else{
            res.status(400).json({"message": "Game already registred."});
        }
    },
    async put(req: Request, res: Response){
        const game:Game = req.body;
        const id:string = game.id!;
        if(mongoose.Types.ObjectId.isValid(id)){
            const searchedGame = await GameSchema.findById(id);
            if(searchedGame){
                const gameUpdated = await GameSchema.findOneAndUpdate(
                    {id},
                    {name: game.name, thumbnail: game.thumbnail},
                    {new: true}
                );
                return res.status(200).json(gameUpdated);
            }else{
                return res.status(400).json({message: "Not found"});
            }
        }else{
            return res.status(400).json({message: "Invalid Id"});
        }
    },
    async delete(req: Request, res: Response){
        const {id} = req.body;
        if(mongoose.Types.ObjectId.isValid(id)){
            const searchedGame = await GameSchema.findById(id);
            if(searchedGame){
                await GameSchema.findByIdAndDelete(id);
                return res.status(200).json({message: "Game deleted"});
            }else{
                return res.status(400).json({message: "Not found"});
            }
        }else{
            return res.status(400).json({message: "Invalid Id"});
        }
    }
}

export {GamesController};