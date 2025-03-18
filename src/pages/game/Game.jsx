import React, { useState } from 'react'
import { Card } from '../../Components/Card'
import { StartGame } from '../../Components/StartGame'

export const Game = () => {
  const [startCards, setStartCards] = useState(false);
  const [clickOrder, setClickOrder] = useState(1); // Controla el orden de los clics
  const [cardNumbers, setCardNumbers] = useState({}); // Guarda el número asignado a cada carta

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 min-h-screen relative'>
      {
        [0,1,2,3,4,5].map((id) => <Card id={id} key={id}/>)
      }
      {!startCards && <StartGame onStart={() => setStartCards(!startCards)} />}
    </div>
  )
}
