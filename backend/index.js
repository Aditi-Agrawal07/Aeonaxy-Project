require("dotenv").config()
const http = require('http')

// Import app
const {app} = require("./app")

// create the server
const httpserver = http.createServer(app)

// Listen the server 

const port = process.env.PORT
httpserver.listen(port, ()=>{
console.log("App get started");
})