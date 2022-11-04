const express = require('express');

const {json} = require("express");

const flight = require("./router/flightRoute")

const app = express();

app.use(json());

app.use("/flight", flight);


const PORT = process.env.PORT || 2000; // port to connect

app.get("/", (req, res) => {
    res.send("Zuri Book Flight App");
});

app.listen(PORT, () => console.log('Serving on port ${PORT}'));