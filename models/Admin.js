const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Admin extends Model { }

Admin.init(
{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [8],
      },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
      validate: {
        isEmail: true,
      },
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'admin',
  });

  module.exports = Admin;