const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://@127.0.0.1:27017/TodoApp', ( err, db ) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, results) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'Itzik kedar',
    //     age: 35,
    //     location: 'Tel aviv'
    // }, (err, results) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(results.ops[0]._id.getTimestamp()));
    // });
    db.close();
});