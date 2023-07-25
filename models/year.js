const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Year extends Model {}

Year.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          }
        }
);
module.exports=Year