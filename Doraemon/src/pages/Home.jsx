import React from 'react';

const FoodWasteManagement = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-100 font-sans bg-gradient-to-br from-green-900 via-green-700 to-green-500">
      <header className="text-center py-20 bg-gradient-to-r from-green-700 to-teal-500 rounded-lg shadow-xl text-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold tracking-wide mb-4">Food Waste Management</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6">Let’s reduce food waste together and create a sustainable future for all.</p>
        <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 ease-in-out transform hover:scale-110">
          Join the Movement
        </button>
      </header>

      <section className="mt-16 p-10 bg-gradient-to-r from-green-800 to-green-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-4">Understanding Food Waste</h2>
        <p className="text-lg leading-relaxed">
          Food waste is an urgent issue impacting our planet, economy, and future. Globally, millions of tons of food
          are wasted annually, leading to pollution, resource wastage, and hunger. Through conscious choices, we can
          significantly reduce waste and contribute to a sustainable world.
        </p>
      </section>

      <section className="mt-16 p-10 bg-gradient-to-r from-green-800 to-teal-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-6">Food Waste by the Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-b from-gray-700 to-gray-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300">
            <h3 className="text-5xl font-extrabold text-white">1/3</h3>
            <p className="text-lg mt-3">of all food produced is wasted.</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-b from-gray-700 to-gray-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300">
            <h3 className="text-5xl font-extrabold text-white">1.3B</h3>
            <p className="text-lg mt-3">tons of food wasted globally each year.</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-b from-gray-700 to-gray-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300">
            <h3 className="text-5xl font-extrabold text-white">8%</h3>
            <p className="text-lg mt-3">of greenhouse gases are due to food waste.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 p-10 bg-gradient-to-r from-teal-600 to-green-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-6">How You Can Help</h2>
        <ul className="list-inside list-disc text-lg leading-relaxed space-y-4">
          <li><strong>Plan your meals:</strong> Shop wisely and avoid impulse buys.</li>
          <li><strong>Store food correctly:</strong> Use airtight containers and label items with dates.</li>
          <li><strong>Get creative with leftovers:</strong> Use leftovers for new recipes.</li>
          <li><strong>Donate excess food:</strong> Give surplus food to local shelters or food banks.</li>
          <li><strong>Compost:</strong> Turn food scraps into valuable compost for the soil.</li>
        </ul>
      </section>

      <section className="mt-16 p-10 bg-gradient-to-r from-green-700 to-green-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">Interested in making a difference? Connect with us for more information!</p>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            placeholder="Message"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-teal-500 to-green-700 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-800 transform hover:scale-110 transition-all duration-300 ease-in-out shadow-lg"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="mt-16 py-8 text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-md">
        <p className="text-gray-200">&copy; 2024 Food Waste Management | All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-teal-300 hover:text-teal-400 mx-2">Privacy Policy</a>|
          <a href="#" className="text-teal-300 hover:text-teal-400 mx-2">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default FoodWasteManagement;
