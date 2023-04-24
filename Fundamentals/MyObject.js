// Using the Object Literal Syntax
const HomePage = {LogoPosition:"right",
search: function(){
    console.log("search the list of pets ")
},
Login: function(){
    console.log("Using the username and password to login")
}
}

const angelFish = {itemid:1,name:'angelfish',price:12}
const koi = {itemid:2,name:'Koi',price:20}

HomePage.search();
let myname = "suresh";
let noOfpets = 5;

console.log(typeof HomePage);
console.log(typeof myname);
console.log(typeof noOfpets);

// Key Value Pairs

// Cinstructor Functions

function Fish(name, id, price) {

    
        this.id = id;
        this.name = name;
        this.price = price;
        this.addToCart = function(){
            console.log(`Adding ${this.id} to the to cart`);
        }
    
}

class MyClass {
    name = "Test";
    price = 20;
    #myPrivateField = "Pricate Value not used outside"; // Implementation Details
    another = "Value"

    getDetails = function(){

        console.log(`${this.name} ${this.#myPrivateField}`)
    }



}

function simpleDemo(){
    console.log("This si a basic function");
}

const angelfish1 = new Fish(1,'angel',20,);
const koiFish = new Fish(2,"Koi Fish", 15);
const myInstance = new MyClass();
koiFish.addToCart();
angelfish1.addToCart();
/*
console.log(Object.getOwnPropertyNames(angelfish1))
console.log(Object.getOwnPropertyNames(koiFish))
console.log(Object.getOwnPropertyNames(angelFish)); // Literal syntac
// Accesssing the property Values
console.log(koiFish.id) // Dot Notation
console.log(koiFish['id'])
console.log(typeof console)
console.log(Object.getOwnPropertyNames(console));
const startTime = new Date("04-04-2023");

console.log(startTime);
console.log(Object.getOwnPropertyNames(Date));
*/

const myObj = new MyClass();
const myObj1 = new MyClass();
console.log(Object.getOwnPropertyNames(myObj));
console.log(myObj.name)
myObj.getDetails();


