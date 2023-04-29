const express = require('express');
const router = express.Router();

const cityController = require('../../controllers/city-controllers');
const flightController = require('../../controllers/flight-controllers');
const airportController = require('../../controllers/airport-controllers');
const { FlightMiddlewares } = require('../../middlewares/index');

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id',cityController.get);
router.get('/city',cityController.getAll);
router.patch('/city/:id',cityController.update);

router.post('/flights',FlightMiddlewares.validateCreateFlight,flightController.create);
router.get('/flights',flightController.getAll);
router.get('/flights/:id', flightController.get);

router.post('/airports',airportController.create)

module.exports = router;