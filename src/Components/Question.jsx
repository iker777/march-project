import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <div className='min-h-[100vh] bg-blue-600 flex justify-center items-center'>
      <form className='flex flex-col justify-center items-center'>
        {answerIsCorrect === "incorrect" && <p className='text-red-500'>Your answer is incorrect</p>}
        <label>
          {question}
        </label>
        <input onChange={handleOnChange} name='userAnswer' type='text' placeholder='Give me your answer'/>
        <button onClick={ onClick } className="bg-red-500 p-4 rounded text-white flex justify-center items-center" type='submit'>Submit</button>
      </form>
    </div>
  )
}
