import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const LoadingScreen = ({ onFinishLoading }) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        setTimeout(() => {
          setShowLoader(false);
          onFinishLoading();
        }, 500);
      }
    }, 30);
    
    return () => clearTimeout(timer);
  }, [progress, onFinishLoading]);
  
  if (!showLoader) return null;
  
  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center">
          <Zap className="h-12 w-12 text-blue-400 mr-3" />
          <h1 className="text-4xl font-bold neon-text text-blue-80">batteryfy</h1>
        </div>
        <span className="text-blue-800 text-3xl font-bold neon-text pl-10">your life!!</span>
      </div>
      
      <div className="w-64 h-1 bg-gray-800 rounded-full mb-4 overflow-hidden">
        <div 
          className="loading-bar h-full bg-blue-400"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-blue-400">
        {progress < 100 ? 'Charging...' : 'Ready!'}
        <span className="ml-2">{progress}%</span>
      </p>
    </div>
  );
};

export default LoadingScreen;
