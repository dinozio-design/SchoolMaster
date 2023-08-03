const router = require('express').Router();
const Faculty = require('../models/Faculty');
const Courses = require('../models/courses')
// const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
  try {
    
    const facultyData = await Faculty.findAll({ include: [Courses]});
    console.log("..............",facultyData)
    const courseData = await Courses.findAll()
    console.log(courseData);
    // Serialize data so the template can read it

    const profile = facultyData.map((data) => data.get({ plain: true }));
    const courses = courseData.map((cdata) => cdata.get({ plain : true}));
    console.log("xxxxxxxxxxxxxxxxxx", profile)
    console.log(courses);
   
    res.render('facultygallery', {
      profile,
      courses
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    
    const facultyData = await Faculty.findByPk(req.params.id, {include:[Courses]});
    console.log("..............",facultyData)
    // const courseData = await Courses.findAll()
    // console.log(courseData);
    
    // Serialize data so the template can read it

    const profile = facultyData.get({ plain: true });
    console.log(profile)
   
    res.render('singlefacultyprofile', {
      profile
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', async (req, res) => {
  try {
    
    const profile = await Faculty.create({
      ...req.body,
    });
    res.render('newfacultyprofile', {
      profile,
     
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
