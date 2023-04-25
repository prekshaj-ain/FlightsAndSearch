const {FlightService} = require('../services/flight-service');

const flightService = new FlightService();

const create = async (req,res)=>{
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a Flight',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a Flight',
            err: error
        })
    }
}
const getAll = async (req,res)=>{
    try{
        const flights = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: 'Successfully fetched the Flights',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the Flights',
            err: error
        })
    }
}

module.exports = {
    create
}