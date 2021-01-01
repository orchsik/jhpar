export const solution = (inputList: [number, string]) => {
  const N = inputList[0];
  let seatInfo = inputList[1];
  let tmpList = seatInfo.match(/S|LL/g);
  const fuckingCoupleCnt = tmpList.filter((d) => d == 'LL').length;
  let R = 0;
  if (fuckingCoupleCnt <= 1) {
    R = seatInfo.length;
  } else {
    R = seatInfo.length - fuckingCoupleCnt + 1;
  }

  return R;
};

// export const solution = (inputList: [number, string]) => {
//   const N = inputList[0];
//   let seatInfo = inputList[1];
//   let tmpList = seatInfo.match(/S|LL/g);
//   let seatList = ['*'];
//   tmpList.forEach((d) => {
//     seatList.push(d);
//     seatList.push('*');
//   });

//   seatList.forEach((d, i) => {
//     if (d === 'LL') {
//       seatList[i - 1] = 'x';
//       seatList[i] = 'S';
//     }
//   });

//   seatList.forEach((d, i) => {
//     if (d === 'S') {
//       if (seatList[i - 1] === '*') {
//         seatList[i - 1] = 'x';
//         seatList[i] = 'x';
//       } else if (seatList[i + 1] === '*') {
//         seatList[i + 1] = 'x';
//         seatList[i] = 'x';
//       }
//     }
//   });

//   const R = seatInfo.length - seatList.filter((d) => d === 'S').length;
//   return R
// };
