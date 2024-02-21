import { useEffect, useState } from 'react';

function AnimatedTitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Una vez que el componente se monta, establece isVisible a true para iniciar la animación
    setIsVisible(true);
  }, []);

  return (
    <h2
      className={`text-6xl font-bold mb-4 text-center lg:text-left transition-transform duration-1000 ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      Welcome!
    </h2>
  );
}

export default function Portada() {
    return (
        <section className="bg-zinc-950 text-white py-20">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
    <div className="lg:w-1/2">
      <AnimatedTitle />
      <p className="text-2xl leading-relaxed text-center lg:text-left">
        I am Julieta Lotumolo, backend developer.
      </p>
    </div>
    <div className="lg:w-1/2 lg:pl-10 mb-4 lg:mb-0">
      <img src="src\images\portada.webp" alt="Your Image" className="mx-auto lg:mx-0" />
    </div>
  </div>
</section>
    )
}