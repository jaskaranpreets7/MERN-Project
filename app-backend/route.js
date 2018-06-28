
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Person = require('./model/person')
const obj = [
    { name: '' , username: '', email:'', age: ''}
]

router.route('/person')
    //GET all person
    .get(function(req, res) {
        Person.find(function (err, persons) {
              if (err) {
                  console.log(err);
              }
              res.json({success : true , data : persons})
        });
    })

//add person 
router.route('/addperson').post(function(req,res){
    var doc = {id: req.body.id, name: req.body.name , username: req.body.username, email: req.body.email, age: req.body.age}
    Person.insertMany(doc,function(err) {
        if(err){
            console.log(err)
        }
            res.json({doc})
    })
})
// router.route('/delete/:id').delete(function(req,res){
//     var id = { id: req.params.id}
//     Person.remove(id,function(err){
//         if(err){
//             console.log(err)
//         }
//         res.json(`person #${id} deleted successfully`)
//     })
// })


module.exports = router;