N = int(input())
lookList = list(map(int, input().split()))

R = [0 for _ in range(N)]

for i in range(N+1):
  count = 0
  leftCnt = lookList[i-1]
  for j in range(N):
    if count == leftCnt and R[j] == 0:
      R[j] = i
      break
    if R[j] == 0:
      count +=1

for item in R:
  print(item, end =' ') # print 요소마다 끝에 ' '