exports.add = function add(a, b) {
    return a+b;
}

exports.subtract = function subtract(a, b) {
    return a-b;
}

exports.multiply = function multiply(a, b) {
    return a*b;
}

exports.divide = (a, b) => {
    return a/b;
}
/*const divide = (a, b) => {
    a/b;
}*/

//You can also export it like this:
/*module.exports = {
    add,
    subtract,
    multiply,
    divide

}*/