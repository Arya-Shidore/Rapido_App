import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import captainRoutes from "./routes/captain.routes.js";
import rideRoutes from "./routes/ride.routes.js";
import bookRideRoutes from "./routes/bookRide.routes.js";


const app=express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server is running on port 4000");
});

// app.use(cors());
// allow all origins
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
});

connectDB();

app.use("/api/user", userRoutes);
app.use("/api/captain", captainRoutes);
app.use("/api/ride", rideRoutes);
app.use("/api/bookRide", bookRideRoutes);