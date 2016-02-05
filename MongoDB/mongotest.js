var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
var assert = require('assert')
var url = 'mongodb://localhost:27017/testa'

function insertDocument(db, callback) {
    db.collection('restaurants').insertOne({
        "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [ {
            "date" : new Date("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : new Date("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
    }, function(err, result) {
        assert.equal(err, null)
        console.log('Inserted document.')
        callback(result)
    })
}

function findDocuments(db, callback) {
    var cursor = db.collection('restaurants').find({$or: [{'cuisine': 'Italian'}, {'address': '10075'}]})
        .sort({'borough': 1})
    var count = 0
    cursor.forEach(function(doc) {
        count++
    }, function(err) {
        assert.equal(err, null)
        console.log(count)
        callback()
    })
}

function updateDocuments(db, callback) {
    db.collection('restaurants').updateOne(
        {'name': 'Juni'},
        {$set: {'cuisine': 'American (New)'},
         $currentDate: {'lastModified': true}
        }, function(err, results) {
            console.log(results)
            callback()
    })
}

function deleteDocuments(db, callback) {
    db.collection('restaurants').deleteMany(
        {'borough': 'Manhattan'},
        function(err, results) {
            console.log(results)
            callback()
        })
}

function aggregateDocuments(db, callback) {
    db.collection('restaurants').aggregate(
        [{$match: {'borough': 'Queens', 'cuisine': 'Brazilian'}},
         {$group: {'_id': '$address.zipcode', 'count': {$sum: 1}}}],
        function(err, results) {
            assert.equal(err, null)
            console.log(results)
            callback()
        })
}

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err)
    console.log('Connected to server.')
    db.collection('restaurants').aggregate([], function(err, results) {
        assert.equal(err, null)
        console.log(JSON.stringify(results, null, 4))
        db.close()
    })
    // insertDocument(db, function() {
    //     db.close()
    // })
})
