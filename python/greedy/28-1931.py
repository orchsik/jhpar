# inputList=  [
#       [1, 4],
#       [3, 5],
#       [0, 6],
#       [5, 7],
#       [3, 8],
#       [5, 9],
#       [6, 10],
#       [8, 11],
#       [8, 12],
#       [2, 13],
#       [12, 14],
#     ]
# N = len(inputList)

#
#
# 시간초과!!!!!!!!
import heapq
import sys

N = int(input())
inputList = []
for _ in range(N):
  inputList.append(list(map(int, sys.stdin.readline().split())))

# 1 시작시간 빠른순 정렬
meetinglist = []
for d in inputList:
  heapq.heappush(meetinglist, (d[0], d[1]))

# 2 시작시간이 같은 경우 종료시간이 작은 회의만 남겨
mlist = []
while meetinglist:
  item = heapq.heappop(meetinglist)

  if len(mlist) == 0:
    mlist.append(item)
    continue
  beforeStart, beforeEnd = mlist[len(mlist) - 1]

  start, end = item
  if beforeStart == start and beforeEnd > end:
    mlist.pop()
    mlist.append(item)
  else: mlist.append(item)

# 3 가장 많이 배정할 수 있는 경우 찾기
maxCnt = 0
for i in range(len(mlist)):
  pivots = mlist[i:]
  if maxCnt > len(pivots): break

  tmp = [pivots[0][1]]
  while pivots:
    start, end = heapq.heappop(pivots)
    if tmp[len(tmp) -1] <= start:
      tmp.append(end)

  if maxCnt < len(tmp):
    maxCnt = len(tmp)

print(maxCnt)






