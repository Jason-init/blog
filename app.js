/**
 * Created by Qi on 2020/5/11.
 */
var express = require('express')
var path = require('path')

var app = express()

app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.listen(3000, function () {
    console.log('Server is running')
})

