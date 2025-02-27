import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import ChargingStations from './components/ChargingStations';
import FoodSection from './components/FoodSection';
import ParkSection from './components/ParkSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  
  const handleFinishLoading = () => {
    setLoading(false);
  };
  
  // Preload video
  useEffect(() => {
    const video = new Image();
    video.src = "/assets/video_ai.mp4";
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900">
      {loading ? (
        <LoadingScreen onFinishLoading={handleFinishLoading} />
      ) : (
        <>
          <Navbar />
          <Hero />
          {/* <SearchSection />
          <ChargingStations />
          <FoodSection />
          <ParkSection />
          <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;