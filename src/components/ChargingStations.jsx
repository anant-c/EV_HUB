import React from 'react';

const StationCard = ({ id, status, power, waitingTime, price, isOccupied }) => {
  return (
    <div className="station-card bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Station {id}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${status === 'Available' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
          {status}
        </span>
      </div>
      
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Power Output</span>
          <span>{power} kW</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Waiting Time</span>
          <span>{waitingTime}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Price/kWh</span>
          <span>₹{price}</span>
        </div>
      </div>
      
      {isOccupied ? (
        <button className="w-full bg-gray-700 text-gray-400 py-2 rounded-md cursor-not-allowed">
          Currently In Use
        </button>
      ) : (
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-300">
          Book Now
        </button>
      )}
    </div>
  );
};

const ChargingStations = () => {
  return (
    <section id="charging" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Live Charging Station Status</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StationCard 
            id="A1" 
            status="Available" 
            power="150" 
            waitingTime="No Queue" 
            price="12" 
            isOccupied={false} 
          />
          
          <StationCard 
            id="A2" 
            status="Occupied" 
            power="150" 
            waitingTime="25 mins" 
            price="12" 
            isOccupied={true} 
          />
          
          <StationCard 
            id="A3" 
            status="Available" 
            power="150" 
            waitingTime="No Queue" 
            price="12" 
            isOccupied={false} 
          />
        </div>
      </div>
    </section>
  );
};

export default ChargingStations;