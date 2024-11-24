const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

// Verify that user is authenticated
const requireAuth = async (req, res, next) => {
    // Get authorisation token from headers
    const { authorization } = req.headers;
    // If no token then error
    if(!authorization){
        return res.status(401).json({error: "Auth token required"});
    }

    const token = authorization.split(" ")[1];

    // I
    try {
        const { _id } = jwt.verify(token, process.env.SECRET);

        req.user = await User.findOne({_id}).select("_id");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: "Request is not authorised"});
    }
}

module.exports = requireAuth;