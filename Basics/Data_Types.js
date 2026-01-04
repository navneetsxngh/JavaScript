/*Primitives --> We can copy to a real value
Primitives store the actual value, not a reference.
✅ Primitive types in JavaScript
Number
String
Boolean
undefined
null
Symbol
BigInt */
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

/* Reference Data Types (Stored by reference)
Reference types store a memory address, not the actual value.
✅ Reference types
Object {}
Array []
Function ()
Date
Map, Set */
let obj1 = { name: "Tinku" };
let obj2 = obj1;
obj2.name = "Rahul";
console.log(obj1.name); // Rahul
console.log(obj2.name); // Rahul

/* STRING -- Strings are primitive, immutable, and always passed by value in JavaScript. */
let str1 = "Hello";
let str2 = str1;
str2 = "World";
console.log(str1); // Hello
console.log(str2); // World

/* Number -- JavaScript has a single numeric primitive (Number) which is immutable and passed by value, using 64-bit floating-point representation. */
let x = 100;
let y = x;
y = 200;
console.log(x); // 100
console.log(y); // 200

/* Boolean -- Boolean is a primitive, immutable data type in JavaScript; conditions rely on truthy and falsy coercion, so strict comparisons are preferred. */
let isLoggedIn = true;
let hasPermission = false;

/* Undefined -- undefined is a primitive value automatically assigned by JavaScript to indicate the absence of a value. */
let p;
console.log(p); // undefined

/* Null -- null means no value on purpose. You assign it deliberately. */
let user = null;

/* Symbol -- A Symbol is a primitive data type introduced in ES6.*/
const r = Symbol("id");
const s = Symbol("id");
console.log(r === s); // false

let s1 = Symbol("test");
let s2 = s1;
console.log(s1 === s2); // true

/* Bigint -- BigInt is a primitive data type (ES2020) used to represent integers larger than Number.MAX_SAFE_INTEGER. */
let big = BigInt("123456789012345678901234567890");
console.log(big)