import React, { useState, useEffect } from 'react';

interface LandingPageProps {
  onShowDonors: () => void;
}

const ArrowRightIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);


const LandingPage: React.FC<LandingPageProps> = ({ onShowDonors }) => {
  const [amount, setAmount] = useState(0);
  const targetAmount = 10145;

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2500; // Animation duration in milliseconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentAmount = Math.floor(progress * targetAmount);
      setAmount(currentAmount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setAmount(targetAmount); // Ensure it ends exactly on the target
      }
    };
    
    const animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center animate-fade-in">
      <div style={{ animationDelay: '100ms' }}>
        <img 
          src="https://i.imgur.com/Sdc5JJz.png" 
          alt="Look The No Look Logo" 
          className="w-40 h-40 md:w-48 md:h-48 object-contain mb-8 animate-logo-reveal" 
        />
      </div>

      <h1 
        style={{ animationDelay: '300ms' }} 
        className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-4 animate-fade-in-up"
      >
        Look The No Look
      </h1>

      <p 
        style={{ animationDelay: '500ms' }} 
        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up"
      >
        Un grazie di cuore a tutti coloro che hanno creduto in questo progetto. Il vostro supporto è la nostra più grande ispirazione.
      </p>

      <div style={{ animationDelay: '700ms' }} className="text-center mb-10 animate-fade-in-up">
        <p className="text-lg text-gray-400 mb-2 tracking-widest uppercase">Totale Raccolto</p>
        <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-brand-accent">
            {new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(amount)}
        </p>
      </div>

      <button
        onClick={onShowDonors}
        style={{ animationDelay: '900ms' }}
        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-brand-dark border-2 border-brand-accent rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-brand-accent hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark animate-fade-in-up"
      >
        <span className="relative z-10 flex items-center gap-2">
            Scopri i donatori
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    </div>
  );
};

export default LandingPage;