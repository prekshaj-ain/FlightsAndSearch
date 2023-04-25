const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');
class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try{
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.flightRepository.createFlight({...data, totalSeats:airplane.capacity});
            return flight;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }

    async getFlight(id){
        try{
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }

    async getAllFlights(data){
        try{
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }
}
module.exports = FlightService;