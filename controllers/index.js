const router = require('express').Router();
const loginSignOutRoutes = require('./login-signout-routes');
const coursesRoutes = require('./coursesRoutes');
const sessionRoutes = require('./sessionsRoutes');
const addcourseRoutes = require('./addcourseRoutes');
const updatecourseRoutes = require('./updatecourseRoutes')

const adminDashboardroutes = require('./admin-dashboard-routes');
const studentDashboardRoutes = require('./student-dashboard-routes');
const facultyDashboardRoutes = require('./faculty-dashboard-routes');
const facultyProfileRoute = require('./facultyprofileroute'); 
const newfacultyProfile = require('./newfacultyprofileroute');
const studentProfileRoute = require('./studentprofileroute'); 
const newstudentProfile = require('./newstudentprofileroute');

console.log("*********route is working********");


router.use('/admin-dashboard', adminDashboardroutes);
router.use('/student-dashboard', studentDashboardRoutes);
router.use('/faculty-dashboard', facultyDashboardRoutes);
router.use('/facultygallery', facultyProfileRoute);
router.use('/newfacultyprofile', newfacultyProfile);
router.use('/sessions', sessionRoutes);
router.use('/courses', coursesRoutes);
router.use('/addcourse', addcourseRoutes);
router.use('/updatecourse', updatecourseRoutes);
router.use('/studentprofile', studentProfileRoute);
router.use('/newstudentprofile', newstudentProfile);
router.use('/', loginSignOutRoutes);

module.exports = router;
