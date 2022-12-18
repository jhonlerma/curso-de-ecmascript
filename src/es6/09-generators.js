function* iterate(array) {
    for (const value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'fulano', 'mengano', 'anna']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* getId() {
    let id = 0;
    let ids = [,];
    for (const idMichi of ids) {
        yield idMichi;
        ids.push(id);
        id += 1;
    }
}
const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);