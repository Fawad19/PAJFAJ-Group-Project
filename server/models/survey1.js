let mongoose = require('mongoose');

let survey1Model = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    college: String,
    visit: String,
    accomodation: String,
    choices: String,
    fieldOfStudy: String,
    exp: Number
},
{
    collection: "survey1"
});

module.exports = mongoose.model('Survey1', survey1Model);