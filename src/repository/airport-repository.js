const { CrudRepository } = require('../repository/index');
const { Airport } = require('../models/index');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }

}

module.exports = AirportRepository;