const express = require("express");
const cors =require("cors");
const bodyParser=require("body-parser");
const   mongoose  = require("mongoose");
const routes= require('./router/index');
const PORT=8000|| process.env.PORT;
require("dotenv").config();
const app=express();
// enviroment =local 
// process.env.enviroment
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",routes);
async function startConnection(){
      
        try{
            await mongoose.connect(process.env.MongoDBURL);
            app.listen(PORT,(err)=>{
                if(err){
                    throw new Error(err);
                }
                console.log("database is connected");
                console.log('server is runing up port ${PORT}');
            });
        }catch(error){
         console.log("error",error);
        }


}
module.exports.startConnection=startConnection;

