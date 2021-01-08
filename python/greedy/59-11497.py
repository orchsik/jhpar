# export const solution = (input: [number[], number[], number[]]) => {
#   const levelList = input.map((testcase) => {
#     const evenList: number[] = [];
#     const oddList: number[] = [];
#     testcase.sort();
#     testcase.forEach((item, i) => {
#       if (i % 2 === 0) {
#         evenList.push(item);
#       } else {
#         oddList.push(item);
#       }
#     });
#     const totalList = [...evenList, ...oddList.reverse()];
#     const level = totalList.reduce((acc, item, i) => {
#       const x = totalList[i];
#       const y = totalList[i + 1];
#       if (!y) return acc;
#       if (acc < Math.abs(y - x)) {
#         return Math.abs(y - x);
#       } else {
#         return acc;
#       }
#     }, 0);
#     return level;
#   });
#   return levelList;
# };

#
#
# 풀이1 - 인덱스2 차이로 정렬 
# testCnt = int(input())
# for i in range(testCnt):
#   itemCnt = int(input())
#   itemList=list(map(int, input().split()))
#   itemList.sort()
#   result = 0
#   for j in range(2,itemCnt):
#     result = max(result, abs(itemList[j]-itemList[j-2]))
#   print(result)
# testCnt = int(input())



#
#
# 풀이2 - 중간이 가장크고 가장자리로 갈수록 작은숫자
testCnt = int(input())
for i in range(testCnt):
  itemCnt = int(input())
  itemList=list(map(int, input().split()))
  itemList.sort()
  oddList = []
  evenList = []
  for idx in range(itemCnt):
    if idx%2 == 0: oddList.append(itemList[idx])
    else: evenList.append(itemList[idx])

  evenList.reverse()
  totalList = []
  totalList += oddList
  totalList += evenList

  max = 0
  for idx in range(0, itemCnt-1):
    if max < abs(totalList[idx] - totalList[idx+1]): max = abs(totalList[idx] - totalList[idx+1])
  
  print(max)