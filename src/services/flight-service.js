const { FlightRepository, AirplaneRepository } = require('../repository/index');

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
}
module.exports = FlightService;