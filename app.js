'use strict';

console.log('please work');
function sum(number1, number2){
  var sumOfTwoRandomNumbers = number1 + number2;
  var  returnMessage = 'The sum of ' + number1 + ' and ' + number2 + ' is ' + sumOfTwoRandomNumbers + '.';
  var sumArray = [sumOfTwoRandomNumbers, returnMessage]
  return sumArray;
}
testSum(4, 7);


function multiply(num3, num4){
  var productOfTwoNumbers = num3 * num4;
  var returnMessage = 'The product of ' + num3 + ' and ' + num4 + ' is ' + productOfTwoNumbers + '.';
  var someProductArray = [productOfTwoNumbers, returnMessage]
  return someProductArray;
}
testMultiply(5,9);

function sumAndMultiply(num5, num6, num7){
  var arraySumult = [];
  var first = sum(sum(num5, num6)[0], num7)[0];
  var second = multiply(multiply(num5, num6)[0], num7)[0];
  arraySumult[0] = first;
  arraySumult[1] = second;
  arraySumult[2] = num5 + ' and ' + num6 + ' and ' + num7 + ' sum to ' + first + '.';
  arraySumult[3] = 'The product of ' + num5 + ' and ' + num6 + ' and ' + num7 + ' is ' + second + '.';

  console.log(arraySumult);
  return arraySumult;
}
testSumAndMultiply(4,7,5);

var testArray = [2,3,4];
function sumArray(testArray){
  var arraySumNums = [];
  var firstElement = sum(sum(2,3)[0], 4)[0];
  var returnSum = 2 + ',' + 3 + ',' + 4 + ' was passed in as an array of numbers, and ' + firstElement + ' is their sum.';
  arraySumNums[0] = firstElement;
  arraySumNums[1] = returnSum;
  console.log(arraySumNums);
  return arraySumNums
}
testSumArray(testArray);

function multiplyArray(testArray){
  var multiplyArray = [];
  var firstMultiply = multiply(multiply(2,3)[0], 4)[0];
  var string = 'The numbers ' + 2 + ',' + 3 + ',' + 4 + ' have a product of ' + firstMultiply + '.';
  multiplyArray[0] = firstMultiply;
  multiplyArray[1] = string;
  console.log(multiplyArray);
  return multiplyArray
}
testMultiplyArray(2,3,4);
