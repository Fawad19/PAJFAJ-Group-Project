
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require('jsonwebtoken');

//create reference to the model (dbschema )
let SurveyList = require("../models/survey");

module.exports.displaySurveyList = (req, res, next) => {
  SurveyList.find((err, SurveyList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(listsList);

      res.render("survey/list", { title: "Survey Contact", SurveyList: SurveyList,
      displayName: req.user ? req.user.displayName : ''});
    }
  });
};

//add page
module.exports.addPage = (req, res, next) => {
  res.render("survey/add", {
    title: "Add Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

//add page
module.exports.addProcessPage = (req, res, next) => {
  let newSurvey = SurveyList({
    "GPA": req.body.GPA,
    "address":req.body.address,
    "comments":req.body.comments,
    "country":req.body.country,
    "dateOfBirth":req.body.dateOfBirth,
    "firstName":req.body.firstName,
    "lastName":req.body.lastName,
    "major":req.body.major,
    "school":req.body.school,
    "phoneNumber": req.body.phoneNumber,
    "email": req.body.email,
    "semester":req.body.semester,
  });
  SurveyList.create(newSurvey, (err, SurveyList) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the lists list
      res.redirect("/survey-list");
    }
  });
};

//get edit page
module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id; 

  SurveyList.findById(id, (err, listToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("survey/edit", { title: "Edit List", SurveyList: listToEdit, 
      displayName: req.user ? req.user.displayName : ''});
    }
  });
};

//edit page
module.exports.processingEditPage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updateLists = SurveyList({
    "_id": id,
    "GPA": req.body.GPA,
    "address":req.body.address,
    "comments":req.body.comments,
    "country":req.body.country,
    "dateOfBirth":req.body.dateOfBirth,
    "firstName":req.body.firstName,
    "lastName":req.body.lastName,
    "major":req.body.major,
    "school":req.body.school,
    "phoneNumber": req.body.phoneNumber,
    "email": req.body.email,
    "semester":req.body.semester,
  });
  SurveyList.updateOne({ _id: id }, updateLists, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the lists list
      res.redirect("/survey-list");
    }
  });
};

//delete page
module.exports.deletePage = (req, res, next) => {
  let id = req.params.id;
  
  SurveyList.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh lists list
      res.redirect("/survey-list");
    }
  });
};
