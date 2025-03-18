import { Question } from '../../Components/Question'

export const Question2 = () => {
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
