export const solution = (inputList: any[]) => {
  const N = inputList[0];
  const roadLenList = inputList[1];
  const oilPriceList = inputList[2];

  let r = 0;
  let minOilPrice = oilPriceList[0];
  for (let i = 0; i < roadLenList.length; i++) {
    const _minOilPrice = oilPriceList.slice(i, i + 1).sort()[0];
    if (_minOilPrice < minOilPrice) minOilPrice = _minOilPrice;
    r += minOilPrice * roadLenList[i];
  }
  return r;
};

var inputList = [4, [2, 3, 1], [5, 2, 4, 1]];
var r = solution(inputList);
console.log(r);

var inputList = [4, [3, 3, 4], [1, 1, 1, 1]];
var r = solution(inputList);
console.log(r);
