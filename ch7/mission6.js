const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var max = -2;
var min = 99999;

function input()
{
    rl.question("? ", (a)=>{
        if(a==-1)
        {
            console.log("max : " + max);
            console.log("min : " + min);
            rl.close();
            return;
        }
        if(max < a)
        {
            max = a;
        }
        if(min > a)
        {
            min = a;
        }
        input();
    })
}
input();