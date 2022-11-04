const router = require('express').Router();

const controller = require("../controller/flightController");

router
.get("/", controller.getFlights)
.get("/:id", controller.getFlight)
.post("/", controller.createFlight)
.put("/:id", controller.updateFlight)
.delete("/:id", controller.deleteFlight);

module.exports = router;