let str = 'aadsdjkcskldjdjjwsaaaaad';
let char ='';
let num = 0;

str = str.split("").sort().join("")

let re = /(\w)\1+/g;
str.replace(re, ($0, $1) => {
    if(num < $0.length) {
        num = $0.length;
        char = $1;
    }
})
