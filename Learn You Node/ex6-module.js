var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) callback(err)
        else callback(null, files.filter(function(f) {
            return path.extname(f) === '.' + ext
        }))
    })
}
