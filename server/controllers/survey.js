
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require('jsonwebtoken');

//create reference to the model (dbschema )
let survey1 = require("../models/survey1");
let survey2 = require("../models/survey2");
let survey3 = require("../models/survey3");

/*
module.exports.displaysurvey1List = (req, res, next) => {
  survey1.find((err, surveyList1) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(survey_List);

      res.render("survey/list1", {
        title: "Survey List",
        SurveyList1: surveyList1,
        displayName: req.user ? req.user.displayName : "",
      });
      //render list.ejs and pass title and Survey_list variable we are passing survey_List object to Survey_list property
    }
  });
};
*/

module.exports.displaysurvey1List = (req, res, next) => {
  survey1.find((err, surveyList1) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(survey_List);

      res.render("survey/list1", {
        title: "Survey List",
        SurveyList1: surveyList1,
        displayName: req.user ? req.user.displayName : "",
      });
      //render list.ejs and pass title and Survey_list variable we are passing survey_List object to Survey_list property
    }
  });
};

module.exports.displaysurvey2List = (req, res, next) => {
  survey2.find((err, surveyList2) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(survey_List);

      res.render("survey/list2", {
        title: "Survey List",
        SurveyList2: surveyList2,
        displayName: req.user ? req.user.displayName : "",
      });
      //render list.ejs and pass title and Survey_list variable we are passing survey_List object to Survey_list property
    }
  });
};

module.exports.displaysurvey3List = (req, res, next) => {
  survey3.find((err, surveyList3) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(survey_List);

      res.render("survey/list3", {
        title: "Survey List",
        SurveyList3: surveyList3,
        displayName: req.user ? req.user.displayName : "",
      });
      //render list.ejs and pass title and Survey_list variable we are passing survey_List object to Survey_list property
    }
  });
};




module.exports.template1page = (req, res, next) =>{
  res.render("survey/template1", {
    title:"International Students",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.template1processpage = (req, res, next) =>{
  let newsurvey1 = survey1({
      fullname: req.body.fullname,
      email: req.body.email,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      age: req.body.age,
  });

  survey1.create(newsurvey1, (err, survey1)=>{
    if (err){
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/surveylist1");
    }
  });
};








  



  module.exports.template2page = (req, res, next) =>{
    res.render("survey/template2", {
      title:"Accommodations",
      displayName: req.user ? req.user.displayName : "",
    });
  };
  
  module.exports.template2processpage = (req, res, next) =>{
    let newsurvey2 = survey2({
      budget: req.body.budget,
      areaCode: req.body.areaCode,
      housing: req.body.housing,
    });
  
    survey2.create(newsurvey2, (err, survey2)=>{
      if (err){
        console.log(err);
        res.end(err);
      } else {
        res.redirect("/surveylist2");
      }
    });
  };

  module.exports.template3page = (req, res, next) =>{
    res.render("survey/template3", {
      title:"Area of Major",
      displayName: req.user ? req.user.displayName : "",
    });
  };
  
  module.exports.template3processpage = (req, res, next) =>{
    let newsurvey3 = survey3({
      field: req.body.field,
      major: req.body.major,
      institution: req.body.institution,
      years: req.body.years,
    });
  
    survey3.create(newsurvey3, (err, survey3)=>{
      if (err){
        console.log(err);
        res.end(err);
      } else {
        res.redirect("/surveylist3");
      }
    });
  };




  module.exports.displayeditpage1 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    survey1.findById(id, (err, survey_edit1) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("survey/edit1", {
          title: "Edit surveys",
          survey1: survey_edit1,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
  };
  
  module.exports.processingeditpage1 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatesurvey1 = survey1({
      _id: id,
      fullname: req.body.fullname,
      email: req.body.email,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      age: req.body.age,
      
    });
    survey1.updateOne({ _id: id }, updatesurvey1, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist1");
      }
    });
  };

  module.exports.deletepage1 = (req, res, next) => {
    let id = req.params.id;
    survey1.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist1");
      }
    });
  };




  module.exports.displayeditpage2 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    survey2.findById(id, (err, survey_edit2) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("survey/edit2", {
          title: "Edit surveys",
          survey2: survey_edit2,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
  };
  
  module.exports.processingeditpage2 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatesurvey2 = survey2({
      _id: id,
      budget: req.body.budget,
      areaCode: req.body.areaCode,
      housing: req.body.housing,
    });
    survey2.updateOne({ _id: id }, updatesurvey2, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist2");
      }
    });
  };
  
  module.exports.deletepage2 = (req, res, next) => {
    let id = req.params.id;
    survey2.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist2");
      }
    });
  }; 


  module.exports.displayeditpage3 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    survey3.findById(id, (err, survey_edit3) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("survey/edit3", {
          title: "Edit surveys",
          survey3: survey_edit3,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
  };
  
  module.exports.processingeditpage3 = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatesurvey3 = survey3({
      _id: id,
      field: req.body.field,
      major: req.body.major,
      institution: req.body.institution,
      years: req.body.years,
    });
    survey3.updateOne({ _id: id }, updatesurvey3, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist3");
      }
    });
  };
  
  module.exports.deletepage3 = (req, res, next) => {
    let id = req.params.id;
    survey3.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey page
        res.redirect("/surveylist3");
      }
    });
  }; 













