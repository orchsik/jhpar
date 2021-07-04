// https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript

function filterHomogenous(arrays) {
  return arrays.filter((arr) => {
    return arr.length && arr.every((D) => typeof D === typeof arr[0]);
  });
}

// function filterHomogenous(arrays) {
//   const result = [];
//   arrays.forEach((arr) => {
//     if (arr.length === 0) return;
//     let flag = true;
//     const firstType = typeof arr[0];
//     arr.forEach((D) => {
//       if (firstType !== typeof D) {
//         return (flag = false);
//       }
//     });
//     if (flag) result.push(arr);
//   });
//   return result;
// }

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
