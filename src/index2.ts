
function F() {
    return 1;
}
// @ts-ignore
const result = F() as string; // Error: Type 'number' cannot be cast to type 'string'.

function G(): number {
    return 1;
}

function H(): [string, number] {
    return ["hello", 1];
}

function I(){
    return [1, "hello", true, undefined] as const; // Type is readonly [1, "hello", true, undefined]
}  

function J(){
    // return void; // Error: A function whose declared type is neither 'void' nor 'any' must return a value.
}
 
const K = J();

function L(name: string, age: number , isStudent: boolean){
    console.log({name, age, isStudent});
}

L("Alice", 25, false);
// @ts-ignore
L("Bob", "30", true); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


type Person = {
    name: string;
    surname?: string; // Optional property
    age: number;
    isStudent: boolean;

}

const M: Person = {
    name: "Alice",
    age: 25,
    isStudent: false
}

const N: Person[] = [
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
]

type Color = "red" | "green" | "blue";

const O: Color = "red";
// @ts-ignore
const P: Color = "yellow"; // Error: Type '"yellow"' is not assignable to type 'Color'.

const Q: Color[] = ["red", "green", "blue"];

type CustomColor = "magenta" | "cyan" | "yellow";

const R: (CustomColor | Color)[] = ["red", "magenta", "cyan"];

type AllColors = Color | CustomColor;

const S: AllColors = "blue";
const T: AllColors = "yellow";
// @ts-ignore
const U: AllColors = "black"; // Error: Type '"black"' is not assignable to type 'AllColors'.

type Car = {
    make: string;
    model: string;
    year: number;
}

type Plane = {
    make: string;
    model: string;
    year: number;
    fly(): void;
}

type FlyingCar = Car & Plane;

const V: FlyingCar = {
    make: "Tesla",
    model: "Model X",
    year: 2020,
    fly() {
        console.log("Flying");
    }
}

const W = {
    make: "Terrafugia",
    model: "Transition",
    year: 2021,
    fly() {
        console.log("Flying");
    }
} as FlyingCar; // Type assertion to FlyingCar

V.fly(); // Output: Flying
W.fly(); // Output: Flying


const MyMap = new Map<string, number>();
MyMap.set("one", 1);
MyMap.set("two", 2);

console.log(MyMap.get("two")); // Output: 2

type PersonMap = Map<string, Person>;

const personMap: PersonMap = new Map();
personMap.set("Alice", { name: "Alice", age: 25, isStudent: false });
personMap.set("Bob", { name: "Bob", age: 30, isStudent: true });

console.log(personMap.get("Alice")); // Output: { name: "Alice", age: 25, isStudent: false }

function LogPerson(parameters:{ name: string; age: number; isStudent: boolean}): Promise<number | string | boolean | undefined> {
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
    if(typeof result === "number"){
        console.log("Result is a number:", result);
    } else if(typeof result === "string"){
        console.log("Result is a string:", result);
    } else if(typeof result === "boolean"){
        console.log("Result is a boolean:", result);
    } else if(typeof result === "undefined"){
        console.log("Result is undefined");
    }
}).catch(error => {
    console.error("Error:", error);
});