import React, { useState, useEffect } from 'react';

const FoodExpirationLogger = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  // Adds a new food item to the list
  const handleAddFoodItem = () => {
    if (foodName && quantity && expirationDate) {
      const newItem = {
        name: foodName,
        quantity: parseInt(quantity),
        expirationDate: new Date(expirationDate),
      };
      setFoodItems([...foodItems, newItem]);
      setFoodName('');
      setQuantity('');
      setExpirationDate('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Check for items near expiration and alert
  useEffect(() => {
    const today = new Date();
    foodItems.forEach((item) => {
      const daysUntilExpiration = Math.floor(
        (item.expirationDate - today) / (1000 * 60 * 60 * 24)
      );
      if (daysUntilExpiration >= 0 && daysUntilExpiration <= 3) {
        alert(`Warning: ${item.name} expires in ${daysUntilExpiration} day(s)!`);
      }
    });
  }, [foodItems]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Food Expiration Logger</h1>

      {/* Input Fields */}
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Enter food name"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleAddFoodItem}
          className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Add Item
        </button>
      </div>

      {/* List of Food Items */}
      <ul className="mt-6 space-y-3">
        {foodItems.map((item, index) => (
          <li
            key={index}
            className="p-4 border border-gray-200 rounded-lg bg-gray-50"
          >
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Expires on: {item.expirationDate.toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodExpirationLogger;
