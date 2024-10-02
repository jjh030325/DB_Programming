const arr1 = ['C#', 'javascript'];
const arr2 = ['python', 'react', 'C++'];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

let user = {
    id : 'jamsuham',
    pw : '1234',
    name : '잠수함',
    age : 30,
};

let {id, ...rest} = user;

console.log(id);
console.log(rest.pw);
console.log(rest.name);
console.log(rest.age);