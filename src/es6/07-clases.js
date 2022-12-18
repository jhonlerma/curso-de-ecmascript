// class User{};

// const newUser = new User();

class User{
    greeting(){
        return 'hello';
    }
}

const newUser = new User();
console.log(newUser.greeting());

class User2{
    constructor(){
        console.log('nuevo usuario 2');
    }
    greeting(){
        return 'hello';
    }
}

const newUser2 = new User2();
console.log(newUser2.greeting());

// this

class User3{
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} mi nombre es: ${this.name}`
    }
}

const newUser3 = new User3('Jhon');

console.log(newUser3.greeting());


// setters getters

class User4{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} mi nombre es: ${this.name}`
    }

    get getAge(){
        return this.age;
    }

    set setAge(newAge){
        this.age = newAge;
    }
}

const newUser4 = new User4('Jhon',  34);

console.log(newUser4.getAge);
console.log(newUser4.setAge = 54);
