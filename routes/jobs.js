var express = require('express');
var mongoose = require("mongoose");
var Job = require("../models/job");
var User = require("../models/user");
var router = express.Router();
// router.use()
router.get('/', function(req, res, next) {
  User.create({
    name: "Beavis",
    email: "thegreatcornholio@teepee.bm",
    brandingStatement: "Hey, Butt-head, this website kicks ass.",
    unicornJob: "Whoa, unicorns are cool.  Heh heh."
  }, function(err, job) {
    Job.create({
        title: "Junior Dev",
        companyName: "Google",
        skills: "HTML, CSS, JS, React, hipster vibes",
        rating: "Unicorn",
        statusString: "applied",
    }, {
        title: "Junior Dev",
        companyName: "FaceBooks",
        skills: "HTML, CSS, JS, React, hipster vibes",
        rating: "Unicorn",
        statusString: "applied",
    }, function(err,job){
        if (err) return console.log(err);
        res.send(job);
    })
        
  });
  // Job.find({}, function(err, jobs) {
  //   if (err) return console.log(err);
  //   res.send(jobs);
  // })
});
module.exports = router;