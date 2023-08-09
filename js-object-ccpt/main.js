const std = { name: 'Hasan', job: 'freelanchar' };
console.log(std.name);

const obj = new Object();
console.log(obj);


// 3.
const human = Object.create(std);
console.log(human.name);


class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    };
};

const result = new people('Hasan', 12);
console.log(result);