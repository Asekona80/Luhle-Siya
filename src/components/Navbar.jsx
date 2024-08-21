import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeNav();
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div
      className={`md:flex justify-between items-center mx-auto px-4 py-4 font-semibold transition-all duration-500 ease-in-out ${
        isDesktop ? 'sticky top-0 z-50' : ''
      } ${isSticky ? 'shadow-lg' : ''}`}
      style={{
        height: '70px',
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        backgroundColor: isSticky ? '#00292b' : 'transparent', 
        borderRadius: '15px', 
      }}
    >
      <div className="md:hidden flex justify-end mr-4">
        <button onClick={handleNav} className="text-2xl cursor-pointer p-2 text-white">
          🍔
        </button>
      </div>
      <div className={`md:hidden ${nav ? 'block fixed inset-0 bg-green-100 rounded-full shadow-lg z-50 flex justify-center items-center' : 'hidden'}`}>
      <div className='flex flex-col justify-center items-center w-[60%]'>
  <button 
    onClick={() => scrollToSection('home')} 
    className='w-[60px] h-[60px] bg-red-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 relative flex justify-center items-center' 
    style={{
      clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 50% 82%, 18% 100%, 0% 38%)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    }}
  >
    <span className='text-white text-2xl'>🏠</span>
  </button>
  
  <button 
    onClick={() => scrollToSection('journal')} 
    className='w-[60px] h-[60px] bg-blue-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 relative flex justify-center items-center' 
    style={{
      clipPath: '(50% 0%, 100% 38%, 82% 100%, 50% 82%, 18% 100%, 0% 38%)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    }}
  >
    <span className='text-white text-2xl'>📓</span>
  </button>
  
  <button 
    onClick={() => scrollToSection('family')} 
    className='w-[60px] h-[60px] bg-purple-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 relative flex justify-center items-center' 
    style={{
      clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 50% 82%, 18% 100%, 0% 38%)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    }}
  >
    <span className='text-white text-2xl'>👪</span>
  </button>
  
  <button 
    onClick={() => scrollToSection('contact')} 
    className='w-[60px] h-[60px] bg-green-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 relative flex justify-center items-center' 
    style={{
      clipPath: '(50% 0%, 100% 38%, 82% 100%, 50% 82%, 18% 100%, 0% 38%)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    }}
  >
    <span className='text-white text-2xl'>✉️</span>
  </button>
</div>

</div>


      <div className="hidden md:flex items-center">
        <button onClick={() => scrollToSection('home')} className='mr-6 text-xl text-white hover:text-purple-400 transition-colors duration-300 ease-in'>
          <span>🏠 Home</span>
        </button>
        <button onClick={() => scrollToSection('journal')} className='mr-6 text-xl text-white hover:text-blue-600 transition-colors duration-300 ease-in'>
          <span>📓 Journal</span>
        </button>
        <button onClick={() => scrollToSection('family')} className='mr-6 text-xl text-white hover:text-green-600 transition-colors duration-300 ease-in'>
          <span>👪 Family</span>
        </button>
        <button onClick={() => scrollToSection('contact')} className='mr-6 text-xl text-white hover:text-purple-600 transition-colors duration-300 ease-in'>
          <span>✉️ Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
