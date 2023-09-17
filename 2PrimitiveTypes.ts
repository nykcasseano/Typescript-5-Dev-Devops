// JS Types: 
let firstName = 'Nyk';
let isAdmin = false;
let age = 28;

let duties = ['write code', 'fix bugs']

let car =  null;
let bicycle = undefined;

let work = () => {
    console.log('Working...')
}

let salary = 50n;
let logo = Symbol('emerald')

let all = [firstName, isAdmin, age, car, bicycle, work, salary, logo];

for (let item of all){
    console.log(String(item) + 'is ' + typeof item);
    
}

