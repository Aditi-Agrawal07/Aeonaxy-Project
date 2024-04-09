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

const updateUser = async(req,res)=>{
    try{

        const username = req.params.username
        const reqbody = req.body
        console.log("Request Body", reqbody);
        const uploadedFile = await cloudinary.FileUpload(req.file.path);

        console.log(uploadedFile);

        // const user = await User.findOne({username:username})

        const user  = await User.findOneAndUpdate({username:username},{...reqbody,image:uploadedFile.url},{new:true})

        console.log(user);

        return res.status(200).send({
            hasError:false,
            user
        })


    }catch(err){

    }

}

module.exports ={
    registerUser,
    updateUser
}