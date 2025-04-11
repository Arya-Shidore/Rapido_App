import express from "express";
import jwt from "jsonwebtoken";
import captainModel from "../models/captain.model.js";
import dotenv from "dotenv";


dotenv.config();


const isCaptain = async (req, res, next) => {
    const token = req.cookies?.token || (req.headers.authorization?.startsWith("Bearer") && req.headers.authorization.split(" ")[1]);
    console.log("token", token);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded);

        const captain = await captainModel.findById(decoded._id);
        console.log("captain !!!", captain);
        if (!captain || captain.role !== "captain") {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.captain = captain;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
export default isCaptain;
