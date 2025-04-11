import Ride from "../models/ride.model.js";
import User from "../models/user.model.js";
import Captain from "../models/captain.model.js";
// ride.model.js
import ride from "../models/ride.model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getDistanceTime } from "../utils/getDistanceTime.js";

dotenv.config();

// Book a ride

export const bookRide = async (req, res) => {
    const { pickup,destination } = req.body;
    console.log("pickup", pickup);
    // router.get("/get-distanceTime", getDistanceTime); to get distance and time
    const { duration, distance } = await getDistanceTime(pickup, destination);

    const userId = req.user._id;
    const distanceInMeters = Number(distance.split(" ")[0]) * 1000;
    const durationInSeconds = Number(duration.split(" ")[0]) * 60;
    const fare = Math.floor(distanceInMeters/1000 * 9); // Example fare calculation

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const rideData = {
            user: userId,
            pickup,
            destination,
            fare,
            otp,
            duration: durationInSeconds,
            distanc: distanceInMeters,
        };

        const newRide = await Ride.create(rideData);
        return res.status(201).json({ message: "Ride booked successfully", ride: newRide });

    }
    catch (error) {
        console.error(error);   
        return res.status(500).json({ message: "Error booking ride" });
    }
}