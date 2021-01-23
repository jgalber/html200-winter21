// Calculator - assignmert 01 - Lesson 02

// Four variables:
// I have decided to declare with 'let' because it is more flexible for math operations 
// I used numbers as data type for variables

let x = 1;
let y = 10;
let z = 100;
let w = 1000;

// Operators: + , - , * , / , % , =

console.log((x + y) * (z / w));
// 1.1
console.log((z * w) / (x - y));
//-11111.111111111111
console.log((x * y) / (z % w));
// 0.1
console.log((w - y) % (x = z) - y);
// 80
console.log((x + y + w + z) % (-x) * (z + (-z)));
// 0