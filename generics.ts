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
    showName: <Type>(arg: Type) => Type;
    showOneAnimal: <Type>(arg: Array<Type>) => Type;
}

function showName<Type>(arg: Type): Type {
    return arg;
}

function showOneAnimal<Type>(arg: Array<Type>): Type {
    return arg[0];
}

let TestObj: TestInterface<string> = { showName, showOneAnimal };
console.log(TestObj.showName("Jhonson"))