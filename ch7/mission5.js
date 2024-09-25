const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

arr = [];

function menu()
{
    rl.question("명령어를 입력하시오 : ", (a)=> {
        const [a1, a2] = a.split(" ");
        if(a1=="delete")
        {
            if(arr.indexOf(a2) != -1)
            {
                arr.splice(arr.indexOf(a2), 1);
            }
        }else if(a1=="view")
        {
            for(var i = 0; i < arr.length; i++)
            {
                console.log(arr[i]);
            }
        }else if(a1=="add"){
            arr.push(a2);
        }else if(a1=="exit")
        {
            rl.close();
            return;
        }
        menu();
    });
}

menu();