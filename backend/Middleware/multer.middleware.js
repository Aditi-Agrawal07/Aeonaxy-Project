const multer = require("multer")

var uploader = multer({
    storage:multer.diskStorage({}),
    limits:{fileSize:50000000000}
})

console.log("Multer will be called")

module.exports = {
    uploader
}