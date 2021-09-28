var n = 1000;
let result;
var num = 0;

while (n > 50) {
  result = n / 2;
  if (result < 50) {
    break;
  }
  console.log(result);
  n -= result;
  num += 1;
}
console.log('sum of the while loop itteration = ' + num);
