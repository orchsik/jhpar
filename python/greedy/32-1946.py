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
# def _find(other, stu):
#   if other[1] < stu[1]:
#     return True
#   else:
#     return False

# import sys

# testCnt = int(sys.stdin.readline())
# for i in range(testCnt):
#   stuCnt = int(sys.stdin.readline())
#   ranks = []
#   for i in range(stuCnt):
#     ranks.append(list(map(int, sys.stdin.readline().split())))
#   ranks.sort(key=lambda item: -item[0])

#   passCnt = 0
#   for i in range(stuCnt):
#     stu = ranks[i]
#     others = ranks[i+1:]
#     if len(others) == 0:
#       passCnt+=1
#       break
#     for other in others:
#       isFail = _find(other, stu)
#       if isFail == False:
#         passCnt += 1
#         break

#   print(passCnt)

#
#
# 시간초과
# import sys

# testCnt = int(sys.stdin.readline())
# for i in range(testCnt):
#   stuCnt = int(sys.stdin.readline())
#   ranks = []
#   for i in range(stuCnt):
#     ranks.append(list(map(int, sys.stdin.readline().split())))
#   ranks.sort(key=lambda item: item[0])

#   ranks = list(map(lambda item: item[1], ranks))

#   passCnt = 0
#   for i in range(len(ranks)):
#     if i == 0:
#       passCnt += 1
#     else:
#       rank = ranks[i]
#       others = ranks[0:i]
#       minRank = min(others)
#       if minRank > rank:
#         passCnt += 1
  
#   print(passCnt)




#
#
# 스피드업!!!!!!!!!!!!
# 위에 시간초과 코드에서 최소 등수 구할대 마다 min() 으로 전체 리스트를 돌아서 느려진다...
# 1 일단 앞에꺼 등수 오름차순으로 정렬을 해서, 뒤에서 등수로만 비교를 해주자
# 2 뒤에 등수리스트의 각 요소들은 앞선 요소들보다 작아야 통과!
# 3 앞선 요소의 최소 등수 보다 현재 학생의 등수가 작으면 통과 + 최소 랭크 업데이트
import sys

testCnt = int(sys.stdin.readline())
for i in range(testCnt):
  stuCnt = int(sys.stdin.readline())
  ranks = []
  for i in range(stuCnt):
    ranks.append(list(map(int, sys.stdin.readline().split())))
  ranks.sort(key=lambda item: item[0])

  # 뒤에 등수만 모아~
  ranks = list(map(lambda item: item[1], ranks))

  passCnt = 0
  minRank = ranks[0]
  for i in range(len(ranks)):
    if i == 0:
      passCnt += 1
    else:
      if minRank > ranks[i]:
        minRank = ranks[i]
        passCnt += 1
  
  print(passCnt)

