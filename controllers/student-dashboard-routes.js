//display student dashboard page

const router = require('express').Router();

router.get('/',(req,res)=>{
  console.log("******************Insert student dashboard");
  res.render('student-dashboard');

})


module.exports = router;