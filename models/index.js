const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const Admin = require('./Admin');
const Courses = require('./courses');
const Department = require('./department');
const Faculty = require('./Faculty');
const Student = require('./students');
const User = require('./user');
const Academic_Semester = require('./academic_semester');


// Student.hasMany(Courses, {
//     foreignKey: 'student_id'
// });

Faculty.hasOne(Courses, {
    foreignKey: 'faculty_id'
});

// Courses.belongTo(Faculty, {
//     foreignKey: 'faculty_id'
// })


Department.hasMany(Faculty, {
    foreignKey: 'department_id'
});

// Courses.hasMany(Academic_Semester, {
//     foreignKey: 'id'
// });

// Student.hasMany(Academic_Semester, {
//     foreignKey: 'id'
// });

// Student.hasOne(User);
// Faculty.hasOne(User);

User.belongsTo(Admin, { foreignKey: 'id', constraints: false });
User.belongsTo(Student, { foreignKey: 'id', constraints: false });
User.belongsTo(Faculty, { foreignKey: 'id', constraints: false });


module.exports = { Admin, Courses, Department, Faculty, Student, User, Academic_Semester };







