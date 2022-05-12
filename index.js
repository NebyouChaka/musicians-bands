const {Band} = require('./Band')
const {Musician} = require('./Musician')


class Musicians extends Model {

}

Musicians.init({
    // Model attributes are defined here
      name:DataTypes.STRING,
      instrument: DataTypes.STRING
     
    }, {
    
       sequelize,
       timeStamps: false,
    });
Band.init({
    name:DataTypes.STRING,
})    

module.exports = {Band,Musician}

