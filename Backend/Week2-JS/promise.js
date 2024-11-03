/*function makePromise(completed) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (completed) {
                resolve("I have completed learning JS.");
            }
            else {
                reject("I haven't completed learning JS yet.");
            }
        }, 3 * 1000); // this is part of setTimeout
    }); // this is part of new Promise
}*/

var p1 = new Promise((resolve, reject) => { // we can name the states however, as long as it's "Promise(fulfilled(positive), failed(negative))"*?
    resolve('Success!');
})

p1.then(() => { 
    console.log('Success');
}, () => {
    console.log('Failure');
}) // structure is promise.then(success, failure)


p1.then((result) => {  // saves the answer of the promise into the result*?
    console.log(result);
}, () => {
    console.log('Failure');
}) // structure is promise.then(success, failure)

var a = 100;
//var a = 99;

var p2 = new Promise((resolve, reject) => {
    if(a == 100) {
        resolve("You got a 100!");
    } else {
        reject("Gotta work harder...");
    }
})

p2.then((ace) => {
    console.log(ace);
}, (fail) => {
    console.log(fail);
})

// You can also pass the promise function with objects
var b = 100;
//var b = 99;

var p3 = new Promise((resolve, reject) => {
    if(b == 100) {
        var r = {
            status: true,
            message: "You got a 100!"
        }
        resolve(r);
    } else {
        reject("Gotta work harder...");
    }
})

p3.then((ace) => {
    console.log(ace);
}, (fail) => {
    console.log(fail);
})

var c = 100;
//var c = 99;

function makePromise(c)  {
    var p4 = new Promise((resolve, reject) => {
        if(c == 100) {
            var r = {
                status: true,
                message: "You got a 100!"
            }
            resolve(r);
        } else {
            reject("Gotta work harder...");
        }
    })
    return p4;
}

makePromise(100).then((ace) => {  // you can also include the parameter instead of calling the p4 class*?
    console.log(ace);
}, (fail) => {
    console.log(fail);
})

makePromise(20).then((ace) => {
    console.log(ace);
}).catch((fail) => {
    console.log(fail);
}).finally(() => {
    console.log('Finally');
})

/*var api = fetch('https://jsonplaceholder.typicode.com/posts')
api.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).then((data) => {
    console.log(data);
})*/
