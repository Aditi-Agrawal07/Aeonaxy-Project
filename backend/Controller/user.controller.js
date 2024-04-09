const { User } = require("./../model")

// Import Service
const {UserService} = require("../Service")

const registerUser =  async(req,res)=>{
    try{
        const requestData = req.body

        if(await UserService.checkUsernameExist(requestData.username)){

            console.log(requestData.username);
           return res.status(400).send({
            hasError:true,
            message: "username Exist"
           })
        }

        const user = await UserService.registerUser(requestData)

        return res.status(201).json({
            hasError:false,
            user
        })

    

    }catch(err){

        return res.status(400).json({
            hasError:true,
            message: `Something went wrong ${err}`
        })
    }

}

module.exports ={
    registerUser
}