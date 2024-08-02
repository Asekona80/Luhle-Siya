import React, { useEffect, useState } from 'react';
import hero from '../assets/hero.jpeg';

const Home = () => {
  const [textLoaded, setTextLoaded] = useState([]);
  const [animationDelayed, setAnimationDelayed] = useState(true);

  useEffect(() => {
    const typingDelay = 100;
    const text = ["BABY SIYA'S JOURNAL"];
    let index = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < text[index].length) {
        charIndex++;
        setTextLoaded(prevState => [...prevState.slice(0, index), text[index].slice(0, charIndex)]);
      } else if (index < text.length - 1) {
        index++;
        charIndex = 0;
        setTextLoaded(prevState => [...prevState, ""]);
      } else {
        clearInterval(typingInterval);
        setTextLoaded(prevState => [...prevState, text[index]]);
        setTimeout(() => {
          setAnimationDelayed(true);
        }, 2000);
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (animationDelayed) {
      const iconSlideInterval = setTimeout(() => {
        setAnimationDelayed(false);
      }, 1000);

      return () => clearTimeout(iconSlideInterval);
    }
  }, [animationDelayed]);

  return (
    <section
      id="home"
      className="relative text-white h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Card Container */}
      <div className="relative flex items-center justify-center h-full z-50 p-4">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="text-center">
            <p className="font-italic font-bold italic text-xl p-1">NIKOLUHLE-SIYAMTHANDA</p>
            <div className="font-bold text-2xl md:text-3xl sm:text-2xl md:py-6">
              <span className={`inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden`}>
                <ul className="block text-left leading-tight">
                  {textLoaded.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
