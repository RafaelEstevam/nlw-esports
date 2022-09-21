import React from "react";
import {MagnifyingGlassPlus} from 'phosphor-react'

const Banner = ({setOpen}) => {
    return(
        <div className='
        mt-8
        relative
        self-stretch
        before:w-full
        before:bg-nlw-gradient
        before:p-5
        before:flex
        before:rounded-md
      '>
        <div className='absolute bg-[#2a2634] w-full py-6 px-8 rounded-lg top-1 flex justify-between'>
          <div>
            <h2 className='text-xl text-white font-bold'>
              Não encontrou o seu duo?
            </h2>
            <p className='text-white text-sm text-slate-300'>
              Publique um anúncio para encontrar novos players!   
            </p>
          </div>
          <button className='bg-violet-500 py-3 px-4 rounded text-white hover:bg-violet-600 flex items-center justify-between gap-4' onClick={() => setOpen(true)}>
            <MagnifyingGlassPlus />
            Publicar anúncio
          </button>
        </div>
      </div>
    )
};

export {Banner}