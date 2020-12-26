N, K = map(int, input().split())
coninList = [int(input()) for _ in range(N)]
# print('N:', N)
# print('K:', K)
# print('coninList:', coninList)

R = 0
for i in range(N):
  # print('i:', i+1)
  # print('reverse coninList item', coninList[-(i+1)])
  coin = coninList[-(i+1)]
  if K >= coin:
    mok = K//coin
    K -= coin * mok
    R += mok
  
print(R)