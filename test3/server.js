const express = require("express");
const mysql = require("mysql2");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alchivepw",
  database: "myboard",
})

const app = express();
app.listen(8080, function(){
  console.log("포트 8080으로 서버 대기중 ...")
});
conn.connect();

//body-parser 라이브러리 추가
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/list", function (req, res) {
  var query = `select * from posts`;
  
  conn.query(query, (err, result) => {
    res.render('list.ejs',{data : result});
  })
});

app.get('/enter', function(req, res){
  res.render('enter.ejs');
});

app.post('/save', function(req, res){
  title = req.body.title;
  content = req.body.content;
  date = req.body.someDate

  var query = `insert into posts (title, content, date) values ('${title}', '${content}', '${date}')`;

  conn.query(query, [title, content, date], (err, result) => {
    if(err) {
      console.log(err);
      throw err;
    }
    res.send(result);
  });
  console.log("저장완료");
});
