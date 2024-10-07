const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

arr = [];

function printMenu(){
    console.log("1. 조회");
    console.log("2. 추가");
    console.log("3. 삭제");
}

function askQuestion(query) {
    return new Promise((resolve)=>{
        rl.question(query, resolve);
    });
}

async function askInput() {
    printMenu();
    var input = await askQuestion("입력 : ");

    if(input == 'exit')
    {
        rl.close();
    }else if(input == 1)
    {
        //조회
        if(arr.length == 0)
        {
            console.log("없음");
        }else{
            for(var i = 0; i < arr.length; i++)
            {
                console.log(arr[i]);
            }
        }
    }else if(input == 2)
    {
        //추가
        var word = await askQuestion("단어 : ");
        arr.push(word);
    }else if(input == 3)
    {
        //삭제
        arr.pop();
    }
    await askInput();
}

askInput();