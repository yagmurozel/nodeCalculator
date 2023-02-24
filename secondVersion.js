const rs = require('readline-sync');

const operators = ['+', '-', '*', '/'];

function getOperation(limit) {
  return rs.question('What operation would like to perform? ', {
    limit: limit,
    limitMessage: 'That is not a valid operation.'
  });
}

function getNumber(str) {
  return rs.questionInt(`Please enter the ${str} number: `, {
    limitMessage: 'This is not a number.'
  });
}

function nodeCalculator(limit) {
  const operation = getOperation(limit);
  const firstNumber = getNumber('first');
  const secondNumber = getNumber('second');
  return (`The result is: ${calculator(operation, firstNumber, secondNumber)}.`)
}

function calculator(operator, firstNum, secondNum) {
  if (operator === operators[0]) return firstNum + secondNum;
  else if (operator === operators[1]) return firstNum - secondNum;
  else if (operator === operators[2]) return firstNum * secondNum;
  else if (operator === operators[3]) return (firstNum / secondNum).toFixed(0);
}

console.log(nodeCalculator(operators));