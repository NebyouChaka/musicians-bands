const {Sequelize, sequelize} = require('./db');
const {Band} = require('./Band')

// TODO - define the Musician model
class Musician extends Model {
    constructor(name,gener,email){
        this.name = name,
        this.gener = gener
       
    }
}


Musician.init({
    // Model attributes are defined here
    name: Sequelize.STRING,
    instrument: Sequelize.STRING
     
    }, {
    
       sequelize: "user",
       timeStamps: false,
    });

module.exports = { Musician};