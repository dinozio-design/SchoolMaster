const router = require('express').Router();
const sequelize = require('../config/connection');
const {Admin,Courses,Department,Faculty,Student,Year,User} = require('../models');