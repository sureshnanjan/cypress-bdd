const test = 0;
//test = 200;
/*console.log(1000/test);
console.log("Execution starts");
try {
    test = 100;
    console.log("The block is fine")
} catch (error) {
    console.log("There is a problem");
}
try {
    errorThrow();
} catch (error) {
    console.log("The error is handled and execution continues");
}

console.log("The program continues")
console.log("Execution ends");

*/
try {
    console.log("Starting Block")
    errorThrow(1)
    
} catch (error) {
    console.log("There area errors in the Block")
}
finally{
    console.log("This works irrespective of the exception")
}


function errorThrow(param){
    if (param > 10) {
        console.log("The execution is correct");
    }
    else{
        throw "Argument Not Correct"
    }
    
}
let array = [1,2,3,4,5]
// For Loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Item valus is ${element} for loop`);
    
}
// While
let start = 0
while (start < array.length) {
    
    if (start == 3) {
        start++;
        continue;
    }else  {
        const element = array[start];
    console.log(`Item valus is ${element} while loop`);
    start++;
    }
}

let ob1 = {prop1:1, prop2:2}
let ob2 = {prop1:1, prop2:2,prop3:3, prop4:4}

for (const key in ob2) {
    if (Object.hasOwnProperty.call(ob2, key)) {
        const element = ob2[key];
        console.log(element)
        
    }
}
//for

/**
 * This my utility function to compare 3 numbers
 * @param {number} param1 This is the first Number
 * @param {number} param2  Thi si the second number to compare
 * @param {string} param2 
 * @returns {boolean}
 */
function isLesser(param1, param2, param2) {
    
}
// single line
/*
dsfkljfadklfjsdklf
fdslaflf;aslf;fs
sdfaafa
*/
isLesser(10,20,30)
isLesser(1,2,3)

/**
 * Descripton for the Function
 * @param {}
 */
function Name(){

}


