const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

//DataBase
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb',{useMongoClient:true});

server.get('/', (req,res,next) => res.send('Backend'))

//start server

server.listen(3000)

