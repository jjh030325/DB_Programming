const express = require("express");
const mongoClient = require('mongodb').MongoClient;
var mydb;

const url = 'mongodb+srv://wpqlks7:rSYXjxiAdsmn2D4D@myboard.9qhlg.mongodb.net/';
mongoClient.connect(url)
  .then(client=> {
  console.log('몽고DB 접속 성공');
  mydb = client.db('myboard');
});

const mysql = require("mysql2");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alchivepw",
  database: "myboard",
})

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.listen(8080, function(){
  console.log("포트 8080으로 서버 대기중 ...")
});
//conn.connect();

app.get("/enter", function(req, res){
  //res.sendFile(__dirname + '/index.html');
  res.render('enter.ejs');
})

app.post("/delete", (req, res) => {
  console.log(req.body);
  console.log('삭제완료');
})

app.get("/list", function(req, res){
  mydb.collection('post').find().toArray().then( result => {
    //console.log(result);
    res.render('list.ejs', {data : result});
  });
});

app.post("/save", function(req, res){
  mydb.collection('post').insertOne(
    {
      title : req.body.title, 
      content : req.body.content,
      date : req.body.someDate
    }
  ).then(result=> {
    console.log(result);
    console.log('데이터 추가 성공');
  });
})

/*
app.post("/save", function(req, res){
  var title = req.body.title;
  var content = req.body.content;

  console.log(title);
  console.log(content);

  var query = `insert into posts (title, content) values ('${title}', '${content}')`;

  conn.query(query, [title, content], (err, result) => {
    if(err) {
      console.log(err);
      throw err;
    }
    res.send(result);
  });
  console.log("저장완료");
});
*/