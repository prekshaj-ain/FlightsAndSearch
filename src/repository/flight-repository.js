const { Op } = require('sequelize');

const { Flight } = require('../models/index');

class FlightRepository{

    #createFilter(data){
        let filter = {};
        let priceFilter = [];
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.maxPrice){
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        if(data.minPrice){
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        Object.assign(filter, {[Op.and]: priceFilter});
        return filter;
    }

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

    async getAllFlights(filter){
        try{
            const filterObject = this.#createFilter(filter) 
            const flights = await Flight.findAll({
                where: filterObject
            });
            return flights;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err}
        }
    }
}
 module.exports = FlightRepository;