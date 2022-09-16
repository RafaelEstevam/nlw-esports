import { Response, Request } from "express";
import mongoose from "mongoose";
import AdsSchema from "../schemas/ads.schemas";
import { Ads } from "../interfaces/ads.interface";

const AdsController = {
    async get(req: Request, res: Response){
        const ads = await AdsSchema.find();
        return res.status(200).json(ads);
    },
    async getById(req: Request, res: Response){
        const {id} = req.params;
        if(mongoose.Types.ObjectId.isValid(id)){
            const ads = await AdsSchema.findById(id, {discord: 0});
            if(ads){
                return res.status(200).json(ads);
            }else{
                return res.status(400).json({message: "Not found"});
            }
        }else{
            return res.status(400).json({message: "Invalid Id"});
        }
    },
    async getAdsByGameName(req: Request, res: Response){
        const {game} = req.body;
        const ads = await AdsSchema.find({game}, {discord: 0});
        if(ads.length > 0){
            return res.status(200).json(ads);
        }else{
            return res.status(400).json({message: "Not found"});
        }
    },
    async post(req: Request, res: Response){
        const ads:Ads = req.body;
        const newAds = await AdsSchema.create(ads);
        newAds.save();
        res.status(201).json({newAds});
    },
    async put(req: Request, res: Response){
        const ads:Ads = req.body;
        const id:string = ads.id!;
        const {connectToTalk, daysToPlay, discord, game, hourToPlay, nameNickName, xyYears} = ads;
        if(mongoose.Types.ObjectId.isValid(id)){
            const searchedAds = await AdsSchema.findById(id);
            if(searchedAds){
                const adsUpdated = await AdsSchema.findOneAndUpdate(
                    {id},
                    {connectToTalk, daysToPlay, discord, game, hourToPlay, nameNickName, xyYears},
                    {new: true}
                );
                return res.status(200).json(adsUpdated);
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
            const searchedAds = await AdsSchema.findById(id);
            if(searchedAds){
                await AdsSchema.findByIdAndDelete(id);
                return res.status(200).json({message: "Ads deleted"});
            }else{
                return res.status(400).json({message: "Not found"});
            }
        }else{
            return res.status(400).json({message: "Invalid Id"});
        }
    }
}

export {AdsController};