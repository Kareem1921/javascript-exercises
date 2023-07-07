const repeatString = function(string, num) {

    //Create a variable to hold the string you're going to return
    let returnString = "";

    //Skips negative numbers
    if(num<0){
        return "ERROR";
    }

    if(string === ""){
        return "";
    }
 
    //create a loop that repeats the given number of times
    for(let i=0; i<num; i++){

        if(num == 0){
            break;
        }

        //add the given string to the result on each loop.
        returnString+=string;

    }

    return returnString;

};

// Do not edit below this line
module.exports = repeatString;
