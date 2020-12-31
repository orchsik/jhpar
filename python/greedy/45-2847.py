# export const solution = (inputList: number[]) => {
#   const scoreList = inputList.slice(1);
#   let minusCnt = 0;
#   for (let i = scoreList.length - 1; i > 0; i--) {
#     let a = scoreList[i];
#     let b = scoreList[i + 1];
#     if (a >= b) {
#       minusCnt += a - b + 1;
#       scoreList[i] = b - 1;
#     }
#   }
#   return minusCnt;
# };

N = int(input())
scoreList = [int(input()) for _ in range(N)]

minusCnt = 0
for i in range(N - 1, 0, -1): # rnage(시작숫자, 종료숫자, step)
  if scoreList[i-1] >= scoreList[i]:
    minusCnt += scoreList[i-1] - scoreList[i] + 1
    scoreList[i-1] = scoreList[i] - 1

print(minusCnt)


