import React from 'react'

export const Question = () => {
  return (
    <div className='min-h-[100vh] bg-blue-600 flex justify-center items-center'>
      <form className='flex flex-col justify-center items-center'>
        <label>
        ¿Question 1?
        </label>
        <input type='text' placeholder='Give me your answer'/>
        <button className="bg-red-500 p-4 rounded text-white flex justify-center items-center" type='submit'>Submit</button>
      </form>
    </div>
  )
}
