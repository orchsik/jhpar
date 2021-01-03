# export const solution = (inputList: number[][]) => {
#   const N = inputList[0][0];
#   const M = inputList[0][1];
#   const cardList = inputList[1];
#   cardList.sort();

#   // 카드중 가장작은 원소 2개 픽
#   // M번 반복
#   let _M = 0;
#   while (_M < M) {
#     _M++;
#     const newEle = cardList[0] + cardList[1];
#     cardList[0] = newEle;
#     cardList[1] = newEle;
#     cardList.sort();
#   }

#   const R = cardList.reduce((acc, item) => acc + item, 0);
#   // console.log(N, M, cardList, R);
#   return R;
# };

# 풀이 1
#
# 
# # # input1 = list(map(int, input().split()))
# # # N = input1[0]
# # # M = input1[1]
# N, M = map(int, input().split())
# cardList = list(map(int, input().split()))

# cardList.sort()
# _M = 0
# while(_M < M):
#   _M += 1
#   newEle = cardList[0] + cardList[1]
#   cardList[0] = newEle
#   cardList[1] = newEle
#   cardList.sort()

# R = sum(cardList)
# # # R = 0
# # # for item in cardList:
# # #   R += item

# print(R)


# 
# 
# 풀이 2
import heapq # 우선순위큐 / minHeap 제공

N, M = map(int, input().split())
cardList =list(map(int, input().split()))


heapq.heapify(cardList)
# # heap = []
# # for card in cardList:
# #   heapq.heappush(heap, card)

for _ in range(M):
  x = heapq.heappop(cardList)
  y = heapq.heappop(cardList)
  heapq.heappush(cardList, x+y)
  heapq.heappush(cardList, x+y)

print(sum(cardList))