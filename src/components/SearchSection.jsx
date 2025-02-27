import React from 'react';
import { Search } from 'lucide-react';

const SearchSection = () => {
  return (
    <section className="py-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800/80 rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select EV Type</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Tesla Model 3</option>
                <option>Tesla Model Y</option>
                <option>Tata Nexon EV</option>
                <option>Mahindra XUV400</option>
                <option>Ford Mustang Mach-E</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Charging Time</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>30 Minutes</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>4 Hours</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input 
                type="date" 
                className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center transition-colors duration-300">
              <span>Search Available Slots</span>
              <Search className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;