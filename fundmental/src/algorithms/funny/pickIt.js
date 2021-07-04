// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  var odd = [],
    even = [];

  for (let i = 0; i < arr.length; i++) {
    const D = arr[i];
    if (D % 2) odd.push(D);
    else even.push(D);
  }

  return [odd, even];
}

console.log(pickIt([51, 26, 34, 26, 21]));
