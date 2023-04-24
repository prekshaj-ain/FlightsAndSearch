const { Airplane } = require('../models/index');

class AirplaneRepository{
    async getAirplane(){
        try{
            const airplane = await Airplane.findByPk(id);
            return airplane;
        }catch(err){
            console.log('something went wrong in repository layer');
            throw {err}
        }
    }
}

module.exports = AirplaneRepository;