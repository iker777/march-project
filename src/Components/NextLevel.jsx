import React from 'react'
import { Link } from 'react-router-dom'

export const NextLevel = () => {
  return (
    <div className='h-full w-full bg-slate-700 bg-opacity-80 absolute flex flex-col justify-center items-center'>
    {/* <p>¡Merlucilla! Llena tu mochila de exploradora con pistas.</p>
      <p>Gira 3 cartas antes de ir al siguiente reto, memoriza bien las pistas. Las necesitarás.</p> */}
      <Link className='bg-red-500 p-4 rounded text-white w-80 h-20 flex justify-center items-center' to="/question1">Ir al siguiente nivel</Link> 
    </div>
    )
  }
  