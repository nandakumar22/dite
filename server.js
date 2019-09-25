var express = require('express');
var app = express()
var mysql = require('mysql');
var bodyParser = require('body-parser')
var port = 2422


//USE BODY PARSER
app.use(bodyParser.json())
//USE BODY PARSER
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dite'
})
db.connect()
console.log('The databse is connected')


//USER MODULE
require('./middleware/user')(app,db)
//USER MODULE

app.listen(port)
console.log('The server is listening to '+port)