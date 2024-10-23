const mongoclient = require('mongodb').MongoClient;
const url = "mongodb+srv://wpqlks7:whwnsgus3325@myboard.9qhlg.mongodb.net/?retryWrites=true&w=majority&appName=myboard";

mongoclient
.connect(url)
.then(client=>{
    console.log('몽고DB 접속 성공');
});