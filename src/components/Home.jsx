import React, { useEffect, useState } from 'react';
import hero from '../assets/hero.jpeg';

const Home = () => {
  const [textLoaded, setTextLoaded] = useState([]);
  const [animationDelayed, setAnimationDelayed] = useState(true);

  useEffect(() => {
    const typingDelay = 200;
    const text = ["WELCOME TO", "BABY'S", "PLAYFUL PAGE"];
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
      }, 1000); // Adjust the delay as needed

      return () => clearTimeout(iconSlideInterval);
    }
  }, [animationDelayed]);

  return (
    <section
      id="home"
      className="text-white h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%', // Adjust the vertical position of the background image
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div 
        className="absolute inset-0"
        style={{   
          zIndex: 1,
        }}
      />
      <div className="relative z-10 max-w-full h-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 mx-10 pt-16">
        {/* Added pt-16 to add padding to the top of the content */}
        <div className="order-2 md:order-1 mt-10">
          <p className="font-italic italic text-xl p-1">NIKOLUHLE-SIYAMTHANDA</p>
          <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl md:py-6 animate-text-slide">MY BIRTH JOURNAL</h1>

          <div className="font-bold text-2xl md:text-3xl sm:text-2xl md:py-6">
            <span className={`inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden ${animationDelayed ? 'animate-text-slide' : ''}`}>
              <ul className="block animate-text-slide text-left leading-tight">
                <li></li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
