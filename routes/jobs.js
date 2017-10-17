var express = require('express');
var mongoose = require("mongoose");
var Job = require("../models/job");
var router = express.Router();

// router.use()
router.get('/', function(req, res, next) {
  // Job.create({
  //   title: "Junior Dev",
  //   company: "google",
  //   location: "Kirkland"
  // }, function(err, job){
  //   if (err) return console.log(err);
  //   res.send(job);
  // });

  // Job.find({}, function(err, jobs) {
  //   if (err) return console.log(err);
  //   res.send(jobs);
  // })
});

module.exports = router;
