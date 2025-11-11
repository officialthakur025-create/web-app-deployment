import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`text-center my-16 md:my-24 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <h1 className="font-anton text-6xl md:text-8xl font-bold text-white mb-4 uppercase">Shreyansh Thakur</h1>
      <p className="text-2xl md:text-3xl text-white font-semibold uppercase tracking-wide">Graphic Designer</p>
      <p className="text-xl md:text-2xl text-gray-400 font-light">With an Architect's Precision</p>
      <p className="max-w-3xl mx-auto mt-6 text-base md:text-lg text-gray-300">
        A creative graphic designer from India, blending digital design passion with an architectural degree. 
        I combine technical knowledge with advanced design skills in Adobe, Canva, and Figma to deliver innovative solutions.
      </p>
      <a
        href="https://www.behance.net/Shreyanshh"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black font-bold px-8 py-3 mt-10 text-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 hover:shadow-lg hover:shadow-purple-500/50 uppercase tracking-wider"
      >
        View Behance Portfolio
      </a>
    </header>
  );
};

export default Header;
