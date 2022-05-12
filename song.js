const Sequelize = require('sequelize');
const { Musician } = require('./Musician');
const { Model } = require('sequelize');
const {Sequelize, sequelize} = require('./db');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
  });

  const Song = sequelize.define("song", {
    musicName: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          const title = this.getDataValue("title");
          // 'this' allows you to access attributes of the instance
          return this.getDataValue("musicName") + " (" + title + ")";
        },
      },
      band_id: {
        type: Sequelize.STRING,
        allowNull: false,
        set(val) {
          this.setDataValue("title", val.toUpperCase());
        },
      },
    });
    
    song.create({ musicName: "reagge", title: "One Love" }).then(
      (song) => {
        console.log(song.get("musicName")); // John Doe (SENIOR ENGINEER)
        console.log(song.get("title")); // One Love
      }
    );
    // This will create a new table rel referencing the PK(by default) of both the tables
Song.belongsToMany(Musician, {Musician, through: "song" });
Musician.belongsToMany(Song, {Song, through: "song" });
  
module.exports = {Song}
  