//COMP 3123 - Lab 1
//William Cham - 101381972

//Exercise 1
//Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeWords(str) {

    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

let inputString = "hi i am trying to capitalize every first letter of each word";
let capitalize = capitalizeWords(inputString);
console.log("Exercise 1:")
console.log(capitalize);

//Exercise 2
//Write a JavaScript program to fin the largest of three given integers

function max(int1, int2, int3) {
    return Math.max(int1, int2, int3);
}

let maxInt = max(1000, 510, 440);
console.log("Exercise 2:");
console.log(maxInt);

