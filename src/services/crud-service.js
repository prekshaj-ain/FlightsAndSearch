

class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try{
            const result = await this.repository.create(data);
            return result;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }

    async destroy(modelId){
        try{
            await this.repository.destroy(modelId);
            return true;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }

    async update(modelId,data){
        try{
            const result = await this.repository.update(modelId,data);
            return result;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }

    async get(modelId){
        try{
            const result = await this.repository.get(modelId);
            return result;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }

    async getAll(){
        try{
            const result = await this.repository.getAll();
            return result;
        }catch(err){
            console.log('something went wrong in service layer');
            throw {err};
        }
    }

}

module.exports = CrudService;