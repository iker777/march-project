import React, { useState } from 'react'
import dataImg from '../helpers/dataImg';

export const Card = ({number, onClick}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


 return (
   <div className={`relative cursor-pointer ${isFlipped ? 'flipped' : ''}`} onClick={() => {handleClick(); onClick()}}>
     <div className={`flip-card-inner relative w-full h-full  rounded-lg shadow-lg`} >
       <div className="flip-card-front flex items-center justify-center w-full h-full text-yellow-200 bg-black/80 border border-yellow-500 text-2xl rounded-lg">
         ¡Haz clic en mí!
       </div>
       <div className="flip-card-back flex justify-center items-center w-full h-full bg-black/95 text-white font-bold text-2xl rounded-lg p-5">
        <div className='absolute top-0 right-0 w-full flex justify-end'>
          <div className=' w-[2.5em] h-[2.5em] m-[0.5em] bg-slate-600 bg-opacity-50 rounded-full flex justify-center items-center'>
            {number}
          </div>
        </div>
        <img className='max-h-full rounded  border-white' src={dataImg[number - 1]?.img || 'default-image.jpg'} />
       </div>
     </div>
   </div>
  );
}