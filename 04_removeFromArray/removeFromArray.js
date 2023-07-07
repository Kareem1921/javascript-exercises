const removeFromArray = function(array, ...args) {

    //convert all arguments to an array
    //const args = Array.from(arguments);

    return array.filter(x => !args.includes(x));

    // //loops through array
    // for (const i of args) {
        
    // }

};



// Do not edit below this line
module.exports = removeFromArray;
