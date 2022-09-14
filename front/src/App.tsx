import {MagnifyingGlassPlus} from 'phosphor-react'

import image from './assets/logo.svg';
import image1 from './assets/image_1.png';
import image2 from './assets/image_2.png';
import image3 from './assets/image_3.png';
import image5 from './assets/image_5.png';
import image6 from './assets/image_6.png';
import image7 from './assets/image_7.png';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={image} />
      
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>
      
      <div className='mt-16'>
        <div className='grid-cols-6 gap-6 w-full flex'>
          <a href='' className='relative w-fit rounded-md overflow-hidden'>
            <div className='bg-game-shadow absolute w-full h-1/2 z-10 bottom-0 flex flex-col justify-end'>
              <div className='p-4'>
                <h3 className='text-white font-bold'>League of Legends</h3>
                <p className='text-white'>4 anúncios</p>
              </div>
            </div>
            <img src={image1} />
          </a>
          <a href='' className='relative w-fit rounded-md overflow-hidden'>
            <div className='bg-game-shadow absolute w-full h-1/2 z-10 bottom-0 flex flex-col justify-end'>
              <div className='p-4'>
                <h3 className='text-white font-bold'>League of Legends</h3>
                <p className='text-white'>4 anúncios</p>
              </div>
            </div>
            <img src={image2} />
          </a>
          <a href='' className='relative w-fit rounded-md overflow-hidden'>
            <div className='bg-game-shadow absolute w-full h-1/2 z-10 bottom-0 flex flex-col justify-end'>
              <div className='p-4'>
                <h3 className='text-white font-bold'>League of Legends</h3>
                <p className='text-white'>4 anúncios</p>
              </div>
            </div>
            <img src={image3} />
          </a>
          <a href='' className='relative w-fit rounded-md overflow-hidden'>
            <div className='bg-game-shadow absolute w-full h-1/2 z-10 bottom-0 flex flex-col justify-end'>
              <div className='p-4'>
                <h3 className='text-white font-bold'>League of Legends</h3>
                <p className='text-white'>4 anúncios</p>
              </div>
            </div>
            <img src={image5} />
          </a>
          <a href='' className='relative w-fit rounded-md overflow-hidden'>
            <div className='bg-game-shadow absolute w-full h-1/2 z-10 bottom-0 flex flex-col justify-end'>
              <div className='p-4'>
                <h3 className='text-white font-bold'>League of Legends</h3>
                <p className='text-white'>4 anúncios</p>
              </div>
            </div>
            <img src={image6} />
          </a>
          <a href='' className='relative w-fit rounded-md overflow-hidden'>
            <div className='bg-game-shadow absolute w-full h-1/2 z-10 bottom-0 flex flex-col justify-end'>
              <div className='p-4'>
                <h3 className='text-white font-bold'>League of Legends</h3>
                <p className='text-white'>4 anúncios</p>
              </div>
            </div>
            <img src={image7} />
          </a>
        </div>
      </div>

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
          <button className='bg-violet-500 py-3 px-4 rounded text-white hover:bg-violet-600 flex items-center justify-between gap-4'>
            <MagnifyingGlassPlus />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
