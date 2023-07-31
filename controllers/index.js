const router = require('express').Router();
const loginSignOutRoutes = require('./login-signout-routes');
const facultyProfileRoute = require('./facultyprofileroute'); 
const newfacultyProfile = require('./newfacultyprofileroute');


router.use('/facultygallery', facultyProfileRoute);
router.use('/newfacultyprofile', newfacultyProfile);

router.use('/', loginSignOutRoutes);

module.exports = router;
