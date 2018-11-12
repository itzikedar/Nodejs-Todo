const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://@127.0.0.1:27017/TodoApp', ( err, db ) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5be98867dd71180b4291b61e')
    // }).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Todos').find().count().then( (count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

    // db.close();
});