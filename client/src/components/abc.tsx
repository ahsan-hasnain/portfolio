import React, { useState, useEffect } from 'react';
import logo from './logo 2.png'
const LogoAnimation: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    // Animation completes after 4 seconds
    const timer: NodeJS.Timeout = setTimeout(() => {
      setAnimationComplete(true);
      // Show main content after fade out
      setTimeout(() => setShowContent(true), 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
/* 
  if (showContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Your Website</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your main content goes here. The logo animation has completed and your users can now interact with your site.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feature One</h2>
              <p className="text-gray-600">Describe your amazing features here.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feature Two</h2>
              <p className="text-gray-600">More great content for your users.</p>
            </div>
          </div>
        </div>
      </div>
    );
  } */

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-800 ${
      animationComplete ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, hsl(0, 0%, 12%) 0%, hsl(0, 0%, 18%) 50%, #01497c 100%)'}}>
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i: number) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-40"
              style={{
                backgroundColor: '#61a5c2',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse" 
          style={{background: 'radial-gradient(circle, #2a6f97, #01497c)'}}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse" 
          style={{
            background: 'radial-gradient(circle, #61a5c2, #2a6f97)',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Logo Container */}
      <div className="relative z-10 text-center display-flex align-items-center">
        {/* Main Logo */}
        <div className="mb-8 animate-logo-entrance">
          <div className="relative">
            {/* Logo Background Circle */}
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div 
                className="absolute inset-0 rounded-full animate-spin-slow opacity-90" 
                style={{background: 'linear-gradient(45deg, #61a5c2, #2a6f97, #01497c)'}}
              />
              <div 
                className="absolute inset-2 rounded-full flex items-center justify-center"
                style={{background: 'linear-gradient(135deg, #61a5c2, #2a6f97)'}}
              >
                {/* Replace this with your actual logo */}
                <img src={logo}/>
              </div>
            </div>
            
            {/* Pulsing Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full animate-ping opacity-20" />
          </div>
</div>
        {/* Company Name */}
        <div className="animate-text-slide-up">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
            <span 
              className="bg-clip-text text-transparent animate-gradient"
              style={{
                background: 'linear-gradient(45deg, #61a5c2, #2a6f97, #01497c, #61a5c2)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ZENTIX
            </span>
          </h1>
          <p className="text-xl animate-fade-in" style={{color: '#61a5c2', animationDelay: '1s'}}>
            Crafting Digital Excellence
          </p>
        </div>

        {/* Loading Bar */}
        <div className="mt-12 w-64 mx-auto animate-fade-in" style={{animationDelay: '1.5s'}}>
          <div 
            className="h-1 rounded-full overflow-hidden"
            style={{backgroundColor: 'hsl(0, 0%, 18%)'}}
          >
            <div 
              className="h-full rounded-full animate-loading-bar" 
              style={{background: 'linear-gradient(90deg, #2a6f97, #61a5c2)'}}
            />
          </div>
          <p className="text-sm mt-3 animate-pulse" style={{color: '#61a5c2'}}>Loading...</p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes logo-entrance {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(-90deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes text-slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-logo-entrance {
          animation: logo-entrance 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .animate-text-slide-up {
          animation: text-slide-up 1s ease-out 0.5s both;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out both;
        }
        
        .animate-loading-bar {
          animation: loading-bar 3s ease-in-out;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoAnimation;