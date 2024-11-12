var mysql = require('mysql2');
const express = require('express');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alchivepw",
    database: "exam"
});

conn.connect();

const app = express();

app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중 ... ")
});

app.get('/list', (req, res) => {
    const { author, title, isbn } = req.query;

    console.log(author);
    console.log(title);

    var query = '';
    if(author === undefined && title === undefined && isbn !== undefined)
    {
        query = `select * from book where isbn like '${isbn}%'`;
    }
    else if(author !== undefined && title === undefined && isbn === undefined)
    {
        query = `select * from book where author like '${author}%'`;
    }
    else if(author === undefined && title !== undefined && isbn === undefined)
    {
        query = `select * from book where title like '${title}%'`;
    }
    
    conn.query(query, (err, result) => {
        if(err) {
            console.log(err);
            throw err;
        }

        res.send(result);
    });
})

app.get('/rentallist', (req, res) => {
    const { notreturned = 'false', onlycount = 'false' } = req.query;

    if(notreturned == 'true')
    {
        var query1 = `select rental_id, title, rental_date, return_date, 
                        rental.rental_user_id, rental_user_name from rental 
                        left join book on rental.book_id = book.book_id
                        left join rental_user on rental.rental_user_id = rental_user.rental_user_id
                        where return_date is null`;
        var query2 = `select count(rental_id) as NotReturnedCount from rental 
                        left join book on rental.book_id = book.book_id
                        left join rental_user on rental.rental_user_id = rental_user.rental_user_id
                        where return_date is null`;

        conn.query(onlycount == 'true' ? query2 : query1, (err, result) => {
            if(err) {
                console.log(err);
                throw err;
            }

            res.send(result);            
        });
    }
})

app.get('/rental', (req, res) => {
    const { book_id, rental_user_id } = req.query;

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const yyyymmdd = `${year}-${month}-${day}`;

    var query1 = `insert into rental values (0, ${book_id}, '${yyyymmdd}', null, ${rental_user_id})`;
    conn.query(query1, (err, result) => {
        if(err) {
            console.log(err);
            throw err;
        }

        res.send(result);
    });
})

app.get('/return', (req, res) => {
    const { rental_id } = req.query;

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const yyyymmdd = `${year}-${month}-${day}`;

    var query1 = `update rental set return_date = '${yyyymmdd}' where rental_id = ${rental_id}`;
    conn.query(query1, (err, result) => {
        if(err) {
            console.log(err);
            throw err;
        }

        res.send(result);
    })
});

app.get('/delaylist', (req, res) => {
    const { date } = req.query;

    // 입력된 date의 연, 월, 일 추출 및 정수 변환
    const inputYear = parseInt(date.slice(0, 4), 10);
    const inputMonth = parseInt(date.slice(4, 6), 10);
    const inputDay = parseInt(date.slice(6, 8), 10);

    const query = `SELECT * FROM rental where return_date IS null`;

    // 각 월의 일수를 정의하고 윤년을 고려하여 계산하는 함수
    const daysInMonth = (year, month) => {
        const monthDays = [31, (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return monthDays[month - 1];
    };

    conn.query(query, (err, results) => {
        if (err) {
            console.log(err);
            throw err;
        }

        const overdueRentals = results.filter(rental => {
            // rental_date를 연, 월, 일로 분리 후 정수 변환
            const rentalYear = parseInt(rental.rental_date.slice(0, 4), 10);
            const rentalMonth = parseInt(rental.rental_date.slice(5, 7), 10);
            const rentalDay = parseInt(rental.rental_date.slice(8, 10), 10);

            // 일수 차이를 계산하기 위한 변수
            let totalDaysDifference = 0;

            // 년도 차이를 일수로 변환
            for (let y = rentalYear; y < inputYear; y++) {
                totalDaysDifference += (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 366 : 365;
            }

            // 월 차이를 일수로 변환
            for (let m = rentalMonth; m < inputMonth; m++) {
                totalDaysDifference += daysInMonth(inputYear, m);
            }

            // 일 차이를 일수로 변환
            totalDaysDifference += inputDay - rentalDay;

            // 연체 여부 확인
            return totalDaysDifference > 7;
        });

        res.send(overdueRentals);
    });
});


app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})
app.get('/getPost', function(req, res){
    const {title} = req.query;
    var query1 = `select * from post where title = '${title}'`;

    conn.query(query1, (err,rows, fields) =>
    {
        if(err) throw err;
        res.send(rows);    
    });    
})
