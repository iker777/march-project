import React from 'react'
import { Link } from 'react-router-dom'

export const NextLevel = () => {
  return (
    <div className='h-full w-full bg-slate-700 bg-opacity-50 absolute flex flex-col justify-center items-center'>
    {/* <p>¡Merlucilla! Llena tu mochila de exploradora con pistas.</p>
      <p>Gira 3 cartas antes de ir al siguiente reto, memoriza bien las pistas. Las necesitarás.</p> */}
      <Link className='uppercase px-14 py-5 text-lg font-semibold text-yellow-200 bg-black/60 border border-yellow-500 rounded-2xl shadow-lg shadow-yellow-900/30 hover:bg-yellow-600/20 hover:scale-105 transition hover:text-white' to="/question1">Ir al siguiente nivel</Link> 
    </div>
    )
  }
  