// // Cara lama:

// function greet(name, greeting) {
//     name = typeof name!== "undefined" ? name : "Student";
//     greeting = typeof greeting !== "undefined" ? greeting : "Welcome Dude";

//     return `${greeting} ${name}!`;
// }

// ES6 :
function greet(name = "Student", greeting = "Welcome Dude") {
    return `${greeting} ${name}!`;
}


// Contoh lain:
let Func = (a, b = 10) => a = b;

Func(20); // maka 20 akan masuk ke parameter a
Func(20, 50); //maka semua default parameter akan diganti dengan parameter 20 dan 50

// ARRAY HELPER

// 1. Filter :
// var values = [1, 60, 34, 30, 20, 7];
// function lessThan20(val) {
//     return val < 20;
// }

// var valueLessThan20 = values.filter(lessThan20);
// console.log(valueLessThan20);

// disederhanakan dengan arrow function:
let values = [1, 60, 34, 30, 20, 7];

values = values.filter(val => val < 20);
console.log(values);