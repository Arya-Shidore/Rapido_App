const getDistanceTime = async (origin, destination) => {

    if (!origin || !destination) {
        return res.status(400).json({ message: "Please provide origin and destination" });
    }
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();
        
        if (data.status === "OK") {
            const distance = data.rows[0].elements[0].distance.text;
            const duration = data.rows[0].elements[0].duration.text;
            return { distance, duration };
        } 
    } catch (error) {
        console.error("Error fetching distance and time:", error);
        return { message: "Server error" };
    }
}

export { getDistanceTime };