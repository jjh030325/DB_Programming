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
app.get('/getuser', function(req, res){
    const {title} = req.query;
    var query1 = `select * from post_bk where title = '${title}'`;

    conn.query(query1, (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(rows);
    });
})
app.get('/deleteuser', function(req, res){
    const {title} = req.query;
    var query1 = `delete from post_bk where title = '${title}'`;

    conn.query(query1, [title], (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(`'${title}'삭제되었습니다.`);
    });
})
app.get('/adduser', function(req, res){
    const {title, content, writer, email} = req.query;
    var query1 = `INSERT INTO post_bk (title, content, created, writer, email) VALUES ('${title}', '${content}', now(), '${writer}', '${email}')`;

    conn.query(query1, [title, content, writer, email], (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(`'${title}','${content}','${writer}','${email}' 추가되었습니다.`);
    });
})
app.get('/updateuser', function(req, res){
    const {title, content, writer, email} = req.query;
    var query1 = `update post_bk set title='${title}', content='${content}', created=now(), writer='${writer}', email='${email}' where title='${title}'`;

    conn.query(query1, [title, content, writer, email], (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(`'${title}'의 데이터가 '${content}','${writer}','${email}'로 변경되었습니다.`);
    });
})
