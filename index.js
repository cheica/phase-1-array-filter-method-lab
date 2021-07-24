// Code your solution here
// function findMatching(driveArr, names){
//     for (const driver of driveArr){
//        if(drivers[''] === names){
//            return 
//        }
//     }

const { stringContaining } = require("expect")

// }

function findMatching(drivers, nameInput){
    const newDrivers = drivers.filter(name => name.toLowerCase() === nameInput.toLowerCase())
    return  newDrivers

   // console.log(newDrivers)
}

function fuzzyMatch(drivers, nameInput){
    const newFuzzy = drivers.filter(name => name === nameInput.includes())
    return newFuzzy

}

function matchName(drivers, callB){
    const newMatch = []; 

    for (const drInfo of drivers){
        if (callB(drInfo)){
            newMatch.push(user)
        }
    }
}
