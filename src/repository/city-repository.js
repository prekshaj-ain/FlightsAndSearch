const { Op } = require("sequelize");

const {City} = require('../models/index');

class CityRepository{
    async createCity({ name }){
        try{
            const city = await City.create({
                name
            })
            return city;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err}
        }
    }
    
    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id:cityId
                }
            })
            return true;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err}
        }
    }

    async updateCity(cityId, data){
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
    
    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err};
        }
    }

    async getAllCities(filter){ //filter can also be empty
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