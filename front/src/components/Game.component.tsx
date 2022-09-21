import React from "react";
import { GameInterface } from "../interfaces/Game.interface";

const Game = ({link, name, ads, thumbnail}:GameInterface) => {
    return (
        <a href='' className='relative w-fit rounded-md overflow-hidden'>
            <div className='bg-game-shadow absolute w-full h-1/2 z-10 bottom-0 flex flex-col justify-end'>
                <div className='p-4'>
                    <h3 className='text-white font-bold'>{name}</h3>
                    <p className='text-white'>{ads} anúncio(s)</p>
                </div>
            </div>
            <img src={thumbnail} />
        </a>
    )
};

export {Game};