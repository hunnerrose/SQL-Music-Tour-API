//DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//MODEL
class Band extends Model{}

Band.init({
    //configurations for our columns
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Band',
    tableName: 'band',
    timestamps: false //gets rid of default invisible 'created at' and 'updated at' columns for the model; we dont need these
})

//EXPORT
module.exports = Band