// export const solution = (lectureTimes: number[][]) => {
//   let roomCnt = 0;
//   const processedLectureTimes: number[][] = [];
//   // 모든 강의가 배정될 때까지 반복
//   while (lectureTimes.length !== 0) {
//     // 새 강의실의 비어있는 시간에 강의를 배정
//     let newRoomTimes: number[][] = [];
//     lectureTimes.forEach((timeInfo) => {
//       const lectureStart = timeInfo[0];
//       const lectureEnd = timeInfo[1];
//       const isOverlap = newRoomTimes.find((roomTimeInfo) => {
//         const roomStart = roomTimeInfo[0];
//         const roomEnd = roomTimeInfo[1];
//         if (roomEnd > lectureStart && roomStart < lectureEnd) {
//           return true;
//         } else if (roomStart < lectureEnd && roomEnd > lectureStart) {
//           return true;
//         } else {
//           return false;
//         }
//       });
//       if (!isOverlap) {
//         newRoomTimes.push(timeInfo);
//         processedLectureTimes.push(timeInfo);
//       }
//     });
//     // 강의실의 빈 시간에 강의를 배정 후, 배정한 강의 필터링
//     lectureTimes = lectureTimes.filter((lt) => {
//       const i = lt[0];
//       const j = lt[1];
//       const isOverlap = processedLectureTimes.find((tmp) => {
//         const ii = tmp[0];
//         const jj = tmp[1];
//         if (i === ii && j === jj) {
//           return true;
//         }
//         return false;
//       });
//       return !isOverlap;
//     });
//     // 새 강의실 개수 추가
//     roomCnt++;
//   }

//   return roomCnt;
// };

// // 우선순위큐 사용해서 하자
import { MinPQ } from '../../data-structures/queue/MinPQ';

export const solution = (lectureTimes: number[][]) => {
  // 1 강의시작 시간으로 정렬
  lectureTimes.sort((item_1, item_2) => {
    return item_1[0] - item_2[0];
  });

  const minpq = new MinPQ();
  lectureTimes.forEach((timeinfo) => {
    const [startime, endtime] = timeinfo;
    if (minpq.size() !== 0 && minpq.peek() <= startime) {
      minpq.deque();
    }
    minpq.enque(endtime);
  });

  return minpq.size();
};
