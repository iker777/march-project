import React, { useState } from 'react'
import { Card } from '../../Components/Card'
import { StartGame } from '../../Components/StartGame'
import { NextLevel } from '../../Components/NextLevel'
import bannerOscuro from '../../assets/banner-oscuro.png'

export const Game = () => {
  const [startCards, setStartCards] = useState(false);
  const [clickOrder, setClickOrder] = useState(1); // Controla el orden de los clics
  const [cardNumbers, setCardNumbers] = useState({}); // Guarda el número asignado a cada carta

  
  const handleCardClick = (id) => {
    // Si la carta aún no tiene número, se lo asignamos
    if (!(id in cardNumbers)) {
      setCardNumbers((prev) => ({
        ...prev,
        [id]: clickOrder, // Asignar el número actual a esta carta
      }));
      setClickOrder((prev) => prev + 1); // Aumentamos el número global
    }
  };
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 min-h-screen max-h-screen relative" style={{ backgroundImage: `url(${bannerOscuro})` }}>
    {
      [0, 1, 2, 3, 4, 5].map((id) => <Card id={id} key={id} number={cardNumbers[id] || 0} onClick={() => handleCardClick(id)} />)
    }
    {!startCards && <StartGame onStart={() => setStartCards(!startCards)} />}
    {clickOrder > 3 && <NextLevel/>}
    </div>
  )
}
