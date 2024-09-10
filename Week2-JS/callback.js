var add = function (a, b) {
    return a+b;
}

var sub = function (a, b) {
    return a-b;
}

//Callback function
var makeACall = function (a, b, add, sub) {
    if(a>b)
        return sub(a, b);
    else 
        return add(a, b);
}

var result1 = makeACall(5, 3, add, sub);
var result2 = makeACall(2, 3, add, sub);
var result3 = makeACall(8, 3, add, sub);
var result4 = makeACall(3, 3, add, sub);
var result5 = makeACall(9, 3, add, sub);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

//Promises
//First method
var print = function () {
    console.log("Hello");
}
setInterval(print, 1000); //prints "Hello" in intervals of 1

//Second method
setInterval(() => {
    console.log("Hello2"); //prints "Hello2" in intervals of 2
}, 2000) 

// !!press ctrl-c to exit from the interval!!