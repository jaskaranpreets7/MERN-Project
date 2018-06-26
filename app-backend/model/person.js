var mongoose = require("mongoose");


var personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    age:Number,
    email: String
   },{
       collection : 'person'
   });

module.exports =  mongoose.model("person", personSchema);

