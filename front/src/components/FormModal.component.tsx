import React, {InputHTMLAttributes} from 'react';
import {GameController} from 'phosphor-react';
import {GameInterface} from '../interfaces/Game.interface';

interface FormModalInterface{
    setOpen: React.MouseEvent<HTMLElement>,
    handleSubmit: React.FormEvent<HTMLFormElement>,
    games: Array<GameInterface>
}

interface InputInterface extends InputHTMLAttributes<HTMLInputElement>{}

const Input = (rest:InputInterface) => {
    return (
        <input {...rest} className="w-full rounded-sm py-3 px-4 bg-zinc-900 text-white text-sm"/>
    )
}

const FormModal = ({setOpen, games, handleSubmit}:FormModalInterface) => {
    return(
        <form className="w-full mt-4" onSubmit={(e) => handleSubmit(e)}>
            <div className="w-full flex flex-col gap-2 mb-4">
                <label className="text-white font-bold">Qual o game?</label>
                <select className="w-full rounded-sm py-3 px-4 bg-zinc-900 text-white text-sm">
                    <option value="">Selecione um jogo</option>
                    {games.map((item) => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full flex flex-col gap-2 mb-4">
                <label className="text-white font-bold">Seu nome (ou nickname)</label>
                <Input placeholder="Como te chamam dentro do game?"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label className="text-white font-bold">Joga há quantos anos?</label>
                    <Input type="number" placeholder="Tudo bem ser ZERO"/>
                </div>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label className="text-white font-bold">Qual o seu Discord?</label>
                    <Input placeholder="Usuário#0000"/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label className="text-white font-bold">Joga há quantos anos?</label>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="w-8 h-8 bg-zinc-900 rounded text-white" title="Domingo">D</button>
                        <button className="w-8 h-8 bg-zinc-900 rounded text-white" title="Segunda">S</button>
                        <button className="w-8 h-8 bg-zinc-900 rounded text-white" title="Terça">T</button>
                        <button className="w-8 h-8 bg-zinc-900 rounded text-white" title="Quarta">Q</button>
                        <button className="w-8 h-8 bg-zinc-900 rounded text-white" title="Quinta">Q</button>
                        <button className="w-8 h-8 bg-zinc-900 rounded text-white" title="Sexta">S</button>
                        <button className="w-8 h-8 bg-zinc-900 rounded text-white" title="Sábado">S</button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label className="text-white font-bold">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="w-full flex flex-col gap-2 mb-4">
                            <Input type="time" placeholder="Tudo bem ser ZERO"/>
                        </div>
                        <div className="w-full flex flex-col gap-2 mb-4">
                            <Input type="time" placeholder="Usuário#0000"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-2 mb-4">
                <input type="checkbox" name="check"/>
                <label className="text-white">Constumo me conectar ao chat de voz</label>
            </div>
            <div className="w-full flex justify-between gap-2 mb-4 mt-8">
                <button className='bg-zinc-500 py-3 px-4 rounded text-white hover:bg-zinc-600 flex items-center justify-between gap-4' onClick={() => setOpen(false)}>
                    Cancelar
                </button>
                <button className='bg-violet-500 py-3 px-4 rounded text-white hover:bg-violet-600 flex items-center justify-between gap-4'>
                    <GameController />
                    Encontrar Duo
                </button>
            </div>
        </form>
    )
};

export {FormModal}