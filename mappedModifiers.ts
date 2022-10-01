type Student<Type> = {
    readonly [prop in keyof Type]: Type[prop];
}

type LockedAccount = {
    readonly id: string;
    readonly name: string;
}

type Student1 = Student<LockedAccount>;

const stud1: Student1 = {
    id: "io8934",
    name: "lskdjojd"
}