const express = require('express');
const router = express.Router();
const User=require('../models/user');
 
router.get('/:id?',function(req,res)
{ 
    if(req.params.id){
        
        User.getUserById(req.params.id,function(err,rows){
 
        if(err)
            {
                res.json(err).statusCode(404);
            }
        else{
                 res.json(rows).statusCode(200);
            }
     });
    }
    else{
 
        User.getAllUsers(function(err,rows){
 
        if(err)
            {
                res.json(err).statusCode(404);
            }
        else
            {
                res.json(rows).statusCode(200);
            }
 
        });
    }
    });


 router.post('/',function(req,res){
        console.log(req.body);
        User.addUser(req.body,function(err){
        if(err)
            {  
                res.statusCode(500);
                res.json(err);
            }
        else{   
                res.statusCode(200);
                res.json(req.body).statusCode(200);
             }
     });
 });


 router.delete('/:id',function(req,res){
 
    User.deleteUser(req.params.id,function(err,count){

    if(err)
        {
            res.json(err);
        }
    else
        {   
            res.statusCode()
            res.json(count);
        }
    });
 });
 
 router.put('/:id',function(req,res){
    console.log(req.body);
    User.updateUser(req.params.id,req.body,function(err,rows){
        if(err)
            {
                res.json(err)
            }
        else
            {
                res.json(rows);
            }

    });
 });
 module.exports=router;