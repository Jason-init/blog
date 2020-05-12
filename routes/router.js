/**
 * Created by Qi on 2020/5/12.
 */
var express = require('express')

var router = express.Router()

router.get('/', function (req, res) {
    res.render('index.html')
})

router.get('/login', function (req, res) {
    res.render('login.html')
})

router.post('/login', function (req, res) {
    console.log(req.body)
})

router.get('/register', function (req, res) {
    res.render('register.html')
})

router.post('/register', function (req, res) {
    res.render('')
})

module.exports = router