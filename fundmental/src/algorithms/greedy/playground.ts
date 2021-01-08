import { MinPQ } from '../../data-structures/queue/MinPQ';

export const solution = () => {
  const lectures = [
    [3, 5],
    [1, 3],
    [2, 4],
  ];

  // 일단 모든 강의를 다 집어 넣어야 함.
  // 최소 강의실을 사용해서
  // 각 강의실의 종료시간을 갖는 리스트를 만들자
  // 그리고 종료시간 <= 시작시간 인경우는 종료시간을 새로운 종료시간으로 교체
  // 그 외에는 리스트에 종료시간 새로 추가

  lectures.sort((i, j) => i[0] - j[0]);

  let eachRoomEndTimes = new MinPQ();
  lectures.forEach((time) => {
    if (eachRoomEndTimes.size() && eachRoomEndTimes.peek() <= time[0]) {
      eachRoomEndTimes.deque();
    }
    eachRoomEndTimes.enque(time[1]);
  });

  console.log(eachRoomEndTimes.size());
};
