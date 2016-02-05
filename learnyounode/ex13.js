var http = require('http')
var url = require('url')

http.createServer(function(request, response) {
    var requestJSON = url.parse(request.url, true);
    var d = new Date(requestJSON.query.iso);
    var res

    if (requestJSON.pathname === '/api/parsetime')
        res = {'hour': d.getHours(), 'minute': d.getMinutes(), 'second': d.getSeconds()}
    else if (requestJSON.pathname === '/api/unixtime')
        res = {'unixtime': d.getTime()}

    if (res) {
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(res))
    } else {
        response.writeHead(404)
        response.end()
    }
}).listen(process.argv[2])
