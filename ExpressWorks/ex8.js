var express = require('express')
var fs = require('fs')
var app = express()

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        // No need to do data.toString() beacuse JSON.parse can handle objects
        res.json(JSON.parse(data))
    })
})

app.listen(process.argv[2])



