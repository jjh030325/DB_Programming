const pro1 = pid => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(pid == "jamsuham"){
                resolve('pro1 success');
            }else{
                reject('pro1 fail');
            }
        }, 1000);
    });
}

const pro2 = ppw=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(ppw == '1111') {
                resolve('pro2 success');
            }else{
                reject('pro2 fail');
            }
        }, 1000);
    });
}

const id = 'jamsuham';
const pw = '1111';

pro1(id).
then(result=>{
    console.log('result1', result);
    return pro2(pw);
})
.then(result=>{
    console.log('result2', result);
})
.catch(err=>{
    console.log('err', err);
    return Promise.reject(err);
})