const fibonacci = function(num) {

    // convert to number if argument is a string
    if (typeof num === 'string' || num instanceof String){
        num = Number(num)
    }

    // don't accept negatives
    if(num < 0){
        return "OOPS"
    }

    else if(num === 0){
        return 0;
    }

    else if (num === 1){
        return 1;
    }

    else{
        return (fibonacci(num-1) + fibonacci(num-2));
    }
  

};

// Do not edit below this line
module.exports = fibonacci;
