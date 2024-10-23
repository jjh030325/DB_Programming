const express = require('express');
var mysql = require('mysql2');

var conn = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "alchivepw",
    database: "test1_db"
});
conn.connect();

const app = express();

app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중 ... ")
});

//저자 성으로 검색 책 목록
app.get('/list', function(req, res){
    const {author} = req.query;
    var query1 = `select book_id, title, author, isbn from book where '${author}' = '${author}'`;

    conn.query(query1, (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(rows);
    });
})

//빌린 책 목록
app.get('/rentallist', function(req, res){
    const {notreturned} = req.query;
    var query1 = `select rental_id, title, rental_date, return_date, rental_user_id, rental_user_name from book where notreturned = '${notreturned}'`;

    conn.query(query1, (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(rows);
    });
})

//대출
app.get('/rental', function(req, res){
    const {book_id, rental_user_id} = req.query;
    var query1 = `update book set notreturned=true, rental_user_id='${rental_user_id}', book where book_id = '${book_id}'`;
    //대출 테이블에 추가

    conn.query(query1, (err, rows, fields) =>
    {
        if(err) throw err;
        res.send("OK");
    });
})

//반납
app.get('/return', function(req, res){
    const {rental_id} = req.query;
    var query1 = `update book set notreturned=false where rental_id = '${rental_id}'`;

    conn.query(query1, (err, rows, fields) =>
    {
        if(err) throw err;
        res.send("OK");
    });
})

