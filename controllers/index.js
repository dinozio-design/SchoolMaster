const router = require('express').Router();
const coursesRoutes = require('./coursesRoutes');
const sessionRoutes = require('./sessionsRoutes');
const addcourseRoutes = require('./addcourseRoutes')

const adminDashboardroutes = require('./admin-dashboard-routes');
const studentDashboardRoutes = require('./student-dashboard-routes');
const facultyDashboardRoutes = require('./faculty-dashboard-routes');
const loginSignOutRoutes = require('./login-signout-routes');
const facultyProfileRoute = require('./facultyprofileroute'); 
const newfacultyProfile = require('./newfacultyprofileroute');

router.use('/', loginSignOutRoutes);
router.use('/admin-dashboard', adminDashboardroutes);
router.use('/student-dashboard', studentDashboardRoutes);
router.use('/faculty-dashboard', facultyDashboardRoutes);
router.use('/facultygallery', facultyProfileRoute);
router.use('/newfacultyprofile', newfacultyProfile);
router.use('/sessions', sessionRoutes);
router.use('/courses', coursesRoutes);
router.use('/addcourse', addcourseRoutes)

module.exports = router;
