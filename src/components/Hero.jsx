import React from 'react';
import { Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/assets/video_ai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Recharge, Relax & Refresh
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            The Future of EV Charging!
          </h2>
          <p className="text-xl mb-8">
            Experience the next generation of EV charging stations with premium amenities
            and seamless integration.
          </p>
          <button className="neon-button bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center transition-colors duration-300">
            <span>Book Your Slot Now</span>
            <Zap className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;