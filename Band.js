const { Model } = require('sequelize');
const {Sequelize, sequelize} = require('./db');
const {Band, Musician} = require('./Musician')

// TODO - define the Band model

class Band extends Model {
         constructor(name,gener,email){
             this.name = name,
             this.gener = gener,
             this.email = email
         }
}

Band.init({

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          const title = this.getDataValue("title");
          // 'this' allows you to access attributes of the instance
          return this.getDataValue("name") + " (" + title + ")";
        },
        gener: {
            type: Sequelize.STRING,
            allowNull: false,
            set(val) {
              this.setDataValue("title", val.toUpperCase());
            },
          },
        },
        });
        
    

// CreateUser.init({
//     name: Sequelize.STRING,
//     email:Sequelize.STRING

// })   
Band.findAll({
    // Optional Options
    include:[
        {model: Musician, as:'singers'}
    ]});

Model.export = {Band};