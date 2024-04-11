const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
      name: {
        type:String,
        require:true
      },
      username: {
        type:String,
        require: true
      },
      email:{
        type:String,
        require:true
      },
      password:{
        salt:{
          type:String
        },
        hash:{
          type:String
        },
     
      },
      image:{
        type:String
      },
      termsandCondition:{
        type:Boolean,
        require: true
      },
      location:{
        type:String
      },
      description:{
        type:String
      }
    }
)

const User = mongoose.model("User", UserSchema)

module.exports =User