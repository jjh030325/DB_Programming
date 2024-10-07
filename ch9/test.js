const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(query) {
    return new Promise((resolve)=>{
        rl.question(query, resolve);
    });
}

async function askInput() {
    var input = await askQuestion("단어를 입력하세요 (종료 : exit) : ");
    if(input == 'exit')
    {
        rl.close();
    }else
    {
        await askInput();
    }
}

askInput();