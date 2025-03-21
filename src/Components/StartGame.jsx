import React from 'react'
import { Button } from './Button'

export const StartGame = ({onStart}) => {
  return (
    <div className="h-full w-full bg-gray-900/80 absolute flex flex-col justify-center items-center text-center text-white p-6">
      <p className="text-xl font-semibold mb-2 text-yellow-300">
        ¡Merlucilla! 🐟 Llena tu mochila de exploradora con pistas.
      </p>
      <p className="text-lg mb-6 text-gray-300">
        Gira 3 cartas antes de ir al siguiente reto, memoriza bien las pistas. Las necesitarás. 🧩
      </p>
      <Button
        text="¡Empezar el primer reto!"
        onClick={onStart}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
      />
    </div>

  )
}
