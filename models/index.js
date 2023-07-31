const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const Admin = require('./Admin');
const Courses = require('./courses');
const Department = require('./department');
const Faculty = require('./Faculty');
const Student = require('./students');
const User = require('./user');
const Academic_Semester = require('./AcademicSemester');


Student.hasMany(Courses, {
    foreignKey: 'student_id'
});

Faculty.hasOne(Courses, {
    foreignKey: 'faculty_id'
});

Department.hasMany(Faculty, {
    foreignKey: 'department_id'
});

Courses.hasMany(Academic_Semester, {
    foreignKey: 'courses_id'
});

Student.hasOne(User);

Faculty.hasOne(User);

Admin.hasOne(User);

module.exports = { Admin, Courses, Department, Faculty, Student, User, Academic_Semester };







