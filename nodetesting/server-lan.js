var express = require('express')
var app = express()

app.use(express.static('/home/moderator/Desktop/Web/React Tutorial/public'))

app.listen(process.argv[2])

