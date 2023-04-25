const { Airplane } = require('../models/index');
const {CrudRepository} = require('.');

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane)
    }
}

module.exports = AirplaneRepository;