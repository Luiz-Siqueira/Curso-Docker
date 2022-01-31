const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

const bodyParser = require('body-parser')
const cors = require('cors')

//DataBase
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb',{useMongoClient:true});

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

//ODM

const client = restful.model('Client',{
    name:{type: String, required:true}
})


//api rest
client.methods(['get','post','put','delete'])
client.updateOptions({new:true,runValidators:true})

//Routes
client.register(server,'/client')


//start server
server.listen(3000)

