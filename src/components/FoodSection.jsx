import React from 'react';

const FoodCard = ({ logo, name, description, image }) => {
  return (
    <div className="food-card bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-2">{logo}</span>
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        
        <p className="text-gray-400 mb-6">{description}</p>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
};

const FoodSection = () => {
  return (
    <section id="food" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Food & Shopping</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FoodCard 
            logo="🍔" 
            name="McDonald's" 
            description="Enjoy your favorite burgers while your EV charges" 
            image="https://storage.googleapis.com/uxpilot-auth.appspot.com/3cbb8b2c78-f2ad52ad47fc1818d820.png" 
          />
          
          <FoodCard 
            logo="🍕" 
            name="Domino's" 
            description="Fresh pizzas delivered to your charging spot" 
            image="https://storage.googleapis.com/uxpilot-auth.appspot.com/c2aec1e414-5dcc25849094d489af93.png" 
          />
          
          <FoodCard 
            logo="🍛" 
            name="Rameshwaram Cafe" 
            description="Authentic South Indian cuisine" 
            image="https://storage.googleapis.com/uxpilot-auth.appspot.com/83ef142680-79bb6d65440fd01419de.png" 
          />
        </div>
      </div>
    </section>
  );
};

export default FoodSection;