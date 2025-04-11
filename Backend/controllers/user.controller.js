import express from "express";
import userModel from "../models/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isUser from "../middlewares/isUser.middleware.js";

const registerUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    // Check if user already exists
    const userExists = await userModel.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }
    // create user

    const user = await userModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password: password,
    });
    // hash password
    const hashedPassword = await userModel.hashPassword(password);
    user.password = hashedPassword;
    await user.save();
    // generate token
    const token = user.generateAuthToken();
    res.status(201).json({
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        token,
    });

}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    // Check if user exists
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    // generate token
    // send toke in cookie

    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        token,
    });
}

// loginpage add a middleware isUser
const loginPage = async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "Not authorized" });
    }
    res.status(200).json({
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
    });
}

export { registerUser, loginUser, loginPage };