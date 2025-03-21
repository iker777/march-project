import { Question } from '../../Components/Question'

export const Question3 = () => {
  return (
    <>
      <Question
        correctAnswer="reloj"
        question="Mido el tiempo, pero no tengo vida. Me escuchas en las torres y me ves colgado. Sin mí, el día sería un caos y la noche eterna. ¿Qué soy?"
        nextPage="/finalPage"
        questionNumber={3}
      />
    </>
  )
}
