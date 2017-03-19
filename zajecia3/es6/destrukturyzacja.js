var person = {
    imie: 'Jan',
    nazwisko: 'Kowal',
    rokUr: 1990,
    sayHello() {
        return 'Jan'
    }
}

function oblicz() { return [1,2,3] }

// destrukturyzacja
var {imie: im, rokUr, sayHello} = person // w sayHello nie dziala this

var {srednia, mediana} = oblicz(); // [srednia, mediana] nawiasy kwadratowe tez moga byc :)

console.log(`${im} urodzony w ${rokUr}`)
console.log(srednia)
console.log(mediana)