import React, { ReactHTML } from "react";

interface ModalInterface{
    title: string,
    show:  boolean,
    confirm: React.MouseEvent<HTMLElement>
    close: React.MouseEvent<HTMLElement>,
    children: JSX.Element | JSX.Element[] | string | string[];
}

const Modal = ({title, confirm, close, children, show}: ModalInterface) => {
    return show && (
        <div className="absolute w-full h-full bg-[#181818c7] top-0 z-50 flex flex-col items-center justify-center">
            <div className="rounded-md bg-[#2a2634] w-1/4 p-8">
                <div className="flex w-full justify-between items-center">
                    <h2 className="text-white text-3xl font-black ">{title}</h2>
                    <button className=' py-3 px-4 rounded text-white flex items-center justify-between gap-4' onClick={() => close(false)}>
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
};

export {Modal}