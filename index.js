const rs = require('readline-sync');


function calculator(operator, firstNum, secondNum) {
  let result;
  if (operator === '+') {
    result = firstNum + secondNum;
    console.log('The result is: ' + result);
  } else if (operator === '-') {
    result = firstNum - secondNum;
    console.log('The result is: ' + result);
  } else if (operator === '*') {
    result = firstNum * secondNum;
    console.log('The result is: ' + result);
  } else if (operator === '/') {
    result = (firstNum / secondNum).toFixed(0); 
    console.log('The result is: ' + result);
  }
}

function nodeCalculator() {

  let firstNumber;
  let secondNumber;
  let shouldEnd = false;
  let isValidNumber = true;
  let operators = ['+', '-', '*', '/'];

  while (!shouldEnd) { 
    let operation = rs.question('What operation would you like to perform? ');
    if (!operators.includes(operation)) {
      console.log('That is not a valid operation.');
      continue;
    }
    else {
      while (isValidNumber)  {
        firstNumber = rs.questionInt('Please enter the first number: ');
        if (firstNumber === NaN) {
          console.log('This is not a number.');
        } else {
          break;
        }
      }
      while (isValidNumber) {  
        secondNumber = rs.questionInt('Please enter the second number: ');
        if (secondNumber === NaN) {
          console.log('This is not a number.');
        } else {
          break;
        }
      }
      calculator(operation, firstNumber, secondNumber);
    }
    shouldEnd = true;
    break;
  }
}

nodeCalculator();
