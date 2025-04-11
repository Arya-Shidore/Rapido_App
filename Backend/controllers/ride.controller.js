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
    const { origin } = req.body;
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

export {
    getCoordinates,
    getDistanceTime,
    getSuggessions
}
