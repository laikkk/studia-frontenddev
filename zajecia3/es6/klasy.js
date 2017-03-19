class Person {
    constructor(imie) {
        this.imie = imie;
    }

    sayHello() {
        console.log('Hello ' + this.imie);
    }
}

let janek = new Person('Janek');
janek.sayHello();
