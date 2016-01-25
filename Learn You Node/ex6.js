var mymodule = require('./ex6-module.js')

mymodule(process.argv[2], process.argv[3], function(err, files) {
    if (!err) files.forEach(function(f) {
        console.log(f)
    })
})
