import React, { useState } from 'react'

export const Card = ({id}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


 return (
   <div className={`cursor-pointer ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
     <div className={`flip-card-inner relative w-full h-full bg-white border-2 rounded-lg shadow-lg`} >
       <div className="flip-card-front flex items-center justify-center w-full h-full bg-blue-500 text-white font-bold text-2xl rounded-lg">
         ¡Haz clic en mí!
       </div>
       <div className="flip-card-back grid grid-rows-3 w-full h-full bg-green-500 text-white font-bold text-2xl rounded-lg">
        <div className='w-full flex justify-end'>
          <div className=' w-[2.5em] h-[2.5em] m-[0.5em] bg-slate-950 bg-opacity-50 rounded-full flex justify-center items-center'>
            1
          </div>
        </div>
        <p className='w-full text-center flex justify-center items-center'>¡Me diste vuelta!</p>
       </div>
     </div>
   </div>
  );
}