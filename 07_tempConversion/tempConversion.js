const convertToCelsius = function(temp) {

  temp = (temp-32)*(5/9);

  //round to 1 decimal
  if(temp !== 0){
    temp = parseFloat(temp.toFixed(1));
  }
  
  return temp;
};

const convertToFahrenheit = function(temp) {

  temp = (temp*(9/5)+32);

  //round to 1 decimal
  if(temp !== 0){
    temp = parseFloat(temp.toFixed(1));
  }
  
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
