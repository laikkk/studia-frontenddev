function sayHello(person) {
    console.log('Hi ' + person.imie);
}
sayHello({ imie: 'Zdzis' });
class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    sayHi() {
        return `Say hello, I'm ${this.imie}`;
    }
}
let student = new Student('Jan', 'Kowalski');
sayHello(student);
console.log(student.sayHi());
//////
let add = function (a, b) { return a + b; };
let add2 = (a, b) => a + b;
