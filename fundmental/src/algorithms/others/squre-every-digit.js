// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits1(num) {
  const result = num
    .toString()
    .split('')
    .map((char) => parseInt(char, 10))
    .map((n) => n ** 2)
    .join('');
  return result;
}

function squareDigits2(num) {
  let input = String(num);
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result += input[i] ** 2;
  }
  return parseInt(result, 10);
}

console.log(squareDigits1(9119));
console.log(squareDigits2(9119));
