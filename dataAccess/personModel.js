const Sequelize = require('sequelize')
const da = require('./da')

class PersonModel extends BaseModel{
    constructor(){
        this.model =  da.connection.define('client', {
            _id: { type: Sequelize.STRING, primaryKey: true },
            name: { type: Sequelize.STRING },
        })
    }
 
}

const person = new PersonModel();
module.exports = person;