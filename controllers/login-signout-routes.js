const express = require('express');
const router = express.Router();
const { User, Admin, Faculty, Student } = require('../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  console.log('Inside / ***********');
  res.render('login');
});

router.get('/login', (req, res) => {
  console.log('Inside login ***********');
  res.render('login');
});

router.get('/signup', (req, res) => {
  console.log('Inside signup ***********');
  res.render('signup');
});

// logout by hitting /logout
router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.logged_in = false;
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ msg: 'an error occurred while logging out' });
      } else {
        res.redirect('/');
      }
    });
  } else {
    res.redirect('/');
  }
});

router.get('/:id', (req, res) => {
  User.findByPk(req.params.id, { include: [Admin, Faculty, Student] })
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'an error occurred', err });
    });
});

// sign up
router.post('/signup', (req, res) => {
  // run hooks to hash and salt password; create user

  User.findOne({
    where: { email: req.body.email },
  }).then((foundUser) => {
      if (foundUser) {
        console.log('user found+++++++++++++++++++++++++++++++++');
        return res.status(400).json({ errorMsg: 'Email Already Exists' });
      } else {
        User.create(req.body, { individualHooks: true })
          .then((newUser) => {
            req.session.user = {
              id: newUser.id,
              username: newUser.username,
            };
            req.session.save(() => {
              req.session.user_id = newUser.id;
              req.session.logged_in = true;              
            });
            res.json({logged_in: true});
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ msg: 'an error occurred', err });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'Sign up Error', err });
    });
});

// login
router.post('/login', (req, res) => {
  User.findOne({
    where: { email: req.body.email },
  })
    .then((foundUser) => {
      if (
        !foundUser ||
        !bcrypt.compareSync(req.body.password, foundUser.password)
      ) {
        return res.status(400).json({ msg: 'wrong login credentials' });
      }
      req.session.user = {
        id: foundUser.id,
        username: foundUser.username,
      };
      req.session.save(() => {
        req.session.user_id = foundUser.id;
        req.session.logged_in = true;
        req.session.userType = foundUser.userType;
       
      });
      res.json({data : foundUser, logged_in: true, userType: foundUser.userType});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'an error occurred', err });
    });
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const {User,Admin,Faculty, Student} = require('../models');
// const bcrypt  = require("bcrypt");

// router.get("/", (req, res) => {
//   console.log("Inside /////// ***********");
//     res.render("login");
//   });

// router.get("/login",(req,res)=>{
//   console.log("Inside login ***********");
//     // if(req.session.user){
//     //     return res.redirect("/")
//     // }
//     res.render("login");
// })

// router.get("/signup",(req,res)=>{
//   console.log("Inside signup ***********");
//     res.render("signup")
// })

//   // logout by hitting /logout
// router.get("/logout",(req,res)=>{
//     req.session.destroy();
//     res.redirect('/');
// })

// router.get("/:id", (req, res) => {
//     User.findByPk(req.params.id,{include:[Admin, Faculty, Student]})
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({ msg: "an error occured", err });
//       });
// });

// // sign up
// router.post("/", (req, res) => {
//   // run hooks to hash and salt password; create user

//     User.create(req.body, {individualHooks: true} )
//       .then(newUser => {
//         // IMMEDIATE LOG IN = create new session for user with id and username (sessions set to 30 min)
//         req.session.user = {
//           id:newUser.id,
//           username:newUser.username
//         }
//         res.json(newUser);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({ msg: "an error occured", err });
//       });
// });

// // login /login
// router.post("/login", (req, res) => {
//   // find username name that matches request
//     User.findOne({
//       where:{
//       email:req.body.email
//     }
// }).then(foundUser=>{
//   // if username is not found, send message
//       if(!foundUser){
//         return res.status(400).json({msg:"wrong login credentials"})
//       }
//       // compare password with saved hash
//       if(bcrypt.compareSync(req.body.password,foundUser.password)){
//         // if pw matches, create session for user
//         req.session.user = {
//           id:foundUser.id,
//           username:foundUser.username
//         }
//         console.log("*******", foundUser.userType)
//         return res.json(foundUser)
//         // redirect page??
//       } else {
//         return res.status(400).json({msg:"wrong login credentials"})
//       }
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({ msg: "an error occured", err });
//       });
// });

// router.post("/signup", (req, res) => {
//   // run hooks to hash and salt password; create user
//   console.log("******Sign up Data*****", req.body)
//     User.create(req.body, {individualHooks: true} )
//       .then(newUser => {
//         // IMMEDIATE LOG IN = create new session for user with id and username (sessions set to 30 min)
//         req.session.user = {
//           id:newUser.id,
//           username:newUser.username
//         }
//         console.log("******Sign up Data***** newuser", newUser)
//         res.json(newUser);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({ msg: "an error occured", err });
//       });
// });

// router.put("/:id", (req, res) => {
//     User.update(req.body, {
//       where: {
//         id: req.params.id
//       },
//       individualHooks: true
//     }).then(updatedUser => {
//       res.json(updatedUser);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ msg: "an error occured", err });
//     });
// });

// router.delete("/:id", (req, res) => {
//     User.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(delUser => {
//       res.json(delUser);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ msg: "an error occured", err });
//     });
//   });

// module.exports = router;
