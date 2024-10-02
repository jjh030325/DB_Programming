const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("다이쓰! 무조건 천원, 상품입력?", function(obj) {
    let basket = {
        [obj] : "1000원",
    }
    console.log(basket[obj]);

    rl.close();
});