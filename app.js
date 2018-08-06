const express=require('express');
const app=express();
const routes=require('./router/route');
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user',routes);



app.listen(8088,(err)=>{
    (err)?console.log(`error ${err.message} stack ${err.stack}`):console.log('success');
});