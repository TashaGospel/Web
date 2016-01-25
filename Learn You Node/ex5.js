var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(err, files) {
    files.forEach(function(f) {
        if (path.extname(f) === '.' + process.argv[3])
            console.log(f)
    })
})
