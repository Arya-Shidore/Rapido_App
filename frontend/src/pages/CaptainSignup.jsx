import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
const CaptainSignup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [vehiclePlate, setvehiclePlate] = useState("");
  const [vehicleType, setvehicleType] = useState("")
  const [vehicleCapacity, setvehicleCapacity] = useState("");

const {user, setUser} = useContext(UserDataContext);
const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const userData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, userData)
    const data=response.data;
    if(response.status !== 200){
      alert("Invalid credentials");
      return;
    }
    setUser(data);
    navigate("/home");


    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Uber Logo */}
        <div className="text-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
            className="w-28 mx-auto mb-2"
          />
          <h2 className="text-2xl font-bold text-gray-800">Create Your Account</h2>
          <p className="text-sm text-gray-500">Sign up to get started</p>
        </div>

        {/* Signup Form */}
         {/* first name and last name */}
         <form className="space-y-4" onSubmit={submitHandler}>
          <div className="flex space-x-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </div>
          </div>

          {/* Email and Password */}
        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Color
            </label>
            <input
              type="text"
              placeholder="Red"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={vehicleColor}
              onChange={(e) => setvehicleColor(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Plate
            </label>
            <input
              type="text"
              placeholder="ABC123"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={vehiclePlate}
              onChange={(e) => setvehiclePlate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Type
            </label>
            <input
              type="text"
              placeholder="Car"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={vehicleType}
              onChange={(e) => setvehicleType(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Capacity
            </label>
            <input
              type="number"
              placeholder="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={vehicleCapacity}
              onChange={(e) => setvehicleCapacity(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer with login option */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <button className="mt-2 px-4 py-2 border border-black rounded-md hover:bg-gray-100 transition">
            <Link to="/login">
              Log In
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup
