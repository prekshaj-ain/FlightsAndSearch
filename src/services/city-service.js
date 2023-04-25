const { CityRepository } = require('../repository/index');
const CrudService = require('./crud-service');

class CityService extends CrudService{
    constructor(){
        super(new CityRepository());
        this.cityRepository = new CityRepository();
    }
    

    async getAll(filter){
        try{
            const city = await this.cityRepository.getAll({name: filter.name});
            return city;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }
}
module.exports = CityService;