interface Person {
    readonly imie: string;
    nazwisko?: string;
}

function sayHello(person: Person) {
    console.log('Hi ' + person.imie);
}

sayHello({ imie: 'Zdzis' })

class Student {
    constructor(public imie: string, public nazwisko: string) { }

    sayHi() {
        return `Say hello, I'm ${this.imie}`
    }
}

let student = new Student('Jan', 'Kowalski')
sayHello(student);
console.log(student.sayHi())

//////

let add: (first: number, second: number) => number = function (a: number, b: number): number { return a + b; }
let add2 = (a: number, b: number) => a + b