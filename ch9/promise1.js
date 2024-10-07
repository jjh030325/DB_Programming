function pro1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('pro1 success');
        }, 1000);
    });
}

function pro2(){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve('pro2 success');
        }, 1000);
    });
}

pro1().
then(function(result) {
    console.log('result1', result);
    return pro2();
})
.then(function(result){
    console.log('result2', result);
})