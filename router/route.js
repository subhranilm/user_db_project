const express = require('express');
const router = express.Router();
const User=require('../models/user');
 
router.get('/:id?',function(req,res)
{ 
    if(req.params.id){
        
        User.getUserById(req.params.id,function(err,rows){
 
        if(err)
            {   
                res.statusCode(404);
                res.json(err);
            }
        else{   
                res.statusCode(200);
                 res.json(rows);
            }
     });
    }
    else{
 
        User.getAllUsers(function(err,rows){
 
        if(err)
            {   res.statusCode(404);
                res.json(err);
            }
        else
            {   
                res.statusCode(200);
                res.json(rows);
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
                res.json(req.body);
             }
     });
 });


 router.delete('/:id',function(req,res){
 
    User.deleteUser(req.params.id,function(err,count){

    if(err)
        {   
            res.statusCode(404);
            res.json(err);
        }
    else
        {   
            res.statusCode(200);
            res.json(count);
        }
    });
 });
 
 router.put('/:id',function(req,res){
    console.log(req.body);
    User.updateUser(req.params.id,req.body,function(err,rows){
        if(err)
            {   
                res.statusCode(500);
                res.json(err);
            }
        else
            {   
                res.statusCode(200);
                res.json(rows);
            }

    });
 });
 module.exports=router;