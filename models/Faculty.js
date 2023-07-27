const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Faculty extends Model {}

Faculty.init(
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    qualification:{

    },
    courseTeaching: {
        type: DataTypes.INTEGER,
        references: {
          model: 'courses_teaching', //connect with Swathi 
          key: 'id',
        },
    },
    academicYearId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'academic_year', //connect with Swathi 
          key: 'id',
        },
    },
    departmentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'department', //connect with Swathi
          key: 'id',
        },
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'faculty',
  }
);

module.exports = Faculty;

