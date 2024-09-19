//Global Objects
global.a = 100
global.b = 200

//Local Objects
var name = "William Cham"
var age = 23
var course = "Fullstack Development I"

function greet() {
    return "Hello World 3"
}

/*module.exports = name;
module.exports = age;*/

module.exports = { // will export as Object in the console.log(module)
    name,
    age,
    course,
    greet
}