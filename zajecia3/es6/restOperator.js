// rest operator
function printArgs(prefix,suffix, ...args) {
    console.log(prefix);
    console.log(suffix);
    args.forEach(arg => console.log(arg));
}

printArgs('raz', 'dwa', 3, 'cztery')

// spread opperator
var tab = [1, 2, 3];

function add(x, y, z) { return x + y + z }

console.log(add(tab)) //undefinde 
console.log(add.apply(null, tab)) 
console.log(add(...tab)) // tu uzycie spread operator