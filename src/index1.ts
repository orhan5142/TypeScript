let a: number = 5;
let b: string = "hello";
let c: boolean = true;
let d: undefined = undefined;

let aa: number[] = [1, 2, 3];
let bb: string[] = ["hello", "world"];
let cc: boolean[] = [true, false];
let dd: undefined[] = [undefined, undefined];

let aaa: [number, string, boolean] = [1, "hello", true];

let aaaa: { name: string; age: number } = { name: "John", age: 30 };

let aaaaa: number | string | boolean | undefined = 1;
aaaaa = "hello";
aaaaa = true;
aaaaa = undefined;

let aaaaaa: (number | string | boolean | undefined)[] = [1, "hello", true, undefined];

let aaaaaaa: Array<number | string | boolean | undefined> = [1, "hello", true, undefined];

function check (){
    if(typeof aaaaa === "number"){
        console.log("aaaaa is a number");
    } else if(typeof aaaaa === "string"){
        console.log("aaaaa is a string");
    } else if(typeof aaaaa === "boolean"){
        console.log("aaaaa is a boolean");
    } else if(typeof aaaaa === "undefined"){
        console.log("aaaaa is undefined");
    }
}

const aaaaaaaa: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "Alice",
    age: 25,
    isStudent: false
}

const bbbbbbbb = {
    name: "Bob" as "Bob"|"Alice",
    age: 30 as number,
    isStudent: true as boolean
}

bbbbbbbb.name = "Alice";
// @ts-ignore
bbbbbbbb.name = "Tom"; // Error: Type '"Tom"' is not assignable to type '"Bob" | "Alice"'

const aaaaaaaaa: (number | string | boolean | undefined)[] = [];
aaaaaaaaa.push(1);
aaaaaaaaa.push("hello");
aaaaaaaaa.push(true);
aaaaaaaaa.push(undefined);
console.log(aaaaaaaa);