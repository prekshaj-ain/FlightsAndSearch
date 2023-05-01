const {FlightService} = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req,res)=>{
    try{
        const flightReqData = {
           flightNumber : req.body.flightNumber,
           airplaneId : req.body.airplaneId,
           departureAirportId : req.body.departureAirportId,
           arrivalAirportId : req.body.arrivalAirportId,
           arrivalTime : req.body.arrivalTime,
           departureTime : req.body.departureTime,
           price : req.body.price,
        }
        const flight = await flightService.create(flightReqData);
        return res.status(SuccessCodes.CREATED).json({
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
        const flights = await flightService.getAll(req.query);
        return res.status(SuccessCodes.OK).json({
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

const get = async (req,res)=>{
    try{
        const flight = await flightService.get(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully fetched the Flight',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the Flight',
            err: error
        })
    }
}

const update = async (req,res)=>{
    try{
        const flight = await flightService.update(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully updated the Flight',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the Flight',
            err: error
        })
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}