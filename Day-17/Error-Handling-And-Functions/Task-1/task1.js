var myArray = [];

function getDivisors(number) {
  if (typeof number !== "number") {
    //parameter type is not a Number
    throw new Error("parameter type is not a Number");
  } else if (number === 0) {
    //function can accept only a number greater than 0
    throw new Error("parameter can't be a 0");
  } else {
    for (var divisor = 1; divisor <= number; divisor++) {
      if (Number.isInteger(number / divisor)) {
        myArray.push(divisor);
      }
    }
    console.log(myArray);
  }
}

try {
  getDivisors(12);
  //getDivisors('Content');
  //getDivisors(0);
} catch (e) {
  console.log(e);
}
