const array = [1, 1, 2, 3, 4, [0, 0, 0, [1, 1, 1]]];
console.log(array.flat(3));

const array2 = [1, 2, 1, 2, 1];
console.log(array2.flatMap(value => [value, value * 2]));