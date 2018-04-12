const express = require('express')
const app = express()
// const { Client } = require('pg')
// const connectionString = 'postgresql://postgres:secret@localhost:5432/postgres'
// const client = new Client({ connectionString })
var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')


app.listen(4001, () => console.log('Express API listening on port 4001'))

 app.use(function(req, res, next) {
     res.header('Access-Control-Allow-Origin', '*')
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
     next()
 })



app.get('/do-something', (request, response) => { response.send(`I'll do something, I promise!`) })
//
// app.get( '/', (request, response) => { client.query('select * from users') (err, result) => { response.send(result) } }



client.connect()
