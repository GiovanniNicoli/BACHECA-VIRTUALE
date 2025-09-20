
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import DonorsPage from './components/DonorsPage';

const App: React.FC = () => {
  const [showDonors, setShowDonors] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-brand-dark text-brand-light font-sans flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${!showDonors ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <LandingPage onShowDonors={() => setShowDonors(true)} />
      </div>
      
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${showDonors ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <DonorsPage onGoBack={() => setShowDonors(false)} />
      </div>
    </div>
  );
};

export default App;
