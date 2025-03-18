import React from 'react'
import { Question } from '../../Components/Question'

export const Question1 = () => {
  return (
    <>
      <Question
        correctAnswer="42"
        question="What is the answer to life, the universe and everything?"
        nextPage="/question2"
      />
    </>
  )
}
