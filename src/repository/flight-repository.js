const { Flight } = require('../models/index');

class FlightRepository{
    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err}
        }
    }

    async getFlight(id){
        try{
            const flight = await Flight.findByPk(id);
            return flight;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err}
        }
    }
}
 module.exports = FlightRepository;