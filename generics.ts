// Generic Functions
console.log("Generic Function Examples...")
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Jhonson"));
console.log(identity<boolean>(false));
let myIdentity: <T>(arg: T) => T = identity;
console.log(myIdentity(8924));

// Findings length
console.log("Finding the length...")
function findLength<T>(arg: Array<T>): number {
    return arg.length;
}

console.log(findLength([1, 2, 3]))
console.log(findLength(["a", "b", "c", "d"]))
let myLength: <Type>(arg: Array<Type>) => number = findLength;
console.log(myLength([false, true]))
console.log("--------------------------------------------")
// With interfaces.
console.log("Using with interfaces")

interface GenericInteface {
    <Type>(arg: Array<Type>): Type;
    <Type>(arg: Type): Type;
}

function GenericImpl<Type>(arg: Array<Type>): Type {
    return arg[0];
}

function GenericImpl2<Type>(arg: Type): Type {
    return arg;
}

let GenericObj: GenericInteface = GenericImpl;
console.log(GenericObj(["root", "test"]));
let GenericObj2: GenericInteface = GenericImpl2;
console.log(GenericObj2("test"))

interface TestInterface<Type> {
    (arg: Type): Type;
}

function showName<Type>(arg: Type): Type {
    return arg;
}

let TestObj: TestInterface<string> = showName;
console.log(TestObj("Jhonson"))
// console.log(TestObj(83)); // It will fail since the type passed is number.

console.log("--------------------------------------------")
console.log("Using with classes")

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let genNum = new GenericNumber<number>();
genNum.zeroValue = 0;
genNum.add = (x, y): number => {
    return x + y;
}

console.log(genNum.add(8, 3));
// console.log(genNum.add("oiwe", "klds")); // It will fail since type is number and passed arg type is string.
console.log("--------------------------------------------")
console.log("Using generic constraints")

interface LengthWise {
    length: number;
}

function LogginIdentity<Type extends LengthWise>(arg: Type): Type {
    return arg;
}

// console.log(LogginIdentity(5)); // will not work since 5 do not have property length
console.log(LogginIdentity({ length: 2, value: "slkd" }));
console.log(LogginIdentity([3, 4, 5]));

let numbers = { "one": 1, "two": 2, "three": 3 };
const getNumbers = <Type, Key extends keyof Type>(obj: Type, find: Key): Type[Key] => {
    return obj[find];
}

console.log(getNumbers(numbers, "three"));
// console.log(getNumbers(numbers, "four")); // will not as the key is not available in the list