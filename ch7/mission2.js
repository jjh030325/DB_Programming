const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

arr = [];
console.log("(delete 입력시 삭제, view 입력시 모든 데이터 조회)");

function menu()
{
    rl.question("추가할 데이터를 입력하시오 : ", (a)=> {
        if(a=="delete")
        {
            arr.pop();
        }else if(a=="view")
        {
            for(var i = 0; i < arr.length; i++)
            {
                console.log(arr[i]);
            }
        }else{
            arr.push(a);
        }
        menu();
    });
}

menu();