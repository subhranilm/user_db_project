const db = require('../db/dbconnection');
const User={
        getAllUsers:function(callback){
 
        return db.query("Select * from user",callback);
         
        },
         getUserById:function(id,callback){
         
        return db.query("select * from user where Id=?",[id],callback);
         },
         addUser:function(user,callback){
                let new_user_id = user.id;
                let new_user_name = user.name;
                console.log(new_user_id);
                console.log(new_user_name);
                return db.query("insert into user(id,name) values(?,?)",[new_user_id,new_user_name],callback);
         },
         deleteUser:function(id,callback){
          return db.query("delete from user where Id=?",[id],callback);
         },
         updateUser:function(id,user,callback){
                let user_id = id;
                let new_user_name = user.name;
                console.log(user);
                console.log(new_user_name);
               return db.query("update user set name = ? where id = ?",[new_user_name,user_id],callback);    
          
        }
};

module.exports=User;