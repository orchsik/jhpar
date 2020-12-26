n = int(input())
pList = list(map(int, input().split()))

# n = 5;
# pList = [1,2,3,4,5]

total = 0
pList.sort()
for i in range(n):
    for j in range(i+1):
        total += pList[j]
print(total)