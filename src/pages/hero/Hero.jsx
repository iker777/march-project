import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../../assets/banner.jpeg"

export const Hero = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-evenly items-center text-center" style={{ backgroundImage: `url(${banner})` }}>
      {/* Mensaje de bienvenida */}
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 drop-shadow-lg mb-6">
        Zorionak bonita! 🎉 El pueblo necesita tu ayuda.
      </h1>

      {/* Botón de inicio */}
      <Link
        className="uppercase px-14 py-5 text-lg font-semibold text-yellow-200 bg-black/60 border border-yellow-500 
               rounded-2xl shadow-lg shadow-yellow-900/30 hover:bg-yellow-600/20 hover:scale-105 
               transition hover:text-white"
        to="/game"
      >
        ¡Irantzu, explora la ciudad y encuentra al hombre en apuros!
      </Link>
    </div>
  )
}
