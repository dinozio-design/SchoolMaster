const router = require('express').Router();
//localhost:3001
const coursesRoutes = require('./coursesRoutes');
const sessionRoutes = require('./sessionsRoutes');
const addcourseRoutes = require('./addcourseRoutes')

router.use('/sessions', sessionRoutes);
router.use('/courses', coursesRoutes);
router.use('/addcourse', addcourseRoutes)

module.exports = router;
