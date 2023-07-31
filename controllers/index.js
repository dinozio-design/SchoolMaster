//import express
const router = require('express').Router();


const adminDashboardroutes = require('./admin-dashboard-routes');
const studentDashboardRoutes = require('./student-dashboard-routes');
const facultyDashboardRoutes = require('./faculty-dashboard-routes');


router.use('/admin-dashboard', adminDashboardroutes);
router.use('/student-dashboard', studentDashboardRoutes);
router.use('/faculty-dashboard', facultyDashboardRoutes);






module.exports = router;