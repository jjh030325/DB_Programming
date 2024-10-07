function pro1(){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve('pro1 success');
        }, 1000);
    });
}

function test1(){
    pro1().then(function(result){
        console.log(result);
    });
}

async function test2() {
    var result = await pro1();
    console.log(result);
}

test2();