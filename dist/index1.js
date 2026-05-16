"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 5;
let b = "hello";
let c = true;
let d = undefined;
let aa = [1, 2, 3];
let bb = ["hello", "world"];
let cc = [true, false];
let dd = [undefined, undefined];
let aaa = [1, "hello", true];
let aaaa = { name: "John", age: 30 };
let aaaaa = 1;
aaaaa = "hello";
aaaaa = true;
aaaaa = undefined;
let aaaaaa = [1, "hello", true, undefined];
let aaaaaaa = [1, "hello", true, undefined];
function check() {
    if (typeof aaaaa === "number") {
        console.log("aaaaa is a number");
    }
    else if (typeof aaaaa === "string") {
        console.log("aaaaa is a string");
    }
    else if (typeof aaaaa === "boolean") {
        console.log("aaaaa is a boolean");
    }
    else if (typeof aaaaa === "undefined") {
        console.log("aaaaa is undefined");
    }
}
const aaaaaaaa = {
    name: "Alice",
    age: 25,
    isStudent: false
};
const bbbbbbbb = {
    name: "Bob",
    age: 30,
    isStudent: true
};
bbbbbbbb.name = "Alice";
// @ts-ignore
bbbbbbbb.name = "Tom"; // Error: Type '"Tom"' is not assignable to type '"Bob" | "Alice"'
const aaaaaaaaa = [];
aaaaaaaaa.push(1);
aaaaaaaaa.push("hello");
aaaaaaaaa.push(true);
aaaaaaaaa.push(undefined);
console.log(aaaaaaaa);
