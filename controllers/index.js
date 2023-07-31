<<<<<<< HEAD
//import express
const router = require('express').Router();


const adminDashboardroutes = require('./admin-dashboard-routes');
const studentDashboardRoutes = require('./student-dashboard-routes');
const facultyDashboardRoutes = require('./faculty-dashboard-routes');


router.use('/admin-dashboard', adminDashboardroutes);
router.use('/student-dashboard', studentDashboardRoutes);
router.use('/faculty-dashboard', facultyDashboardRoutes);






module.exports = router;
=======
const router = require('express').Router();
const loginSignOutRoutes = require('./login-signout-routes');
const facultyProfileRoute = require('./facultyprofileroute'); 
const newfacultyProfile = require('./newfacultyprofileroute');


router.use('/facultygallery', facultyProfileRoute);
router.use('/newfacultyprofile', newfacultyProfile);

router.use('/', loginSignOutRoutes);

module.exports = router;
>>>>>>> 849913f75b3a7edb2967a5a91babb8810aa3316c
