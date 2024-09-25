const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

arr = [];
set = 2;

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
            if(arr.length >= set)
            {
                console.log("최대갯수를 초과하였습니다.");
            }else{
                arr.push(a2);
            }
        }else if(a1=="exit")
        {
            rl.close();
            return;
        }else if(a1=="set")
        {
            set = parseInt(a2);
        }
        menu();
    });
}

menu();