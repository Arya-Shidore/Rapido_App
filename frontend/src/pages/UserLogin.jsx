import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { set } from 'mongoose';

const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    const user= {
      email: email,
      password: password
    }
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, user)
    const data = response.data;
    if(response.status !== 201 && response.status !== 200){
      alert("Invalid credentials");
      return;
    }

    setUser(data);
    localStorage.setItem("token", data.token);
    navigate("/home");
    setemail("");
    setpassword("");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
            className="w-28 mx-auto mb-2"
          />
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500">Login to continue</p>
        </div>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Log In
          </button>
        
        </form>

        {/* Divider and Signup */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
          Don't have an account? 
          </p>
          <button className="mt-2 px-4 py-2 border border-black rounded-md hover:bg-gray-100 transition">
            <Link to="/signup">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin
