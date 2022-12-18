const user = {username: 'asdf', age: 34, country: 'co'};
const {username, ...values} = user;

console.log(username, values);