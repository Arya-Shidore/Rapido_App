import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
export default function CaptainHome() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 relative"
      style={
        {
          backgroundImage:
            "url('https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif')",
        }
      }
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-lg  ">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome, Captain!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ride Info Card */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-2">Today's Rides</h2>
            <p className="text-gray-600 text-lg">5 Completed</p>
          </div>

          {/* Earnings Card */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-2">Earnings</h2>
            <p className="text-green-600 text-lg">₹ 1,200</p>
          </div>

          {/* Shift Timing Card */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-2">Shift</h2>
            <p className="text-gray-600 text-lg">9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
          <Link to="/captain-start-new-ride">
            Start Ride
            </Link>
        </button>
      </div>
    </div>
  );
}
