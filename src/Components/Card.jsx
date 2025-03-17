import React, { useState } from 'react'

export const Card = () => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped); // Cambia el estado al hacer clic
    console.log(isFlipped)
  };

  return (
    <div id="flipCard" className="card cursor-pointer">
      <div
        className={`card w-64 h-96 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={handleClick}
      >
        {/* Parte delantera de la carta */}
        <div className="flip-card-front flip-card-inner flex items-center justify-center w-full h-full bg-blue-500 text-white font-bold text-2xl rounded-lg">
          ¡Haz clic en mí!
        </div>

        {/* Parte trasera de la carta */}
        <div className="flip-card-back flex items-center justify-center w-full h-full bg-green-500 text-white font-bold text-2xl rounded-lg">
          ¡Me diste vuelta!
        </div>
      </div>
    </div>
  )
}
