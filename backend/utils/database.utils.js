const mongoose = require("mongoose")

function databaseConnection(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database connection sucessfully created");
    })
    .catch((err)=>{
        console.log("Something went wrong", err);
    })
}

module.exports ={
    databaseConnection
}