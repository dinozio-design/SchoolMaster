const router = require('express').Router();
console.log(`got router`)
const Courses = require('../models/courses');
const Academic_Semester = require('../models/academic_semester'); 
console.log(`got courses`)

router.get('/', async (req, res) => {
  try {
    const coursesData = await Courses.findAll({
      attributes: ['id', 'course', 'course_description', 'fees'],
    });

    const courses = coursesData.map((course) => course.get({ plain: true }));

    res.render('courses', { courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const semesterId = req.params.id;
    const selectedSemester = await Academic_Semester.findByPk(semesterId);
    console.log(selectedSemester)
    const coursesData = await Courses.findAll({
      attributes: ['id', 'course','course_description','fees'],
        where: { semester: semesterId },
    })
    console.log(coursesData)
    const courses = coursesData.map((course) => course.get({ plain: true }));
  console.log(courses)
  res.render('courses', {selectedSemester,courses});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

  module.exports = router;