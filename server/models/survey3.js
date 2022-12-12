let mongoose = require("mongoose");


let survey3 = mongoose.Schema(
  {
    field: String,
    major: String,
    institution: String,
    years: String
    
  },
  {
    collection: "survey3",
  }
);

module.exports = mongoose.model("survey3", survey3);