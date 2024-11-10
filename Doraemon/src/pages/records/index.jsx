import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const SheltersAndPickup = () => {
  const [shelters] = useState([
    { id: 1, name: 'City Shelter', address: '123 Main St, Cityville', contact: '555-1234' },
    { id: 2, name: 'Community Food Bank', address: '456 Elm St, Townsville', contact: '555-5678' },
    { id: 3, name: 'Helping Hands Shelter', address: '789 Oak St, Villagetown', contact: '555-9876' }
  ]);

  const [pickupDetails, setPickupDetails] = useState({
    type: 'pickup',
    shelterId: '',
    date: '',
    time: '',
    address: ''
  });

  const [submissions, setSubmissions] = useState([]);

  // Load form data from cookies when the component mounts
  useEffect(() => {
    const savedDetails = Cookies.get('pickupDetails');
    const savedSubmissions = Cookies.get('submissions');

    if (savedDetails) {
      setPickupDetails(JSON.parse(savedDetails));
    }

    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  // Save form data to cookies whenever pickupDetails changes
  useEffect(() => {
    Cookies.set('pickupDetails', JSON.stringify(pickupDetails), { expires: 1 });
    Cookies.set('submissions', JSON.stringify(submissions), { expires: 1 });
  }, [pickupDetails, submissions]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPickupDetails({ ...pickupDetails, [name]: value });
  };

  // Handle form submission (mock function)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newSubmission = { ...pickupDetails };
    setSubmissions([...submissions, newSubmission]);

    // Clear form after submission
    setPickupDetails({
      type: 'pickup',
      shelterId: '',
      date: '',
      time: '',
      address: ''
    });
    Cookies.remove('pickupDetails'); // Clear saved details in cookies after submission
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Food Assistance & Donation Services</h1>

      {/* Shelters and Food Banks */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Nearby Shelters & Food Banks</h2>
        <ul className="space-y-3">
          {shelters.map((shelter) => (
            <li key={shelter.id} className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="font-semibold text-lg">{shelter.name}</h3>
              <p>{shelter.address}</p>
              <p>Contact: {shelter.contact}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Pickup/Drop-off Form */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Schedule a Pickup or Drop-off</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Type selection */}
          <div>
            <label className="block font-medium mb-1">Choose Service:</label>
            <select
              name="type"
              value={pickupDetails.type}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
            >
              <option value="pickup">Pickup</option>
              <option value="drop-off">Drop-off</option>
            </select>
          </div>

          {/* Shelter selection (optional for drop-off) */}
          {pickupDetails.type === 'drop-off' && (
            <div>
              <label className="block font-medium mb-1">Select Shelter:</label>
              <select
                name="shelterId"
                value={pickupDetails.shelterId}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Choose a shelter</option>
                {shelters.map((shelter) => (
                  <option key={shelter.id} value={shelter.id}>
                    {shelter.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Pickup/Drop-off Date */}
          <div>
            <label className="block font-medium mb-1">Date:</label>
            <input
              type="date"
              name="date"
              value={pickupDetails.date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Pickup/Drop-off Time */}
          <div>
            <label className="block font-medium mb-1">Time:</label>
            <input
              type="time"
              name="time"
              value={pickupDetails.time}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Address input for drop-off */}
          {pickupDetails.type === 'drop-off' && (
            <div>
              <label className="block font-medium mb-1">Your Address:</label>
              <input
                type="text"
                name="address"
                value={pickupDetails.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Display Submissions */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Submission History</h2>
        <ul className="space-y-3">
          {submissions.map((submission, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
              <p>Type: {submission.type}</p>
              {submission.shelterId && <p>Shelter ID: {submission.shelterId}</p>}
              <p>Date: {submission.date}</p>
              <p>Time: {submission.time}</p>
              {submission.address && <p>Address: {submission.address}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SheltersAndPickup;
