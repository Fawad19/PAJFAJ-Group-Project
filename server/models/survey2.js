let mongoose = require("mongoose");


let survey2 = mongoose.Schema(
  {
    budget: String,
    areaCode: String,
    housing: String
    
  },
  {
    collection: "survey2",
  }
);

module.exports = mongoose.model("survey2", survey2);