const router = require('express').Router();
const loginSignOutRoutes = require('./login-signout-routes');

router.use('/', loginSignOutRoutes);

module.exports = router;
