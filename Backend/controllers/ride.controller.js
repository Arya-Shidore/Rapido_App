const getCoordinates = async (req, res) => {
    console.log("getCoordinates", req.body);
    const { origin, destination } = req.body;
    if (!origin || !destination) {
        return res.status(400).json({ message: "Please provide origin and destination" });
    }
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();
        if (data.status === "OK") {
            const coordinates = data.results[0].geometry.location;
            res.status(200).json(coordinates);
        } else {
            res.status(400).json({ message: "Invalid origin" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

const getDistanceTime = async (req, res) => {
    const { origin, destination } = req.body;
    if (!origin || !destination) {
        return res.status(400).json({ message: "Please provide origin and destination" });
    }
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();
        if (data.status === "OK") {
            const distance = data.rows[0].elements[0].distance.text;
            const duration = data.rows[0].elements[0].duration.text;
            res.status(200).json({ distance, duration });
        } else {
            res.status(400).json({ message: "Invalid origin or destination" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

const getSuggessions = async (req, res) => {
    const { origin } = req.query;
    if (!origin) {
        return res.status(400).json({ message: "Please provide origin" });
    }
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${origin}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();
        if (data.status === "OK") {
            const suggestions = data.predictions.map(prediction => prediction.description);
            res.status(200).json(suggestions);
        } else {
            res.status(400).json({ message: "Invalid origin" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}
import fetch from 'node-fetch';

const getCost = async (req, res) => {
    const { origin, destination, vehicleType } = req.body;

    if (!origin || !destination || !vehicleType) {
        return res.status(400).json({ message: "Please provide origin, destination, and vehicleType" });
    }

    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();

        if (data.status !== "OK" || data.rows[0].elements[0].status !== "OK") {
            return res.status(400).json({ message: "Unable to retrieve distance info" });
        }

        const distanceText = data.rows[0].elements[0].distance.text; // e.g., "10 km"
        const durationText = data.rows[0].elements[0].duration.text; // e.g., "15 mins"

        const distance = parseFloat(distanceText.replace(/[^0-9.]/g, ""));
        const duration = parseFloat(durationText.replace(/[^0-9.]/g, ""));

        let cost = 0;
        switch (vehicleType) {
            case 'uberGo':
                cost = distance + duration * 0.5;
                break;
            case 'motorBike':
                cost = distance + duration * 0.3;
                break;
            case 'auto':
                cost = distance + duration * 0.4;
                break;
            default:
                cost = distance + duration * 0.5;
        }

        return res.status(200).json({ cost });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export {
    getCoordinates,
    getDistanceTime,
    getSuggessions,
    getCost
}
