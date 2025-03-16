import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='min-h-[100vh] bg-blue-600 flex justify-center items-center'>
      <Link className='bg-red-500 p-4 rounded text-white w-80 h-20 flex justify-center items-center' to="/game">Game</Link>
    </div>
  )
}
