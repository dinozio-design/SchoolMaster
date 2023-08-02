//display student dashboard page

const router = require('express').Router();

router.get('/', async (req,res)=>{
  console.log("******************Insert student dashboard");
  res.render('student-dashboard');

})


module.exports = router;