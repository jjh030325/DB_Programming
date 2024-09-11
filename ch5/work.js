const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("첫번째 값 : ", (a) => {
    var sum = 0;
    sum += parseInt(a);
    r1.question("두번째 값 : ", (b) => {
        sum += parseInt(b);
        console.log("두 수의 합 : " + sum + "입니다.");
        r1.close();
    });
});

