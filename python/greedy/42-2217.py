N = int(input())
ropeList = [int(input()) for _ in range(N)]

ropeList.sort(reverse=True)
for i in range(N):
  ropeList[i] = ropeList[i] * (i+1)

print(max(ropeList))