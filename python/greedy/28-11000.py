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
N = int(input())
lectureTimes = []
for _ in range(N):
  s, e = list(map(int, input().split()))
  lectureTimes.append([s, e])

roomCnt = 0
processedLectureTimes = []
while len(lectureTimes) != 0:
  newRoomTimes = []
  newLectureTimes = lectureTimes
  for lectureTimeInfo in lectureTimes:
    ls, le = lectureTimeInfo
    isOverlap = False if len(newRoomTimes) == 0 else True
    for roomTimeInfo in newRoomTimes:
      rs, re = roomTimeInfo
      if re > ls & rs < le: pass
      if rs < le & re > ls: pass
      else: isOverlap = False
    
    if isOverlap == False:
      newRoomTimes.append(lectureTimeInfo)
      processedLectureTimes.append(lectureTimeInfo)
      newLectureTimes.remove(lectureTimeInfo)

  lectureTimes = newLectureTimes
  roomCnt += 1

print(roomCnt)
  




        
