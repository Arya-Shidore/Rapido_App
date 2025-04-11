import express from "express";
import {
    bookRide,
    acceptRide
} from "../controllers/bookRide.controller.js";
import isUser from "../middlewares/isUser.middleware.js";
import isCaptain from "../middlewares/isCaptain.middleware.js";

const router = express.Router();


// Book ride routes
router.post("/book-ride", isUser, bookRide);
// router.get("/get-booked-rides", isUser, getBookedRides);
// router.post("/cancel-ride", isUser, cancelRide);
// router.get("/get-ride-details", isUser, getRideDetails);

// Captain routes
router.post("/accept-ride", isCaptain, acceptRide);
// router.post("/reject-ride", isCaptain, rejectRide);
// router.post("/complete-ride", isCaptain, completeRide);
export default router;