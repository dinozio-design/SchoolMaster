//display student dashboard page

const router = require('express').Router();

router.get('/',(req,res)=>{
  res.render('student-dashboard');

})



module.exports = router;