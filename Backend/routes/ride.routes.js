import express from "express";
import {
    getCoordinates,
    getDistanceTime,
    getSuggessions,
    getCost,
} from "../controllers/ride.controller.js";


const router = express.Router();

router.get("/get-coordinates", getCoordinates);
router.get("/get-distanceTime", getDistanceTime);
router.get("/get-suggessions", getSuggessions);
router.post("/get-cost", getCost)

export default router;