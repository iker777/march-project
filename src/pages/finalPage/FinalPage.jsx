import { useRef, useEffect, useState } from "react";
import bannerOscuro from '../../assets/banner-oscuro.png'

export const FinalPage = () => {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onloadedmetadata = () => {
        setDuration(video.duration);
      };
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && duration > 0 && video.currentTime >= duration - 2.5) {
      video.pause();
      video.currentTime = 0; // Reinicia el video al inicio
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannerOscuro})` }}>
      <div className="bg-black/70 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center text-white border border-yellow-500 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">¡Felicidades, Irantzu! 🎉</h1>
        <p className="text-lg mb-4">
          ¡Has superado el desafío y has encontrado al mercader!
          Has demostrado astucia, valor y un gran espíritu aventurero.
        </p>

        <p className="text-yellow-300 mb-2 italic">
          "El tiempo es un tesoro, y tú has sabido encontrarlo".
        </p>

        {/* 📽️ Aquí va el video */}
        <div className="w-full">
          <video controls className="w-full h-[625px] object-cover rounded-lg border border-yellow-500 shadow-lg "
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}>
            <source src="/videos/mercader-video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
      </div>
    </div>
  )
}
