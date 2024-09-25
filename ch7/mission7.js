const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function input()
{
    rl.question("? ", (a)=>{
        const [a1, a2] = a.split(/[+-]+/);
        
        if(a.indexOf("+")!=-1)
        {
            console.log(parseInt(a1)+parseInt(a2));
        }else if(a.indexOf("-")!=-1)
        {
            console.log(parseInt(a1)-parseInt(a2));
        }
        
        input();
    })
}
input();