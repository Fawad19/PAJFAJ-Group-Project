let mongoose = require("mongoose");

let survey1 = mongoose.Schema(
    {
        fullname : String,
        email : String,
        address: String,
        phoneNumber: String,
        age : String,
    },
    {
        collection: "survey1",
    }
);

mongoose.exports = mongoose.model("survey1", survey1);