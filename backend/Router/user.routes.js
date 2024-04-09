const router = require('express').Router()

const {multer} = require("../Middleware")
const {userController} = require("../Controller")

router.post('/register', userController.registerUser)

router.patch('/update/:username', multer.uploader.single("image"),userController.updateUser)

module.exports = router