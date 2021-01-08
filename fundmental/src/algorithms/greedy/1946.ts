// 서류심사 성적과 면접시험 성적 중 적어도 하나가 다른 지원자보다 떨어지지 않는 자만 선발한다는 원칙을 세웠다.
// 즉, 어떤 지원자 A의 성적이 다른 어떤 지원자 B의 성적에 비해 서류 심사 결과와 면접 성적이 모두 떨어진다면 A는 결코 선발되지 않는다.
// 이러한 조건을 만족시키면서,
// 진영 주식회사가 이번 신규 사원 채용에서 선발할 수 있는 신입사원의 최대 인원수를 구하는 프로그램을 작성하시오.

// 느려~
// export const solution = (inputs: number[][]) => {
//   inputs.sort((i, j) => j[0] - i[0]);

//   let passCnt = 0;
//   for (let i = 0; i < inputs.length; i++) {
//     const stu = inputs[i];
//     const others = inputs.slice(i + 1);
//     const isFail = others.find((other) => {
//       if (other[1] < stu[1]) {
//         return true;
//       } else {
//         return false;
//       }
//     });

//     if (!isFail) {
//       passCnt++;
//     }
//   }

//   return passCnt;
// };

// 스피드업!!!!!!!!!
export const solution = (inputs: number[][]) => {
  const rearRanks = inputs.sort((i, j) => i[0] - j[0]).map((d) => d[1]);

  let minRank = rearRanks[0];
  let passCnt = 1;
  for (let i = 1; i < rearRanks.length; i++) {
    if (minRank > rearRanks[i]) {
      passCnt++;
      minRank = rearRanks[i];
    }
  }

  return passCnt;
};
