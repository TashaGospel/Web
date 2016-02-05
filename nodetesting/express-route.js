var express = require('express')
var app = express()

app.use('/statics', express.static(__dirname))

app.get('/ab', function(req, res, next) {
    console.log('fn1')
    next()
}, function(req, res, next) {
    console.log('fn2')
    res.send('Hello there')
})

app.get(/a/, function(req, res) {
    console.log('fn3')
})

app.listen(3000)
