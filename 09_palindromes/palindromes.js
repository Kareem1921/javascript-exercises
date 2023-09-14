const palindromes = function (str) {

    //remove punction and spaces
    let newStr = str.replace(/[.,:!?\s]/g,'');
    newStr = newStr.toLowerCase();

    //split into array 
    let arr = newStr.split('');
    let reversedArr = arr.reverse();

    //convert reversed array to a reversed string
    let reversedStr = reversedArr.join('');  

    // check if they are the same
    let result = newStr.localeCompare(reversedStr); //returning 0
    return newStr.localeCompare(reversedStr) === 0 ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
