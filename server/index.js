const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 3002;

//Routes
const userAuthRoutes = require("./routes/userAuth");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

app.get("/", (req, res) => {
    res.status(200).json("Api Routes");
})

app.use("/auth", userAuthRoutes);

mongoose.connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => {  
        app.listen(PORT, (req, res) => console.log("DB connected & Server started"))
    })
    .catch((err) => console.log(err))