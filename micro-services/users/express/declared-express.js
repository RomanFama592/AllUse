const express = require("express")
const cors = require("cors")
const app = express()

//set configs
app.set("port", process.env.PORT || 10000)
app.set("trust proxy", false)

//middleware
try{app.use(require("morgan")("dev"));}catch(err){}
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

//routes
app.use(require("./routes"))

module.exports = app