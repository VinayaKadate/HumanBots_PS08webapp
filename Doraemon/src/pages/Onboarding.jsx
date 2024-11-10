import React, { useState } from 'react';

const FoodAddItems = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  // Handler for adding a new food item
  const handleAddFoodItem = () => {
    if (foodName && quantity && expirationDate) {
      const newItem = {
        name: foodName,
        quantity: parseInt(quantity),
        expirationDate: expirationDate
      };
      setFoodItems([...foodItems, newItem]);
      setFoodName('');
      setQuantity('');
      setExpirationDate('');
    } else {
      alert('Please enter food name, quantity, and expiration date.');
    }
  };

  // Handler for donating an item
  const handleDonate = (index) => {
    alert(`Thank you for donating ${foodItems[index].name}!`);
    setFoodItems(foodItems.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Food Items</h1>

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
          placeholder="Expiration date"
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
            className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-gray-50"
          >
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Expires on: {item.expirationDate}</p>
            </div>
            <button
              onClick={() => handleDonate(index)}
              className="p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Donate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodAddItems;
