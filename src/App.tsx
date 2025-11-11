import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Services from './components/Services';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="font-sans relative z-0">
      <AnimatedBackground />
      <main className="container mx-auto p-4 md:p-8 max-w-6xl">
        <Header />
        <Skills />
        <Journey />
        <Services />
        <Footer />
      </main>
    </div>
  );
};

export default App;
