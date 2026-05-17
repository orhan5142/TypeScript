"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function F() {
    return 1;
}
// @ts-ignore
const result = F(); // Error: Type 'number' cannot be cast to type 'string'.
function G() {
    return 1;
}
function H() {
    return ["hello", 1];
}
function I() {
    return [1, "hello", true, undefined]; // Type is readonly [1, "hello", true, undefined]
}
function J() {
    // return void; // Error: A function whose declared type is neither 'void' nor 'any' must return a value.
}
const K = J();
function L(name, age, isStudent) {
    console.log({ name, age, isStudent });
}
L("Alice", 25, false);
// @ts-ignore
L("Bob", "30", true); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const M = {
    name: "Alice",
    age: 25,
    isStudent: false
};
const N = [
    {
        name: "Alice",
        age: 25,
        isStudent: false
    },
    {
        name: "Bob",
        surname: "Smith",
        age: 30,
        isStudent: true
    }
];
const O = "red";
// @ts-ignore
const P = "yellow"; // Error: Type '"yellow"' is not assignable to type 'Color'.
const Q = ["red", "green", "blue"];
const R = ["red", "magenta", "cyan"];
const S = "blue";
const T = "yellow";
// @ts-ignore
const U = "black"; // Error: Type '"black"' is not assignable to type 'AllColors'.
const V = {
    make: "Tesla",
    model: "Model X",
    year: 2020,
    fly() {
        console.log("Flying");
    }
};
const W = {
    make: "Terrafugia",
    model: "Transition",
    year: 2021,
    fly() {
        console.log("Flying");
    }
}; // Type assertion to FlyingCar
V.fly(); // Output: Flying
W.fly(); // Output: Flying
const MyMap = new Map();
MyMap.set("one", 1);
MyMap.set("two", 2);
console.log(MyMap.get("two")); // Output: 2
const personMap = new Map();
personMap.set("Alice", { name: "Alice", age: 25, isStudent: false });
personMap.set("Bob", { name: "Bob", age: 30, isStudent: true });
console.log(personMap.get("Alice")); // Output: { name: "Alice", age: 25, isStudent: false }
function LogPerson(parameters) {
    return new Promise((resolve, reject) => {
        resolve(1);
        resolve("hello");
        resolve(true);
        resolve(undefined);
    });
}
LogPerson({
    name: "Alice",
    age: 25,
    isStudent: false
}).then(result => {
    if (typeof result === "number") {
        console.log("Result is a number:", result);
    }
    else if (typeof result === "string") {
        console.log("Result is a string:", result);
    }
    else if (typeof result === "boolean") {
        console.log("Result is a boolean:", result);
    }
    else if (typeof result === "undefined") {
        console.log("Result is undefined");
    }
}).catch(error => {
    console.error("Error:", error);
});
function printing(name, age, isStudent, repeat) {
    for (let i = 0; i < repeat; i++) {
        console.log({ name, age, isStudent });
    }
}
printing("Alice", 25, false, 5);
