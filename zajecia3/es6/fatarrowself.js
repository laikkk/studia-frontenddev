// let family = {

//     persons: ['Bolek', 'Lolek', 'Tola'],
//     lastName: 'Kovalsky',
//     sayHello: function() {
//         var self = this;
//         return this.persons.map(function(person) {
//             return person + " " + self.lastName
//         });
//     }
// }

// console.log(family.sayHello());


let family = {

    persons: ['Bolek', 'Lolek', 'Tola'],
    lastName: 'Kovalsky',
    sayHello: function() {
        return this.persons.map((person) =>  person + " " + this.lastName); // w fat arrows this jest z automatu przekazane
    }
}

console.log(family.sayHello());

var kamil = "Kamil"

console.log('name ${kamil}')
console.log(`name ${kamil}`) // tylko z ` dzial $ {}
console.log("name ${kamil}")