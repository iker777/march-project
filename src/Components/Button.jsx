import React from 'react'

export const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='bg-red-500 p-4 rounded text-white w-64 h-20 flex justify-center items-center'>{text}</button>
  )
}
