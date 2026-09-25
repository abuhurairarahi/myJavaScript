//#WHY USING 'Number()' CAN BRING ERROR!

let valueOne = 212; //number
let dataType = typeof(valueOne);
console.log(dataType);

let valueTwo = "212.204"; //in string there is a number
let valueTwo_INT = Number(valueTwo); //Number(): convert 'string' to 'number'
dataType = typeof(valueTwo_INT); //Number
console.log(dataType);

let valueThree = "212astha"; //raw string
let valueThree_INT = Number(valueThree); //output: NaN, means it's not a number
dataType = typeof(valueThree_INT);
console.log(dataType); //number !wrong data-type

/*
    in summery:

    "33" --> 33
    "33abc" --> NaN
    true --> 1
*/

let status = 1;
let inBool = Boolean(status);
console.log(inBool);

//#EMPTY STRING BOOLEAN CONVERSION

let isEmpty = ""; //Empty String
inBool = Boolean(isEmpty);
console.log(inBool); //false

isEmpty = "a complete string";
inBool = Boolean(isEmpty);
console.log(inBool); //true

//#STRING CONVERSION

let value = 204;
let inString = String(value);
dataType = typeof(inString);
console.log(dataType); //string
console.log(inString);


