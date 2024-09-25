const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function input()
{
    rl.question("? ", (a)=>{
        const [a1, a2] = a.split(/[\+\-\*\/]+/);
        
        if(a.indexOf("+")!=-1)
        {
            console.log(parseInt(a1)+parseInt(a2));
        }else if(a.indexOf("-")!=-1)
        {
            console.log(parseInt(a1)-parseInt(a2));
        }else if(a.indexOf("*")!=-1)
        {
            console.log(parseInt(a1)*parseInt(a2));
        }else if(a.indexOf("/")!=-1)
        {
            if(parseInt(a2)==0)
            {
                console.log("0으로 나눌 수 없습니다.");
            }else{
                console.log(parseInt(a1)/parseInt(a2));
            }
        }
        
        input();
    })
}
input();