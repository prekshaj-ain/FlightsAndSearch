const { CityService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const cityService = new CityService();

const create = async (req,res)=>{
    try{
        const city = await cityService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        })
    }
}

const destroy = async (req,res)=>{
    try{
        const response = await cityService.destroy(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete city',
            err: error
        })
    }
}

const update = async (req,res)=>{
    try{
        const city = await cityService.update(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update city',
            err: error
        })
    }
}

const get = async (req,res)=>{
    try{
        const city = await cityService.get(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch city',
            err: error
        })
    }
}
const getAll = async (req,res)=>{
    try{
        const city = await cityService.getAll(req.query);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch cities',
            err: error
        })
    }
}

module.exports = {
    get,
    update,
    destroy,
    create,
    getAll
}