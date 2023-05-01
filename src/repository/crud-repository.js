class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            console.log(data);
            const result =await this.model.create(data);
            return result;
        }catch(err){
            console.log('Something went wrong in crud repository');
            throw {err};
        }
    }
    async destroy(modelId){
        try{
            await this.model.destroy({
                where: {
                    id:modelId
                }
            })
            return true;
        }catch(err){
            console.log('Something went wrong in crud repository');
            throw {err};
        }
    }
    async getAll(){ 
        try{
            const result = await this.model.findAll();
            return result;
        }catch(err){
            console.log('Something went wrong in crud repository');
            throw {err};
        }
    }
    async get(modelId){
        try{
            const result = await this.model.findByPk(modelId);
            return result;
        }catch(err){
            console.log('Something went wrong in crud repository');
            throw {err};
        }
    }
    async update(modelId,data){
        try{
            const result = await this.model.update(data,{
                where: {
                    id: modelId
                }
            });
            return true;
        }catch(err){
            console.log('Something went wrong in crud repository');
            throw {err};
        }
    }
}

module.exports = CrudRepository;