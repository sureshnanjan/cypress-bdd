console.log("Welcome to Cypress Automation with BDD")
const TrainerName = "Suresh"
TrainerName.toLowerCase()

// let , var, const
// Operations
// Object

function MyFunction()
{
    console.log(" I am executing my function")
}

const MyTraining = {trainerName:"Suresh", startDate: new Date("22-03-2023"), participants: ["Kevin","Kenneth"]}

// Number
// RegEx
// Date

MyFunction.showData = function(){console.log("This is functionality inside my object")}

MyTraining.showData = MyFunction
MyTraining.showData()




