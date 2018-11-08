const Sequelize = require('sequelize')

class DataAccess{
    constructor(){
        this.connection =  new Sequelize('mysql://sql7263191:CFitVpBiFP@sql7.freesqldatabase.com/sql7263191')
        this.authenticate();
    }
    authenticate(){
        this.connection
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database: ', err);
        })
    }
}

const da = new DataAccess();
module.exports = da;