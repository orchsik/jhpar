// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
  return (
    a.reduce((sum, value) => {
      return sum + value ** 2;
    }, 0) >
    b.reduce((sum, value) => {
      return sum + value ** 3;
    }, 0)
  );
}

console.log(arrayMadness([5, 6, 7], [4, 5, 6]));
