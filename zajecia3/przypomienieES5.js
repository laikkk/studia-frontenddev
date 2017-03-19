var Person = (function(){
    // konstruktor
    function Person(imie) {
        this.imie = imie;
    }

    Person.prototype.sayHello = function() {
        return 'Hello ' + this.imie;
    }

    return Person;
})()

var jan = new Person('Jan');
console.log(jan.sayHello())