/**
 * Created by Qi on 2020/5/12.
 */
var express = require('express')
var User = require('../models/user.js')

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
    User.findOne({
        $or: [
            {
                email: req.body.email
            },
            {
                nickname: req.body.nickname
            }
        ]
    }, function (err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })
        }
        if (data) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname already exists'
            })
        }
        new User(req.body).save(function (err, data) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'Internal error'
                })
            }
            res.status(200).json({
                err_code: 0,
                message: 'Ok'
            })
        })
    })
})

router.get('/test', function (req, res) {
    res.send('Hello world')
})

module.exports = router