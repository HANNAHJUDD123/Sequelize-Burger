// Here is where you create all the functions that will do the routing for your app
const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

//EXPRESS GET ROUTE
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

//EXPRESS POST ROUTE
router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

//EXPRESS PUT ROUTE
router.put('/burgers/:id', function(req, res) {
  let condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

//Experts routes for server.js to use. 
module.exports = router;