// components/LocationSearchPanel.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LocationSearchPanel = ({ inputValue, onSelect }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!inputValue) {
        setSuggestions([]);
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ride/get-suggessions`, {
          params: { origin: inputValue },
          }
        );
        console.log("response !!", response);
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300); // debounce
    return () => clearTimeout(debounce);
  }, [inputValue]);

  return (
    <div className="bg-white border border-gray-300 rounded mt-1 shadow max-h-48 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
