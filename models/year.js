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
          },
       course: {
          type: DataTypes.STRING,
          references:{
           model:"course",
           key:"id",
          }
        },
      student:{
          type: DataTypes.STRING,
          references:{
           model:"student",
           key:"id",
          }
        },
      faculty:{
          type: DataTypes.STRING,
          references:{
           model:"faculty",
           key:"id",
          }
        },

       },{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'year',
      } 
    
);
module.exports=Year