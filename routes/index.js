var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require("passport"); 
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/createevent" , function(req,res){
  res.render("createevent");
})

router.post("/login" , passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/",
}) , function(req,res){  })

router.get("/register" , function(req,res){
  var newUser = new userModel({
    username:req.body.username,
    name:req.body.name,
  })
  userModel.register(newUser , req.body.password)
  .then(function(all){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/dashboard");
    })
  })
})

router.get("/uploadselfie" , function(req,res){
  res.render("uploadselfie")
})

router.get("/linkpage" , function(req,res){
  res.render("linkpage")
})

router.get("/dashboard" , function(req,res){
  res.render("dashboard")
})

module.exports = router;
