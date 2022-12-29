//=============== Explicit type ===================//

//variable
let a: string;
a = 'string';

//array
let d: string[] = []
d.push('tauhid')

//object
let e: {
    name: string,
    age: string,
    country: string
}

e = {
    name: 'tauhid',
    age: '27',
    country: 'bangladesh'
}


//=============== Union type ===================//

let c: string | number;
c = 'string';
c = 5;

let b: (number | string)[] = [];

