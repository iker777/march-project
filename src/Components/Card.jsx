import React, { useState } from 'react'

export const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(isFlipped);

 return (
   <div className={`cursor-pointer ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
     <div className={`flip-card-inner relative w-full h-full bg-white border-2 rounded-lg shadow-lg`} >
       <div className="flip-card-front flex items-center justify-center w-full h-full bg-blue-500 text-white font-bold text-2xl rounded-lg">
         ¡Haz clic en mí!
       </div>
       <div className="flip-card-back flex items-center justify-center w-full h-full bg-green-500 text-white font-bold text-2xl rounded-lg">
         ¡Me diste vuelta!
       </div>
     </div>
   </div>
  );
}