import React from 'react'
import { Question } from '../../Components/Question'

export const Question1 = () => {
  return (
    <>
      <Question
        correctAnswer="mercader"
        question="En los bulliciosos mercados medievales, yo era quien viajaba de ciudad en ciudad, intercambiando especias, telas y objetos valiosos. Sin mí, el comercio se detendría y las riquezas no viajarían. ¿Quién soy?"
        nextPage="/question2"
      />
    </>
  )
}
