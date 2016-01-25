var http = require('http')

var s = []
var done = 0

process.argv.slice(2).forEach(function(url, i) {
    http.get(url, function(response) {
        response.setEncoding('utf8')
        response.on('data', function(data) {
            if (s[i] === undefined) s[i] = data
            else s[i] += data
        })
        response.on('end', function() {
            done++
            if (done === process.argv.length - 2)
                s.forEach(function(x) {console.log(x)})
        })
    })
})
