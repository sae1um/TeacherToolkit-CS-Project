const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//Routes
const userAuthRoutes = require("./routes/userAuth");

const app = express();

//Allows JSON to pass through the API
app.use(express.json());

// Allows cors options
app.use(cors());

// Debugging requests to the API
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// Default route for the api
app.get("/", (req, res) => {
    res.json("Base Routes");
});

/*
*   User Authentication route
*   sub routes are part of "userAuthRoutes" router
*/
app.use("/auth", userAuthRoutes);

// Connects to the database, and starts backend server
mongoose.connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => { 
        app.listen(process.env.PORT, () => console.log(`DB connected & Server started 'http://localhost:${process.env.PORT}'`))
    })
    .catch((err) => console.log(err))

// app.listen(process.env.PORT, () => console.log(" Server started"))
