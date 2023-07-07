const reverseString = function(inString) {

    let reversedStr = "";

    if(inString == ""){
        return "";
    }

    for(let i=inString.length-1; i>=0; i--){
        reversedStr+= inString[i];
    }

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
