// This file is not needed. This is just to learn mongo db.

const {MongoClient, ObjectID} = require('mongodb')

const conntectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(conntectionURL, {useUnifiedTopology: true}, (error, client)=>{
    if (error) {
        return console.log('Unable to connect to database', error)
    }

    const db = client.db(databaseName)

    // db.collection('tasks').deleteOne({
    //     description: 'monash proposal'
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 25
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})