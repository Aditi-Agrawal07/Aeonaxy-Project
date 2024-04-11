const cloudinary = require("cloudinary").v2
require("dotenv").config()

cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret: process.env.api_secret
})

const FileUpload = async(file)=>{
    try{
        // console.log("File", file);
        const result = await cloudinary.uploader.upload(file)

        console.log("Result", result);
        return result;
    }catch(err){
        console.log(err)
    }
}
module.exports ={
    FileUpload
}