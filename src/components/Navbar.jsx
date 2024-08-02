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
      className={`md:flex justify-between items-center mx-auto px-4 py-4 text-white font-semibold transition-all duration-500 ease-in-out ${
        isDesktop ? 'sticky top-0 z-50' : ''
      } ${isSticky ? 'shadow-md' : ''}`}
      style={{
        height: '60px',
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        backgroundColor: isSticky ? '#235347' : 'transparent',
      }}
    >
      <div className="md:hidden flex justify-end mr-4">
        <button onClick={handleNav} className="text-2xl cursor-pointer p-2">Menu</button>
      </div>
      <div className={`md:hidden ${nav ? 'block fixed inset-0 bg-white rounded-full shadow-lg z-50' : 'hidden'}`}>
        <div className='flex flex-col justify-center items-center'>
          <button onClick={() => scrollToSection('home')} className='w-[75%] flex justify-center rounded-full shadow-lg bg-pink-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-white'>
            <span className='pl-4'>Home</span>
          </button>
          <button onClick={() => scrollToSection('journal')} className='w-[75%] flex justify-center rounded-full shadow-lg bg-blue-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-white'>
            <span className='pl-4'>Journal</span>
          </button>
          <button onClick={() => scrollToSection('family')} className='w-[75%] flex justify-center rounded-full shadow-lg bg-green-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-white'>
            <span className='pl-4'>Family</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className='w-[75%] flex justify-center rounded-full shadow-lg bg-purple-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-white'>
            <span className='pl-4'>Contact</span>
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <button onClick={() => scrollToSection('home')} className='mr-6 hover:text-pink-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Home</span>
        </button>
        <button onClick={() => scrollToSection('journal')} className='mr-6 hover:text-blue-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Journal</span>
        </button>
        <button onClick={() => scrollToSection('family')} className='mr-6 hover:text-green-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Family</span>
        </button>
        <button onClick={() => scrollToSection('contact')} className='mr-6 hover:text-purple-400 transition-colors duration-300 ease-in'>
          <span className='p-4'>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
