import captainModel from '../models/captain.model.js';

const registerCaptain = async (req, res) => {
    const { firstname, lastname, email, password,vehicle } = req.body;
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    // Check if captain already exists
    const captainExists = await captainModel.findOne({ email });
    if (captainExists) {
        return res.status(400).json({ message: 'Captain already exists' });
    }
    // create captain
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password: password,
        vehicle,
    });
    // hash password
    const hashedPassword = await captainModel.hashPassword(password);
    captain.password = hashedPassword;
    await captain.save();
    // generate token
    const token = captain.generateAuthToken();
    res.status(201).json({
        _id: captain._id,
        fullname: captain.fullname,
        email: captain.email,
        token,
    });
}
const loginCaptain = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    // Check if captain exists
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Check password
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    // generate token
    // send toke in cookie

    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({
        _id: captain._id,
        fullname: captain.fullname,
        email: captain.email,
        token,
    });
}
const loginPage = async (req, res) => {
    const captain = await captainModel.findById(req.captain._id);
    if (!captain) {
        return res.status(404).json({ message: 'Captain not found' });
    }
    res.status(200).json({
        _id: captain._id,
        fullname: captain.fullname,
        email: captain.email,
        vehicle: captain.vehicle,
        location: captain.location,
    });
}

export {
    registerCaptain,
    loginCaptain,
    loginPage,
}