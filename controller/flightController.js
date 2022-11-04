const { Flights } = require("../model/Flight")
const { v4: uuid } = require("uuid");



// create new flight
exports.createFlight = async (req, res) => {
    try {
        const { title, time, price, date } =  await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        };

        Flights.push(newFlight);

        res.status(201).json({
            message: "New Flight created",
            newFlight
        });


        
    } catch (err) {
        res.status(500).json({ message: err.message });
        
    }
}

// get all flight
exports.getFlights = async (req, res) => {
    try{
        const flights = Flights;
        res.status(200).json({
            message: "All Flights",
            flights: flights
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

// get single flight
exports.getFlight= async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight found",
            flight,
        });
    } catch (err) {
        res.status(500).json({ message: err })
        
    }
}



// update/edit flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const { title, time, price, date } = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "Flight updated",
            flight,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// delete flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight deleted",
            flight,
        });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};