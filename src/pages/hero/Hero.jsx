import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../../assets/banner.jpeg"

export const Hero = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center" style={{ backgroundImage: `url(${banner})` }}>
      <Link className='uppercase px-14 py-5 text-lg font-semibold text-yellow-200 bg-black/60 border border-yellow-500 rounded-2xl shadow-lg shadow-yellow-900/30 hover:bg-yellow-600/20 hover:scale-105 transition hover:text-white' to="/game">¡Es tiempo de explorar cumpleañera!</Link>
    </div>
  )
}
