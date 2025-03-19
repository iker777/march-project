import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bannerOscuro from '../assets/banner-oscuro.png'

export const Question = ({correctAnswer, question, nextPage}) => {

  const navigate = useNavigate()
  
  const [data, setData] = useState({
    userAnswer: null,
  });

  const [answerIsCorrect, setAnswerIsCorrect] = useState("not answered");

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onClick = (e) => {
    e.preventDefault();
    if (data.userAnswer === correctAnswer) {
      setAnswerIsCorrect("correct");
      navigate(nextPage);
    }
    else {
      setAnswerIsCorrect("incorrect");
    }

  }

  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${bannerOscuro})` }}
    >
      <form className='bg-black/70  p-12 rounded-lg shadow-lg flex flex-col justify-center items-center text-white border border-yellow-500 max-w-md w-full'>
        {answerIsCorrect === "incorrect" && <p className='text-red-500 mb-2'>Su respuesta es incorrecta grumetilla</p>}
        <label className='text-xl font-semibold text-yellow-400 mb-4 text-center'>
          {question}
        </label>
        <input onChange={handleOnChange} name='userAnswer' className='p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring focus:border-yellow-400 w-full text-center' type='text' placeholder='Escriba su respuesta'/>
        <button onClick={ onClick } className="mt-4 bg-yellow-600 hover:bg-yellow-500 transition px-6 py-2 rounded text-white font-bold shadow-lg" type='submit'>Submit</button>
      </form>
    </div>
  )
}
