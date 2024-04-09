const express = require("express")
const cors = require("cors")
// Create an app
const app = express()

// Import utility
const {database} = require("./utils")

// Import Router
const {userRouter} = require("./Router")

app.use(express.json())
app.use(cors())

database.databaseConnection();

app.use("/user",userRouter)


module.exports = { app }