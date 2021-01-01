# export const solution = (inputList: [number, string]) => {
#   const N = inputList[0];
#   let seatInfo = inputList[1];
#   let tmpList = seatInfo.match(/S|LL/g);
#   const fuckingCoupleCnt = tmpList.filter((d) => d == 'LL').length;
#   let R = 0;
#   if (fuckingCoupleCnt <= 1) {
#     R = seatInfo.length;
#   } else {
#     R = seatInfo.length - fuckingCoupleCnt + 1;
#   }

#   return R 
# };


N = int(input())
seatInfo = input()

fuckingCoupleCnt  = seatInfo.count('LL')

if(fuckingCoupleCnt <=1):
  print(len(seatInfo))
else:
  print(len(seatInfo) - fuckingCoupleCnt + 1)



