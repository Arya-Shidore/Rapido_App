import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';

const BookRide = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  const { origin, destination } = location.state || {};
  
  const [cost, setCost] = useState(null);
  const [vehicleType, setVehicleType] = useState('UberGo'); // Default vehicle type
  const [rideDetails, setRideDetails] = useState({
    user: 'userId', // Replace with actual user ID
    captain: 'captainId', // Replace with actual captain ID
    pickup: origin,
    destination: destination,
    fare: 0,
    otp: '123456', // Generate OTP for validation (or replace with actual OTP generation logic)
  });

  useEffect(() => {
    const fetchCost = async () => {
      if (!origin || !destination) return;

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/ride/get-cost`, 
          { origin, destination, vehicleType },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token from localStorage
            }
          }
        );
        setCost(res.data.cost);
        setRideDetails(prev => ({
          ...prev,
          fare: res.data.cost,
        }));
      } catch (error) {
        console.error("Error fetching cost:", error);
      }
    };

    fetchCost();
  }, [origin, destination, vehicleType]);

  const handleVehicleChange = (type) => {
    setVehicleType(type);
  };

  const handleBookRide = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/bookRide/book-ride`,
        rideDetails, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token here as well
          }
        }
      );
      console.log('Ride booked successfully:', response.data);
      // Redirect to confirmation page or show a success message
      navigate('/ride-confirmation', { state: { rideId: response.data.ride._id } }); // Use navigate instead of history.push
    } catch (error) {
      console.error('Error booking ride:', error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif')" }}
    >
      <div className="p-6 text-white text-4xl font-bold shadow-md">
        Book Your Ride
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 flex-grow bg-gray-500 bg-opacity-80 p-8 rounded-lg shadow-lg">
        {/* Vehicle Type Selection */}
        <div className="flex justify-between w-80">
          <button
            onClick={() => handleVehicleChange('UberGo')}
            className={`p-2 rounded-lg ${vehicleType === 'UberGo' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            UberGo
          </button>
          <button
            onClick={() => handleVehicleChange('auto')}
            className={`p-2 rounded-lg ${vehicleType === 'auto' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Auto
          </button>
          <button
            onClick={() => handleVehicleChange('moto')}
            className={`p-2 rounded-lg ${vehicleType === 'moto' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Moto
          </button>
        </div>

        {/* Ride Details */}
        <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 w-80">
          <img
            src="https://media.gettyimages.com/id/1388699826/photo/rideshare-taxi-approaching-customer-at-roadside.jpg?s=612x612&w=0&k=20&c=95lnvZPp2cuYxqkNpQDhWlC43kehwk6KEwlhaScgHRA="
            alt="Uber Cab"
            className="h-16 w-16"
          />
          <div className="flex-grow">
            <h2 className="font-semibold text-lg">{vehicleType}</h2>
            <p className="text-sm text-gray-600">
              {vehicleType === 'UberGo' && 'Affordable, compact rides'}
              {vehicleType === 'auto' && 'Comfortable, everyday rides'}
              {vehicleType === 'moto' && 'Spacious, group rides'}
            </p>
          </div>
          <span className="font-bold text-black">
            {cost !== null ? `₹${cost}` : 'Loading...'}
          </span>
        </div>

        {/* Book Ride Button */}
        <button
          onClick={handleBookRide}
          className="bg-blue-500 text-white p-4 rounded-lg shadow-lg mt-6"
        >
          Confirm and Book Ride
        </button>
      </div>
    </div>
  );
};

export default BookRide;
