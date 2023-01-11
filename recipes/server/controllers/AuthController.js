const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if (err) {
            res.json({
                error:err
            })
        }
        
    let user = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPass
    })
    user.save()
    .then(user => {
        res.redirect('/?message=Successfully registered');
    })
    .catch(error => {
        res.json({
            message: 'Error'
        })
    })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password

    User.findOne({$or: [{username:password},{email:password}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password,  function(err, result) {
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful',
                        token
                    })
                }
            })
        } else {
            res.json({
                message: 'Incorrect details'
            })
        }
    })
}

module.exports = {
    register, login
}