//display faulty dashboard page
const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.logged_in = true; 
  res.render('faculty-dashboard', { logged_in: true }); 
});

module.exports = router;