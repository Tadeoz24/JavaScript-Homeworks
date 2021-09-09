var myArray = [1, 2, 3];

function f(myArray) {
  if (!Array.isArray(myArray)) {
    throw new Error("parameter type should be an array");
  } else if (myArray.length === 0) {
    throw new Error("parameter can't be an empty");
  } else {
    if (myArray.length > 1) {
      console.log(myArray[0]);
      myArray.shift();
      f(myArray);
    } else if (myArray.length == 1) {
      console.log(myArray[0]);
    }
  }
}

try {
  f([1, 2, 3]);
  //f(1,2,3);
  //f('content');
  //f([]);
} catch (err) {
  console.log(err);
}
