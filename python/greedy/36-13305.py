# export const solution = (inputList: any[]) => {
#   const N = inputList[0];
#   const roadLenList = inputList[1];
#   const oilPriceList = inputList[2];

#   let r = 0;
#   let minOilPrice = oilPriceList[0];
#   for (let i = 0; i < roadLenList.length; i++) {
#     const _minOilPrice = oilPriceList.slice(i, i + 1).sort()[0];
#     if (_minOilPrice < minOilPrice) minOilPrice = _minOilPrice;
#     r += minOilPrice * roadLenList[i];
#   }
#   return r;
# };

N = int(input())
roadLenList = list(map(int, input().split()))
oilPriceList = list(map(int, input().split()))

r = 0;
minOilPrice = oilPriceList[0]
for i in range(N-1):
  subOilList = [oilPriceList[j] for j in range(i, i+1)]
  subOilList.sort()
  _minOilPrice = subOilList[0]
  if(_minOilPrice < minOilPrice):
    minOilPrice = _minOilPrice

  r += minOilPrice * roadLenList[i]

print(r)

