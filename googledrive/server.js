const express = require('express');
var mysql = require('mysql2');

var conn = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "alchivepw",
    database: "myboard"
});
conn.connect();

const app = express();

app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중 ... ")
});
app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})
app.get('/', function(req, res){
    const {title} = req.query;
    var query1 = `select * from post_bk where title = '${title}'`;

    conn.query(query1, (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(rows);
    });

})