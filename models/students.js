const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
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
          address:{
            type: DataTypes.STRING,
          },
          parent_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          course_name:{
            type: DataTypes.STRING,
            references:{
                model:'course',
                key:'id'
            }
          },
          academic_session:{
            type: DataTypes.STRING,
            references:{
                model: 'year',
                key:'id'
            }
          },
          faculty:{
            type: DataTypes.STRING,
            references:{
                model:'faculty',
                key:'id'
            }
          },
          grades:{
            type: DataTypes.STRING,
          },
          classes_missed:{
            type: DataTypes.INTEGER,
          }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'student',
      }
);

module.exports = Student;