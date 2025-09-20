import React, { useEffect, useRef } from 'react';
import { DONORS } from '../constants';

// Declare tsParticles for TypeScript since it's loaded from a script tag
declare const tsParticles: any;

interface DonorsPageProps {
  onGoBack: () => void;
}

const ArrowLeftIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

const DonorsPage: React.FC<DonorsPageProps> = ({ onGoBack }) => {
  const particlesContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesContainer.current) {
        tsParticles.load({
            id: 'tsparticles',
            options: {
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 150,
                            links: {
                                opacity: 0.5,
                                color: "#38BDF8"
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#F9FAFB",
                    },
                    links: {
                        color: "#38BDF8",
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        value: DONORS.length,
                        density: {
                            enable: false,
                        },
                    },
                    opacity: {
                        value: { min: 0.4, max: 0.9 },
                    },
                    shape: {
                        type: "text",
                        options: {
                            text: {
                                value: DONORS,
                                font: "Inter",
                                weight: "600",
                            },
                        },
                    },
                    size: {
                        value: { min: 8, max: 14 },
                    },
                },
                detectRetina: true,
                background: {
                    color: "transparent",
                },
            },
        }).catch((error: any) => {
            console.error("Error loading tsParticles:", error);
        });
    }

    return () => {
      const existingContainer = tsParticles.dom().find((c: any) => c.id === 'tsparticles');
      if (existingContainer) {
          existingContainer.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen w-full mx-auto animate-fade-in">
        {/* The particles container will be the background */}
        <div id="tsparticles" ref={particlesContainer} className="absolute inset-0 z-0" />

        {/* Header section on top of particles */}
        <header className="relative w-full flex-shrink-0 z-10 p-4 md:p-8">
            <div className="flex justify-between items-center">
                <button
                    onClick={onGoBack}
                    className="group flex items-center gap-2 text-gray-300 hover:text-brand-accent transition-colors duration-300 bg-brand-dark/50 backdrop-blur-sm p-2 rounded-lg"
                >
                    <ArrowLeftIcon className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="text-lg">Indietro</span>
                </button>
                <img 
                    src="https://i.imgur.com/Sdc5JJz.png" 
                    alt="Look The No Look Logo" 
                    className="w-20 h-20 object-contain" 
                />
            </div>
      </header>
       {/* Main is just a spacer to allow header to sit at top */}
       <main className="relative flex-grow w-full z-10"></main>
    </div>
  );
};

export default DonorsPage;