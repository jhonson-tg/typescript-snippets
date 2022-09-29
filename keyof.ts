// Basic example
type pointer = { x: number, y: number };
type p = keyof pointer;
const point: p = "x";
const point2: p = "y";
// const point3: p = 3;
// const point3: p = "idis"; // This won't work as these two are not in keys of pointer.

type Arrayish = { [n: number]: undefined };
type Arr = keyof Arrayish;
let favoriteNumber: Arr = 39;
// let favoriteNumber1: Arr = "lsd"; fails since keyof Arrayish is number.