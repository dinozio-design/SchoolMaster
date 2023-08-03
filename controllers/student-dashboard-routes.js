//display student dashboard page

const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.logged_in = true; 
  res.render('student-dashboard', { logged_in: true }); 
});


module.exports = router;