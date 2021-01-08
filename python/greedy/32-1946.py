# export const solution = (inputs: number[][]) => {
#   inputs.sort((i, j) => j[0] - i[0]);

#   let passCnt = 0;
#   for (let i = 0; i < inputs.length; i++) {
#     const stu = inputs[i];
#     const others = inputs.slice(i + 1);
#     const isFail = others.find((other) => {
#       if (other[1] < stu[1]) {
#         return true;
#       } else {
#         return false;
#       }
#     });

#     if (!isFail) {
#       passCnt++;
#     }
#   }

#   return passCnt;
# };

#
#
# 시간초과!!!!!!!!!!!!!!!!!!!
def _find(other, stu):
  if other[1] < stu[1]:
    return True
  else: False

import sys

testCnt = int(sys.stdin.readline())
for i in range(testCnt):
  stuCnt = int(sys.stdin.readline())
  scores = []
  for i in range(stuCnt):
    scores.append(list(map(int, sys.stdin.readline().split())))
  scores.sort(key=lambda item: item[0])

  passCnt = 0
  for i in range(stuCnt):
    stu = scores[i]
    others = scores[i+1:]
    if len(others) == 0:
      passCnt+=1
      break
    isFail = True;
    for other in others:
      isFail = _find(other, stu)
      if isFail:
        passCnt += 1
        break

  print(passCnt)
  
      
      

