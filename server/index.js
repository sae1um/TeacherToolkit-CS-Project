const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT;

//Routes
const userAuthRoutes = require("./routes/userAuth");

const app = express();

//Allows JSON to pass through the API
app.use(express.json());
// Allows cors options
app.use(cors());

// Used for debugging requests to the API
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

// The default route for the api e.g "http://localhost:3002/"
app.get("/", (req, res) => {
    res.status(200).json("Api Routes");
})

/*User Authentication route url: "http://localhost:3002/auth"
    Then the outher sub routes are in the "userAuthRoutes" router
*/
app.use("/auth", userAuthRoutes);

// Connects to the database, uri is saved in an environment variable for security
mongoose.connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => {  
        app.listen(port, (req, res) => console.log("DB connected & Server started"))
    })
    .catch((err) => console.log(err))