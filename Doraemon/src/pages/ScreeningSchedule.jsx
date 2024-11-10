import React, { useState } from 'react';
import axios from 'axios';

const LeftoverRecipesAndDonation = () => {
  const [leftoverItems, setLeftoverItems] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [donationItem, setDonationItem] = useState('');
  const [donationList, setDonationList] = useState([]);

  // Define your Spoonacular API Key here
  const API_KEY = '00f2b61966f44c26a32552682a2ea022'; // Replace with your actual API key
  const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

  // Fetch recipes based on leftover items using Spoonacular API
  const fetchRecipes = async () => {
    if (!leftoverItems) return;

    try {
      const response = await axios.get(API_URL, {
        params: {
          ingredients: leftoverItems, // List of ingredients separated by commas
          number: 5, // Limit the number of recipes returned
          apiKey: API_KEY, // Your Spoonacular API key
        },
      });

      // Set the recipes data into state
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  // Add item to donation list
  const handleAddDonation = () => {
    if (donationItem) {
      setDonationList([...donationList, donationItem]);
      setDonationItem('');
    } else {
      alert('Please enter a valid donation item.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Food Waste Management</h1>

      {/* Recipe Finder */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Find Recipes from Leftover Items</h2>
        <input
          type="text"
          value={leftoverItems}
          onChange={(e) => setLeftoverItems(e.target.value)}
          placeholder="Enter leftover items, e.g., rice, carrots"
          className="p-3 border border-gray-300 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={fetchRecipes}
          className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Find Recipes
        </button>

        {/* Recipe Suggestions */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">Recipe Suggestions</h3>
          <ul className="space-y-3 mt-2">
            {recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <li key={index} className="p-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-semibold">{recipe.title}</h4>
                  <p>Ingredients: {recipe.usedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No recipes found. Try different items.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Donation Feature */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">List Excess Food for Donation</h2>
        <input
          type="text"
          value={donationItem}
          onChange={(e) => setDonationItem(e.target.value)}
          placeholder="Enter food item to donate"
          className="p-3 border border-gray-300 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddDonation}
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          List for Donation
        </button>

        {/* Donation List */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">Available Donations</h3>
          <ul className="space-y-3 mt-2">
            {donationList.length > 0 ? (
              donationList.map((item, index) => (
                <li key={index} className="p-3 bg-white rounded-lg shadow-md border border-gray-200">
                  {item}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No items listed for donation.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftoverRecipesAndDonation;
