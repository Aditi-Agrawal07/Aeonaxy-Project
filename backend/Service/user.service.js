// Import Model
const {User} = require("../model")

// Import Utility 
const  {crypto} = require("../utils")

async function registerUser(payload){
    try{
        let user
        payload.password = crypto.generateHash(payload.password)

        user = new User(payload)
        await user.save()

        return user
    }catch(err){
        console.log("Error", err);
        return false
    }

}

async function checkUsernameExist(username){
    try{
        let user = await User.findOne({username: username})

        console.log(user)

        if(user){
            return true
        }
        else{
            return false
        }

    }catch(err){

        console.log("Error", err)
        return false

    }
}

module.exports = {
    registerUser,
    checkUsernameExist
}