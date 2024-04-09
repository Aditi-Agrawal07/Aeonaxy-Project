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
      termsandCondition:{
        type:Boolean,
        require: true
      }

    }
)

const User = mongoose.model("User", UserSchema)

module.exports =User