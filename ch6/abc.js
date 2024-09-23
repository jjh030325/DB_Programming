var arr = ["abc", "aaa", "ddd"]

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

for(var i = 0; i < arr.length; i++)
{
    console.log((i+1) + ". " + arr[i]);
}

rl.question("바꾸고자 하는 문자열은? ", function(num){
    rl.question("문자열을 입력하시오 : ", function(str){
        arr[num-1] = str;
        for(var i = 0; i < arr.length; i++)
        {
            console.log((i+1) + ". " + arr[i]);
        }
        rl.close();
    })
});