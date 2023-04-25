const { Op } = require("sequelize");

const {City} = require('../models/index');
const {CrudRepository} = require('.')

class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }

    async update(cityId, data){
        try{
            const city = await City.findByPk(cityId);
            city.name = data.name
            await city.save();
            return city;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err};
        }
    }
    

    async getAll(filter){ //filter can also be empty
        try{
            if(filter.name){
                const city = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return city;
            }
            const city = await City.findAll();
            return city;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err};
        }
    }

}
module.exports = CityRepository;