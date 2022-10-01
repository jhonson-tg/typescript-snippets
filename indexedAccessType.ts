type Person = { name: String, favNum: number, isConst: boolean };

type Name = Person["name"]
const fName: Name = "Hello";
// const sName: Name = 8; // throws error since the type is different.

type Student = Person["name" | "isConst"];
// OR
type StuentTest = Person[keyof Person];
const student1: Student = "mark";
const student2: Student = false;
// const student3: Student = 83;  // throws error since the 'number' is not there.

const MyArray = [
    { name: "Jhonson", age: 64 },
    { name: "Anc", age: 8 }
]

type chType = typeof MyArray;
const Stu1: chType = [
    { name: "lsjdk", age: 4 }
]