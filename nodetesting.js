var net = require('net')
var fs = require('fs')

net.createServer(function(socket) {
    fs.readFile('index-react.html', function(err, data) {
        socket.end(data)
    })
}).listen(process.argv[2])
