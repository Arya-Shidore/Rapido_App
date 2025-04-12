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

// cost for uberGo = distacne+duration*0.5, motorBike = distance+duration*0.3, auto = distance+duration*0.4
const getCost = (distance, duration, vehicleType) => {
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
            cost = distance + duration * 0.5; // default to uberGo
    }
    return cost;
}

export { getDistanceTime };