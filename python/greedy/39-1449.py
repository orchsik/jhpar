N, L = map(int, input().split(' '))
leakPositionList = list(map(int, input().split(' ')))
leakPositionList.sort()

tapeCnt = 1;
tapeScope = leakPositionList[0] - 0.5 + L
for idx in range(len(leakPositionList[1:])):
  position = leakPositionList[idx+1]
  if position + 0.5 > tapeScope:
    tapeCnt += 1
    tapeScope = position - 0.5 + L

print(tapeCnt)