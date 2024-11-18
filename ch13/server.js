const express = require("express");
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

app.listen(8080, function(){
  console.log("포트 8080으로 서버 대기중 ...")
});
conn.connect();

app.get("/enter", function(req, res){
  res.sendFile(__dirname + '/index.html');
})

app.post("/save", function(req, res){
  var title = req.body.title;
  var context = req.body.context;

  var query = 'insert title, context from book';

  conn.query(query, (err, result) => {
    if(err) {
        console.log(err);
        throw err;
    }

    res.send(result);
});
  console.log("저장완료");
});