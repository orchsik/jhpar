// https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript
function mergeArrays(a, b) {
  const result = [];
  let i = 0;
  while (a[i] || b[i]) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
    i++;
  }
  return result;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));
