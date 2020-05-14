/**
 * Created by Qi on 2020/5/11.
 */
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var router = require('./routes/router.js')

var app = express()

app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'my secret is secret',
    resave: false,
    saveUninitialized: true
}))

app.use(router)

app.use(function (req, res) {
    res.render('404.html')
})

app.use(function (err, req, res, next) {
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
})

app.listen(3000, function () {
    console.log('Server is running')
})

