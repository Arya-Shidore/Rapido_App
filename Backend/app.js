import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app=express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server is running on port 4000");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
});

import connectDB from "./config/db.js";
connectDB();

import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
app.use("/api/user", userRoutes);
import captainRoutes from "./routes/captain.routes.js";
app.use("/api/captain", captainRoutes);
import rideRoutes from "./routes/ride.routes.js";
app.use("/api/ride", rideRoutes);
import bookRideRoutes from "./routes/bookRide.routes.js";
app.use("/api/bookRide", bookRideRoutes);