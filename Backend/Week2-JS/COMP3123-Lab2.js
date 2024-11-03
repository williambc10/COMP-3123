//COMP 3123 - Lab 2
//William Cham - 101381972

//Exercise 1
//Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of

const greeter = (myArray, counter) => {
    const greetText = 'Hello';
    for (const item of myArray) {
        console.log(`${greetText} ${item}`);
    }
}


console.log("\n");

console.log("Exercise 1:")
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

console.log("\n");

//Exercise 2
//Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string.

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("").toLowerCase();

console.log("Exercise 2:")
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

console.log("\n");

//Exercise 3
//Using array.proto.map create function to use the capitalize method in Exercise 2 to upper 
//case the first character of each Color in the following array..

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));

console.log("Exercise 3:")
console.log(capitalizedColors);

console.log("\n");

//Exercise 4
//Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty.

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log("Exercise 4:");
console.log(`Between ${values}, the values under 20 are:`)
console.log(filterLessThan20);

console.log("\n");

//Exercise 5
//Using array.proto.reduce create calculate the sum and product of a given array.

const array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, value) => sum + value, 0);
const calculateProduct = array.reduce((product, value) => product * value, 1);

console.log("Exercise 5:")
console.log(`The sum of 1, 2, 3, and 4 is: ${calculateSum}`);
console.log(`The product of 1, 2, 3, and 4 is: ${calculateProduct}`);

console.log("\n");

//Exercise 6
//Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class. 
//The parameters for the Car class is the model and year. The parameters for the subclass is the model, year and balance.
//Use the super key word in the Sedan subclass to set the model and name in base Car constructor.

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    info() {
        return `Model: ${this.model} Engine: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info2() {
        return `${this.model} w/ a ${this.year} engine has a balance of $${this.balance}`;
    }
}

console.log("Exercise 6:")
const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.info());

const sedan = new Sedan("Volvo SD", 2012, 30000);
console.log(sedan.info2());

console.log("\n");