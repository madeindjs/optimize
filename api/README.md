# Optimize API

require('mongodb').MongoClient.connect('mongodb://optimize:toor@db:27017/optimize').then(c => c.db('optimize').collection('config').findOne({})).catch(e => console.error(e)).then(r => console.log(r))