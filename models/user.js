const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Admin',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Student',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    faculty_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Faculty',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
   
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        try {
          console.log('Before Create - newUserData:', newUserData);
          const hashedPassword = await bcrypt.hash(newUserData.password, 10);
          newUserData.password = hashedPassword;
          return newUserData;
        } catch (err) {
          console.log('Error hashing password:', err);
          throw err;
        }
      },
      beforeUpdate: async (updatedUserData) => {
        try {
          console.log('Before Update - updatedUserData:', updatedUserData);
          const hashedPassword = await bcrypt.hash(updatedUserData.password, 10);
          updatedUserData.password = hashedPassword;
          return updatedUserData;
        } catch (err) {
          console.log('Error hashing password:', err);
          throw err;
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
