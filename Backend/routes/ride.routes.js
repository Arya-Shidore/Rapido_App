import express from "express";
import {
    getCoordinates,
    getDistanceTime,
    getSuggessions,
} from "../controllers/ride.controller.js";


const router = express.Router();

// Ride routes
router.get("/get-coordinates", getCoordinates);
router.get("/get-distanceTime", getDistanceTime);
router.get("/get-suggessions", getSuggessions);

export default router;