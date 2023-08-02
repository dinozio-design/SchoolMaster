//display faulty dashboard page

const router = require('express').Router();
router.get('/faculty-dashboard',(req,res)=>{
  res.render('faculty-dashboard');
})

module.exports = router;