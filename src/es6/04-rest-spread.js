// array destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, b);

// object destructuring

let user = { username: 'Oscar', age: 34 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);

// spread operator

let person = { name: 'Oscar', age: 28 };
let country = 'RU';
let data = { ...person, country };
console.log(data);

function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
}, json2 = {
    age: 12,
    color: "Blanco"
}) {
    return { ...json1, ...json2 };
}

console.log(solution({lolo: 'pato'}));
console.log(solution(undefined, {lala: 'volador'}));
console.log(solution(null, {lala: 'volador'}));
console.log(solution());

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values.reduce((prev, cur) => prev + cur));
}

sum(2, 3, 4, 5);