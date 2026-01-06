let score = "33";
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// if score = "33abc"
let score1 = "33abc"
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);


// For Null Value
let score2 = null;
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// "33" --> 33
// "33abc" --> NaN
// true --> 1, false --> 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 --> true, 0 --> false
// "" --> False, "navneet" --> true

let somenumber = 33;
let stringNumber = String(somenumber);
console.log(typeof stringNumber);