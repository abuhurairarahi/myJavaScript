/* 
    In four way we can declear variables:
    1. let
    2. var (not-prefered, as issue in block scope and functional scope); scope --> {}
    3. const (specialized for declearing constants)
    4. direct-declearing [similar with auto in c++] 
*/
var variable = "not preferred";

let string = "It is a string";
let char = 'A';
let integer = 12345;
let float = 3.93;
let double = 123456789.987654321;
let bool = true;

autoVariable = "It is a auto variable. Not preferred";
autoNumberVar = 101010;

const stringConstant = "It is constant string." 
const numberConstant = "9.8";

let undefinedVariable; 
//if we don't decleare a variable without initializing the value, considered as "UNDEFINED"  

console.log("String: " + string);
console.log("Char: " + char);
console.log("Integer: " + integer);
console.log("Float: " + float);
console.log("Double: " + double);
console.log("Boolean: " + bool);

//printing as table
console.table([variable, autoVariable, autoNumberVar, undefinedVariable]);