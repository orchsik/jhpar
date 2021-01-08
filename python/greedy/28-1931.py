# inputList=  [
#       [1, 4],
#       [3, 5],
#       [0, 6],
#       [5, 7],
#       [6, 7],
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
# import heapq
# import sys

# N = int(input())
# inputList = []
# for _ in range(N):
#   inputList.append(list(map(int, sys.stdin.readline().split())))

# # 1 시작시간 빠른순 정렬
# meetinglist = []
# for d in inputList:
#   heapq.heappush(meetinglist, (d[0], d[1]))

# # 2 시작시간이 같은 경우 종료시간이 작은 회의만 남겨
# mlist = []
# while meetinglist:
#   item = heapq.heappop(meetinglist)

#   if len(mlist) == 0:
#     mlist.append(item)
#     continue
#   beforeStart, beforeEnd = mlist[len(mlist) - 1]

#   start, end = item
#   if beforeStart == start and beforeEnd > end:
#     mlist.pop()
#     mlist.append(item)
#   else: mlist.append(item)

# # 3 가장 많이 배정할 수 있는 경우 찾기
# maxCnt = 0
# for i in range(len(mlist)):
#   pivots = mlist[i:]
#   if maxCnt > len(pivots): break

#   tmp = [pivots[0][1]]
#   while pivots:
#     start, end = heapq.heappop(pivots)
#     if tmp[len(tmp) -1] <= start:
#       tmp.append(end)

#   if maxCnt < len(tmp):
#     maxCnt = len(tmp)

# print(maxCnt)


#
#
# 빠른 풀이
# 빨리 끝나는거로만 모으면 하나의 회의실에서 최대한 많은 회의를 할 수 있을거 같다.
# 2-2 / 1-2 끝나는 시간이 같은 경우, 저렇게 정렬되면 회의 하나만 할 수 있어.. 시작시간 빠른거 먼저 정렬하자
import sys

N = int(input())
meetings = []
for _ in range(N):
  meetings.append(list(map(int, sys.stdin.readline().split())))

# 1 빨리 끝나는 순서대로 정렬 + 끝나는 순서가 같으면 시작 시간이 빠른거로 정렬
meetings.sort(key=lambda item: item[0])
meetings.sort(key=lambda item: item[1])

# 2 최대 회의개수 그리디 시작
nowEndTime = 0
meetingCnt = 0
for meeting in meetings:
  if meeting[0] >= nowEndTime:
    nowEndTime = meeting[1]
    meetingCnt += 1

print(meetingCnt)









