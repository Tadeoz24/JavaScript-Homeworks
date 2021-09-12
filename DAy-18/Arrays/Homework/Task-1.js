function f(arr) {
    var currArrayLength = arr.length;
  
    for (var i = 0; i < currArrayLength; i++) {
      if (Array.isArray(arr[i]) === true) {
        f(arr[i]);
      }
      //   else {
      //     throw new TypeError("only array!!!")
      //   }
      else if (typeof arr[i] === "number") {
        arraySum += arr[i];
      } else {
        throw new TypeError("not a number or not a array");
      }
    }
    return arraySum;
  }
  var arraySum = 0;
  var a = [[[[[], 3]]]];
  var result = f(a);
  console.log(result);
  