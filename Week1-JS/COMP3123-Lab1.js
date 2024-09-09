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

console.log("Exercise 1:")
console.log(capitalizeWords("hi i am trying to capitalize every first letter of each word"));

//Exercise 2
//Write a JavaScript program to find the largest of three given integers.

function max(int1, int2, int3) {
    return Math.max(int1, int2, int3);
}

console.log("Exercise 2:");
console.log("The highest integer between (" + 1000, 510, 440 + ") is " + max(1000, 510, 440));

//Exercise 3
//Write a JavaScript program to move the last three characters of a string to the start.

function moveLastThreeToStart(str) {

    let lastThree = str.slice(-3);
    let remaining = str.slice(0, -3);
    return lastThree + remaining;
}

console.log("Exercise 3:");
console.log(moveLastThreeToStart("William"));

//Exercise 4
//Write a JavaScript program to find the types of a given angle.

function angleType(int) {
    if (int < 90) {
        return "Acute angle";
    } else if (int === 90) {
        return "Right angle";
    } else if (int < 180) {
        return "Obtuse angle";
    } else if (int === 180) {
        return "Straight angle";
    }
}

let angle1 = 48;
let angle2 = 90;
let angle3 = 136;
let angle4 = 180;

console.log("Exercise 4:");
console.log(angle1 + " degrees is a(n) " + angleType(angle1));
console.log(angle2 + " degrees is a(n) " + angleType(angle2));
console.log(angle3 + " degrees is a(n) " + angleType(angle3));
console.log(angle4 + " degrees is a(n) " + angleType(angle4));

