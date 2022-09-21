import image from './assets/logo.svg';
import image1 from './assets/image_1.png';
import { Game } from './components/Game.component';
import { Banner } from './components/Banner.component';
import { useEffect, useState } from 'react';
import { GameInterface } from './interfaces/Game.interface';
import { Modal } from './components/Modal.component';
import {FormModal} from './components/FormModal.component';

function App() {

  const [games, setGames] = useState<GameInterface[]>([]);
  const [open, setOpen] = useState(false);

  const handleFetchGames = () => {
    fetch('http://localhost:8081/games').then(response => response.json()).then(data => {
      setGames(data);
    }).catch((e) => {
      console.log(e)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("teste");
  }

  useEffect(() => {
    handleFetchGames();
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={image} />
      
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <Modal
        {...{
          title: 'Publique um anúncio',
          confirm: setOpen,
          close: setOpen,
          show: open
        }}
      >
        <FormModal {...{setOpen, games, handleSubmit}} />
      </Modal>

      <div className='mt-16'>
        <div className='grid-cols-6 gap-6 w-full flex'>
          {games.map((item) => (
            <Game
              key={item.name}
              {...{ads: item.ads.length, thumbnail: item.thumbnail, link: "", name: item.name}}
            />
          ))}
        </div>
      </div>

      <Banner {...{setOpen}} />

      
    </div>
  )
}

export default App
