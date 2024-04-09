// Import dependencies
const { log } = require("console")
const crypto = require("crypto")

// Generate the hash code
function generateHash(text, salt=crypto.randomBytes(32).toString("hex")){
    try{
        const generatedHash = crypto.pbkdf2Sync(text,salt,1000, 64, "sha512").toString("hex")
        return {salt, hash:generatedHash}

    }catch(err){

    console.log("Error", err);
    return {}
    }

}

// validate the hash
function validateHash(text, hash, salt){
    try{
        const {hash:generatedHash}  = generateHash(text,salt)
        
        const isValidHash = generateHash === hash
        return isValidHash

    }catch(err){
        console.log("Error", err);
        return false

    }
}

module.exports  ={
    generateHash,
    validateHash
}

