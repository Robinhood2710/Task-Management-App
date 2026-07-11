const User = require("../models/User");
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user: {
                name,
                email,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { register };