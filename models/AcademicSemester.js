const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Academic_Semester extends Model {}

Academic_Semester.init(
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
        modelName: 'academic_semester',
      } 
    
);
module.exports=Academic_Semester