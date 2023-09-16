const findTheOldest = function(people) {

    // oldest should be the object that has the largest difference between birth year and death year

    let oldest = people.reduce(function(oldestObject, currentObject) {
        //let age = 0;
        let oldestObjectAge = 0;

        //check if object has a year of death
        //if not, use current year to get age
        if("yearOfDeath" in currentObject){
            let age = currentObject.yearOfDeath - currentObject.yearOfBirth;

            // get age of oldest 
            "yearOfDeath" in oldestObject ? oldestObjectAge = oldestObject.yearOfDeath - oldestObject.yearOfBirth : oldestObjectAge = (new Date()).getFullYear()- oldestObject.yearOfBirth

            // set oldest to current element if current element's age exceeds that of the recorded oldest person
            if(age > oldestObjectAge){
                oldestObject = currentObject
            }
           // age < oldestObject.yearOfDeath - oldestObject.yearOfBirth ? oldestObject = currentObject : false
        }
        else{
            let age = (new Date()).getFullYear()- currentObject.yearOfBirth;

            // get age of oldest 
            "yearOfDeath" in oldestObject ? oldestObjectAge = oldestObject.yearOfDeath - oldestObject.yearOfBirth : oldestObjectAge = (new Date()).getFullYear()- oldestObject.yearOfBirth

            if(age > oldestObjectAge){
                oldestObject = currentObject
            }
        }

        return oldestObject;

    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
