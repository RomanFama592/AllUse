const express = require("express")
const app = express()

//set configs
app.set("port", process.env.PORT || 10000)

//middleware
try{app.use(morgan("dev"));}catch(err){}
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require("./routes"))

module.exports = app