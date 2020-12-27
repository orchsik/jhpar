expressionList = input().split('-')


minimum = 0
for i in expressionList[0].split('+'):
  minimum += int(i)
for substr in expressionList[1:]: # 리스트슬라이싱 = index 1부터 끝가지 슬라이싱
  for i in substr.split('+'):
    minimum -= int(i)

print(minimum)