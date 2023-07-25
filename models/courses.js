const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Courses extends Model{}

Courses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course_description: {
      type: DataTypes.STRING,
    },
    department_id:{
      type: DataTypes.INTEGER,
      references:{
       model:"Department",
       key:"id",
      }
    },
    academic_year_id: {
      type: DataTypes.INTEGER,
      references:{
       model:"Year",
       key:"id",
      }
      },
   course_fees:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
},

{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'courses',
}
)

module.exports = Courses;