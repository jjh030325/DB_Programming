const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

arr = [];

function menu()
{
    rl.question("? ", (a)=> {
        const [a1, a2] = a.split(" ");
        if(a1=="remove")
        {
            if(arr.indexOf(a2) != -1)
            {
                arr.splice(arr.indexOf(a2), 1);
            }
            for(var i = 0; i < arr.length; i++)
            {
                console.log(arr[i]);
            }
        }else if(a1=="add")
        {
            arr.push(a2);
            for(var i = 0; i < arr.length; i++)
            {
                console.log(arr[i]);
            }
        }else if(a1=="sum")
        {
            var sum = 0;
            for(var i = 0; i < arr.length; i++)
            {
                sum += parseInt(arr[i]);
            }
            console.log(sum);
        }else if(a1=="avg")
        {
            var avg = 0;
            for(var i = 0; i < arr.length; i++)
            {
                avg += parseInt(arr[i]);
            }
            avg = avg/arr.length;
            console.log(avg);
        }
        else if(a1=="exit")
        {
            rl.close();
            return;
        }
        menu();
    });
}

menu();