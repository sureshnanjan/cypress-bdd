const { set } = require("cypress/types/lodash");

console.log("I am starting Cypress BDD learning")

//console.
// let
let myLogo = {}
// List of Values
let itemsinPetstore = ['fish','dog','cats','reptile','test']
// var
var mySearchbox = {}
// const
const nverchange = 500;
// nverchange = 600; // Errpr
let mynumber = 100;
mynumber = 101;

console.log(mynumber);

// Decaration
// Take no parameters
function PrintMyName()
{
    console.log("Doing Step1")
    console.log("Doing Step2")
    console.log("Doing Step3")

}
// Invocation
console.log(typeof itemsinPetstore);
console.log(itemsinPetstore.length);

let value = PrintMyName();
console.log(value)

// Function take take 1 paramaters and returns a value

function FunctionWithOneparam(param1)
{
    console.log(`Thi si the value igot ${param1}`)

    return param1;

}

// Block Statement

let myObject = {attribute1:"Value1"} // Objectc Literal Syntax

if (condition) {
    let localvar = 10;
    if (localvar > 10){
        console.log("Greater");
    }
    
  } else {
    statement2;
  }

let inv1 = FunctionWithOneparam(100,200);
let inv2 = FunctionWithOneparam("Suresh");