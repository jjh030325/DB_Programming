const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

arr = [];

function menu()
{
    console.log("1. 추가");
    console.log("2. 삭제");
    console.log("3. 조회");

    rl.question("입력 : ", (a)=> {
        if(a=="1")
        {
            rl.question("데이터를 입력하시오 : ", (b)=> {
                arr.push(b);
                menu();
            })
        }else if(a=="2")
        {
            arr.pop();
            menu();
        }else if(a=="3")
        {
            for(var i = 0; i < arr.length; i++)
            {
                console.log(arr[i]);
            }
            menu();
        }else{
            rl.close();
        }
    });
}

menu();