//Global Object
//global.a = 100

var module1 = require('./module1.js');
var arithModule = require('./calc.js');

console.log(module1);
console.log(module);
console.log(module1.greet());
console.log(module1.name);
console.log(module1.age);
console.log(module1.course);

console.log(arithModule.add(2, 5));
console.log(arithModule.subtract(10, 5));
console.log(arithModule.multiply(2, 5));
console.log(arithModule.divide(2, 5));

console.log(global.a);
console.log(global.b);


console.log(__dirname); // console is the object, log is the print action the object is doing
console.log(__filename);

//console.log(console);

/*// setTimeout
setTimeout(() => {
    console.log('Hello World');
}, 3000);

// setInterval
setInterval(() => {
    console.log('Hello World 2');
}, 2000)*/

//console.log(global)

//*? Global vs Module vs Library in JS