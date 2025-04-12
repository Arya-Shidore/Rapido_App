import React, { useState } from 'react';
import LocationSearchPanel from '../components/LocationSearchPanel';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [focusedInput, setFocusedInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("origin", origin);
    console.log("destination", destination);
    navigate("/book-ride");
  };

  return (
    <div
      className="form-container bg-cover bg-center min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif')" }}
    >
      <div className="absolute top-10 z-10">
        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-white px-6 py-2 rounded shadow-lg hover:bg-gray-800"
        >
          Book Ride
        </button>
      </div>

      <div
        className={`transition-all duration-700 transform ${
          showForm ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0 pointer-events-none'
        } bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg w-full max-w-md absolute z-0`}
        style={{ top: '30%' }}
      >
        <h2 className="text-gray-500 text-2xl font-bold mb-4 text-center">Book a Ride</h2>
        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <div className="relative">
            <label className="block mb-1 font-medium text-gray-500">Origin</label>
            <input
              type="text"
              placeholder="Enter origin"
              className="w-full p-2 border border-gray-300 rounded"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              onFocus={() => setFocusedInput("origin")}
              onBlur={() => setTimeout(() => setFocusedInput(""), 200)}
            />
            {focusedInput === "origin" && (
              <LocationSearchPanel
                inputValue={origin}
                onSelect={(value) => {
                  setOrigin(value);
                  setFocusedInput("");
                }}
              />
            )}
          </div>
          <div className="relative">
            <label className="block mb-1 font-medium text-gray-500">Destination</label>
            <input
              type="text"
              placeholder="Enter destination"
              className="w-full p-2 border border-gray-300 rounded"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={() => setFocusedInput("destination")}
              onBlur={() => setTimeout(() => setFocusedInput(""), 200)}
            />
            {focusedInput === "destination" && (
              <LocationSearchPanel
                inputValue={destination}
                onSelect={(value) => {
                  setDestination(value);
                  setFocusedInput("");
                }}
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
