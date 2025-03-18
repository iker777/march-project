import React from 'react'
import { Button } from './Button'

export const StartGame = ({onStart}) => {
  return (
    <div className='h-full w-full bg-slate-700 bg-opacity-80 absolute flex flex-col justify-center items-center'>
        <p>¡Merlucilla! Llena tu mochila de exploradora con pistas.</p>
        <p>Gira 3 cartas antes de ir al siguiente reto, memoriza bien las pistas. Las necesitarás.</p>
        <Button text="¡Empezar el primer reto!" onClick={onStart}/>
    </div>
  )
}
