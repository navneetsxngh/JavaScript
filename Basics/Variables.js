// Variables in Javascript
// var, let, const ---> line by line comaprison.
{
    
}
// Declarations and Initialization --->
// var a;    //Declare
// var a = 12; // Declare and Initialize
// - var adds in Window.
// - It is function scoped(It is used in function).
// - We can redeclare and it won't give an error.
// var a = 32

// Due to re-assignment 'Let' is a preferable choice to use
// for 'const' it fixes the the variable.

// const name = "Navneet";    // Immutable data type.

//Scope (global, block, functional)
// var a = 12;  //global scope variable -- Accessed in whole code

//block scope
{ 
    // let a = 12;    // Let is used inside a block
    // let is accessible only inside a block.
}

// Re-assignment and Redeclaration
// var a = 32;
// a = 24;

// let b = 12;
// b = 56;
{

}
// Temporal Dead Zone -- JS knows the variable exists but it doesn't give us the value.
// console.log(a);
// let a = 12;

// for var
// console.log(a);   // It gives an undefined value.
// var a = 12;

{

}
// Hoisting Impact per type
// Hoisting --> Any variable assigned in JS it divides into two parts 
// the declare part goes to the top of the code and
// the initialize part goes down.

// var a = 12;
// var a = undefined;
// a = 12;

// var nm = undefined;
// console.log(nm);
// nm = "Navneet"

// console.log(age);
// let age = undefined;
// age = 25;

// var x = 1;    //Global
// {
//     var x = 2; // Global
// }
// console.log(x);

// let a = 10;
// {
//     let a = 20;
//     console.log("Inside", a);
// }
// console.log("Outside", a)

console.log("Hello from JavaScript")