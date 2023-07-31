//display faulty dashboard page

const router = require('express').Router();
router.get('/',(req,res)=>{
  res.render('faculty-dashboard');
})

module.exports = router;