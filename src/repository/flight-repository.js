const { Op } = require('sequelize');

const { Flight } = require('../models/index');
const {CrudRepository} = require('.');

class FlightRepository extends CrudRepository{

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

    constructor(){
        super(Flight)
    }

    async getAll(filter){
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