const  CrudService  = require("./crud-service");
const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService extends CrudService{
    constructor(){
        const flightRepository = new FlightRepository();
        super(flightRepository)
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async create(data){
        try{
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival time cannot be less than departureTime'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.flightRepository.createFlight({...data, totalSeats:airplane.capacity});
            return flight;
        }catch(err){
            console.log('something went wrong in service layer');
            throw err;
        }
    }

    async get(flightId){
        try{
            const flight = await this.flightRepository.get(flightId);
            return flight;
        }catch(err){
            console.log('something went wrong in service layer');
            throw err;
        }
    }
}
module.exports = FlightService;