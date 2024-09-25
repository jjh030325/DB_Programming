const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

arr = ["abc", "aaa", "bbb"];

arr.splice(1, 1);

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

function menu()
{
    rl.question("명령어를 입력하시오 : ", (a)=> {
        const [a1, a2] = a.split(" ");
        
        if(a1 == "exit")
        {
            rl.close();
            return;
        }else if(a1 == "add")
        {
            arr.push(a2);
        }else if(a1 == "view")
        {
            for(var i=0;i<arr.length;i++)
            {
                console.log(arr[i]);
            }
        }
        else if(a1 == "delete")
        {
            arr.pop();
        }
        menu();
    });
}

menu();