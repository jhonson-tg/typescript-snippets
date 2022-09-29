// basic

type Predict = (x: unknown) => boolean;

let isCorrect: ReturnType<Predict> = false;
// let isCorrect1: ReturnType<Predict> = "lksd"; // returnType of Predict is boolean.

// Example - 2
const Test = () => {
    return { x: 10, y: 20 }
}

// If we go with ReturnType alone it throws an error.
// It happens because since return type 'boolean'(1 example) is not same as return type object.
type tp = ReturnType<typeof Test>;
const value: tp = {
    x: 43,
    y: 54
}

