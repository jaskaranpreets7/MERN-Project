
// server.js

// first we import our dependencies…
var express = require ('express');
var bodyParser = require ('body-parser');

var cors = require('cors')
var mongoose = require('mongoose') ;

// and create our instances
var app = express();
var person = require('./model/db')

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

var routers = require('./route');


// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Use our router configuration when we call /
app.use(routers)
app.get('/', function(req,res){
    res.render('index')
});

app.post('/addperson',function(req,res){
    res.render('index')
})

app.post('/delete',function(req,res){
    res.render('index')
})


app.listen(7777);
console.log("server at 7777")