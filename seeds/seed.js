const sequelize = require('../config/connection');
const { User, Faculty } = require('../models');
const facultyData = require('./facultyprofile.json');
const coursesData = require('./courses.json');
const studentsData = require('./students.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(coursesData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(studentsData, {
    individualHooks: true,
    returning: true,
  });

  const faculties = await Faculty.bulkCreate(facultyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();