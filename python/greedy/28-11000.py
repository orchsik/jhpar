# export const solution = (lectureTimes: number[][]) => {
#   let roomCnt = 0;
#   const processedLectureTimes: number[][] = [];
#   // 모든 강의가 배정될 때까지 반복
#   while (lectureTimes.length !== 0) {
#     // 새 강의실의 비어있는 시간에 강의를 배정
#     let newRoomTimes: number[][] = [];
#     lectureTimes.forEach((timeInfo) => {
#       const lectureStart = timeInfo[0];
#       const lectureEnd = timeInfo[1];
#       const isOverlap = newRoomTimes.find((roomTimeInfo) => {
#         const roomStart = roomTimeInfo[0];
#         const roomEnd = roomTimeInfo[1];
#         if (roomEnd > lectureStart && roomStart < lectureEnd) {
#           return true;
#         } else if (roomStart < lectureEnd && roomEnd > lectureStart) {
#           return true;
#         } else {
#           return false;
#         }
#       });
#       if (!isOverlap) {
#         newRoomTimes.push(timeInfo);
#         processedLectureTimes.push(timeInfo);
#       }
#     });
#     // 강의실의 빈 시간에 강의를 배정 후, 배정한 강의 필터링
#     lectureTimes = lectureTimes.filter((lt) => {
#       const i = lt[0];
#       const j = lt[1];
#       const isOverlap = processedLectureTimes.find((tmp) => {
#         const ii = tmp[0];
#         const jj = tmp[1];
#         if (i === ii && j === jj) {
#           return true;
#         }
#         return false;
#       });
#       return !isOverlap;
#     });
#     // 새 강의실 개수 추가
#     roomCnt++;
#   }
#   return roomCnt;
# };

#
#
# 풀이1 시간초과
# N = int(input())
# lectureTimes = []
# for _ in range(N):
#   s, e = list(map(int, input().split()))
#   lectureTimes.append([s, e])

# roomCnt = 0
# processedLectureTimes = []
# while len(lectureTimes) != 0:
#   newRoomTimes = []
#   newLectureTimes = lectureTimes
#   for lectureTimeInfo in lectureTimes:
#     ls, le = lectureTimeInfo
#     isOverlap = False if len(newRoomTimes) == 0 else True
#     for roomTimeInfo in newRoomTimes:
#       rs, re = roomTimeInfo
#       if re > ls & rs < le: pass
#       if rs < le & re > ls: pass
#       else: isOverlap = False
    
#     if isOverlap == False:
#       newRoomTimes.append(lectureTimeInfo)
#       processedLectureTimes.append(lectureTimeInfo)
#       newLectureTimes.remove(lectureTimeInfo)

#   lectureTimes = newLectureTimes
#   roomCnt += 1

# print(roomCnt)
  


#
#
# 풀이2
# 반복문을 돌면서 처리한 강의를 빼주지않고 우선순위큐로 바로 처리해주자
# 1 주어진 강의시간을 빨리 시작하는걸로 정렬한다.
# 2-1 새 강의는 일단 넣어줘
# 2-2 진행중인 강의가 있는 경우, 가장 빨리 끝나는 강의 시간 <= 새강의시작시간 이면 그 강의실은 새 강의만 진행하게 이전 강의는 빼줘
import heapq
import sys

N = int(input())
lectureTimes = []
for _ in range(N):
  # lectureTimes.append(list(map(int, input().split())))
  # for performance
  lectureTimes.append(list(map(int, sys.stdin.readline().split())))

# 강의 시작 시간 오름차순 정렬
# lectureTimes = sorted(lectureTimes, key = lambda timeinfo: timeinfo[0])
lectureTimes.sort(key=lambda timeinfo: timeinfo[0])

usedRooms = []
for timeinfo in lectureTimes:
  startTime, endTime = timeinfo
  if len(usedRooms) != 0 and usedRooms[0] <= startTime:
    heapq.heappop(usedRooms)
  heapq.heappush(usedRooms, endTime)

print(len(usedRooms))







