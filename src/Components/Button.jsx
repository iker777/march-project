import React from 'react'

export const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='uppercase px-14 py-5 text-lg font-semibold text-yellow-200 bg-black/60 border border-yellow-500 rounded-2xl shadow-lg shadow-yellow-900/30 hover:bg-yellow-600/20 hover:scale-105 transition hover:text-white'>{text}</button>
  )
}
