const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("프로그램 언어 이름을 입력하시오. : ", function(data){
    console.log("가장 좋아하는 프로그래밍 언어는 " + data + "입니다.");
    r1.close();
});