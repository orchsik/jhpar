# export const solution = (inputs: number[][]) => {
#   const nm = inputs.splice(0, 1)[0];
#   const N = nm[0];
#   const M = nm[1];
#   const matrix_1 = inputs.splice(0, N);
#   const matrix_2 = inputs.splice(0, N);

#   const changeN = N - 3;
#   const changeM = M - 3;
#   let changedMatrix = matrix_1;
#   let changeCnt = 0;
#   for (let n = 0; n <= changeN; n++) {
#     for (let m = 0; m <= changeM; m++) {
#       const tmp = changedMatrix.slice(n, n + 3);
#       for (const item of tmp) {
#         item[m] = item[m] ? 0 : 1;
#         item[m + 1] = item[m + 1] ? 0 : 1;
#         item[m + 2] = item[m + 2] ? 0 : 1;
#       }
#       changeCnt++;
#       changedMatrix = [...changedMatrix.slice(0, n), ...tmp, ...changedMatrix.slice(n + 4)];

#       const isContinue = changedMatrix.find((d, i) => {
#         const isContinue = matrix_2[i].find((item, j) => {
#           if (item !== d[j]) {
#             return true;
#           }
#           return false;
#         });
#         return isContinue === undefined ? false : true;
#       });
#       if (!isContinue) break;
#     }
#   }

#   return changeCnt;
# };

N, M = list(map(int, input().split())) 
matrix1 = []
for i in range(N):
  matrix1.append(list(map(int, input())))
matrix2= []
for i in range(N):
  matrix2.append(list(map(int, input())))

if N < 3 or M < 3:
  isDifferent = False
  for i in range(N):
    for j in range(M):
      if matrix1[i][j] != matrix2[i][j]:
        isDifferent = True
        break
  print(-1 if isDifferent else 0)
else:

  changeN = N -3
  changeM = M -3
  changedMatrix = matrix1
  changeCnt = 0
  for n in range(changeN+1):

    for m in range(changeM+1):
      changeCnt += 1
      
      tmp = changedMatrix[n: n+3]
      for item in tmp:
        item[m] = 1 if item[m] == 0 else 0
        item[m+1] = 1 if item[m+1] == 0 else 0
        item[m+2] = 1 if item[m+2] == 0 else 0

      if n+4 <= changeN:
        changedMatrix = changedMatrix[0:n] + tmp + changedMatrix[n+4]
      else:
        changedMatrix = changedMatrix[0:n] + tmp

      # 목표행렬과 일치하면 그만 돌고 나가자
      isEnd = False
      for i, item in enumerate(changedMatrix):
        destItem = matrix2[i]
        for idx in range(M):
          if item[idx] != destItem[idx]:
            isEnd = True
            break

  print(changeCnt)