import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';

const CaptainStartNewRide = () => {
  const ride = {
    source: 'Times Square, NYC',
    destination: 'Central Park, NYC',
    paymentMode: 'Cash',
    fare: '$18.75',
    distance: '2.4 miles',
    time: '12 mins'
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">🚗 New Ride Available</h2>

        <div className="flex items-start gap-3">
          <span className="text-green-600 mt-1">📍</span>
          <div>
            <p className="text-sm text-gray-500">Pickup</p>
            <p className="font-semibold">{ride.source}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-blue-600 mt-1">📍</span>
          <div>
            <p className="text-sm text-gray-500">Drop-off</p>
            <p className="font-semibold">{ride.destination}</p>
          </div>
        </div>

        <div className="flex justify-between pt-2 text-sm text-gray-700">
          <p>Distance: <span className="font-medium">{ride.distance}</span></p>
          <p>ETA: <span className="font-medium">{ride.time}</span></p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">💵</span>
            <p className="text-lg font-semibold">{ride.fare}</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            {ride.paymentMode}
          </span>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="w-full bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800">Accept Ride</button>
          <button className="w-full bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700">Decline</button>
        </div>
      </div>
    </div>
  );
};

export default CaptainStartNewRide;
