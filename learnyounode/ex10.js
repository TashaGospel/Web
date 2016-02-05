var net = require('net')
var util = require('util')

function zeroFill(d) {
    return (d < 10 ? '0' : '') + d
}

function currentDateString() {
    var d = new Date()
    var nonYears = [];
    var year = d.getFullYear().toString()
    nonYears.push(d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds())
    nonYears = nonYears.map(zeroFill)
    nonYears.unshift("%s-%s-%s %s:%s:%s", year)
    return (util.format.apply(this, nonYears))
}

net.createServer(function(socket) {
    setInterval(function() {socket.write(currentDateString() + '\n')}, 500)
}).listen(Number(process.argv[2]))
