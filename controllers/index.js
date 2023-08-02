const router = require('express').Router();

const apiRoutes = require('./api');
const loginSignOutRoutes = require('./login-signout-routes');
// const homeRoutes = require('./homeRoutes');

router.use('/', loginSignOutRoutes);
router.use('/api', apiRoutes);

module.exports = router;
