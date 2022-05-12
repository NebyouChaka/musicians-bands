const path = require('path');
const { Sequelize, Model } = require('sequelize');
const {Band} = require('./Band')

// TODO - create the new sequelize connection
const sequelize = new Sequelize('database', 'username', 'password',{
    dialect: 'sqlite',
    storage: './music.sqlite',
    logging: false
})
module.exports = { sequelize,Sequelize};



