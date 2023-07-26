const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Faculty extends Model {}

Faculty.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
          },
          qualification:{
            type: DataTypes.STRING,
          },
          current_position:{
            type: DataTypes.STRING,
          },
          address:{
            type: DataTypes.STRING,
          },
          course_name:{
            type: DataTypes.STRING,
            references:{
                model:'course',
                key:'id'
            }
          },
          year_taught:{
            type: DataTypes.STRING,
            references:{
                model: 'year',
                key:'id'
            }
          },
          student:{
            type: DataTypes.STRING,
            references:{
                model:'students',
                key:'id'
            }
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'faculty',
      }
);

module.exports = Faculty;