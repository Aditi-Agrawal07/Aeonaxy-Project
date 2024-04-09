const router = require('express').Router()

const {userController} = require("../Controller")

router.post('/register', userController.registerUser)

module.exports = router