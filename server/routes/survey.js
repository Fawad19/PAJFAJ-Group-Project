let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");

//connect to our Survey model
let jwt = require('jsonwebtoken');

let passport = require("passport");

// connect to our survey Model
//let Survey = require("../models/survey");

let surveyController = require("../controllers/survey");


/* For template2 and surveylist1 */

function requireAuthS1(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/surveylist1/login");
  }
  next();
}
/* For template3 and surveylist2 */
function requireAuthS2(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/surveylist2/login");
  }
  next();
}
/* For template4 and surveylist3 */

function requireAuthS3(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/surveylist3/login");
  }
  next();
}



// template 1

/* GET Route for the survey List page - READ Operation */
router.get("/surveylist1", requireAuthS1,  surveyController.displaysurvey1List);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/template1", surveyController.template1page);
/* POST Route for processing the Add page - CREATE Operation */
router.post("/template1",  surveyController.template1processpage);

/* GET Route for displaying the Edit page for template2- UPDATE Operation */
router.get("/surveylist1/edit1/:id", requireAuthS1, surveyController.displayeditpage1);

/* POST Route for processing the Edit page for template2- UPDATE Operation */
router.post("/surveylist1/edit1/:id", requireAuthS1, surveyController.processingeditpage1);

/* GET to perform  Deletion for template2 - DELETE Operation */
router.get("/surveylist1/delete/:id", requireAuthS1, surveyController.deletepage1);

// template 2
/* GET Route for the survey List page - READ Operation */
router.get("/surveylist2", requireAuthS2,  surveyController.displaysurvey2List);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/template2", surveyController.template2page);
/* POST Route for processing the Add page - CREATE Operation */
router.post("/template2", surveyController.template2processpage);
/* GET Route for displaying the Edit page for template2- UPDATE Operation */
router.get("/surveylist2/edit2/:id", requireAuthS2, surveyController.displayeditpage2);

/* POST Route for processing the Edit page for template2- UPDATE Operation */
router.post("/surveylist2/edit2/:id", requireAuthS2, surveyController.processingeditpage2);

/* GET to perform  Deletion for template2 - DELETE Operation */
router.get("/surveylist2/delete/:id", requireAuthS2, surveyController.deletepage2);


// template 3

/* GET Route for the survey List page - READ Operation */
router.get("/surveylist3", requireAuthS3,  surveyController.displaysurvey3List);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/template3", surveyController.template3page);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/template3", surveyController.template3processpage);
/* GET Route for displaying the Edit page for template2- UPDATE Operation */
router.get("/surveylist3/edit3/:id", requireAuthS3, surveyController.displayeditpage3);

/* POST Route for processing the Edit page for template2- UPDATE Operation */
router.post("/surveylist3/edit3/:id", requireAuthS3, surveyController.processingeditpage3);

/* GET to perform  Deletion for template2 - DELETE Operation */
router.get("/surveylist3/delete/:id", requireAuthS3, surveyController.deletepage3);


module.exports = router;













