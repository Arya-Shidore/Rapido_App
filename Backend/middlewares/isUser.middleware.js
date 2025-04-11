import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import dotenv from "dotenv";


dotenv.config();

const isUser = async (req, res, next) => {
    const token = req.cookies?.token || (req.headers.authorization?.startsWith("Bearer") && req.headers.authorization.split(" ")[1]);
   
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        const user = await userModel.findById(decoded._id);
        if (!user || user.role !== "user") {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
export default isUser;