N = input()
wordList = []
for i in range(int(N)):
  temp = input()
  wordList.append(list(temp))

numberList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
# 1 - 알파벳별로 가중치를 구한다. 
charDic = {}
for i in range(len(wordList)):
  for j in range(len(wordList[i])):
    if wordList[i][j] not in charDic:
      charDic[wordList[i][j]] = pow(10, len(wordList[i]) - j - 1)
    else:
      charDic[wordList[i][j]] += pow(10, len(wordList[i]) - j - 1)

# 2 - 가중치가 큰 순서대로 정렬된 key배열을 만든다.
keyList = list(charDic.keys())
for i in range(len(keyList) - 1):
  for j in range(len(keyList) - i - 1):
    if(charDic[keyList[j]] < charDic[keyList[j + 1]]):
      keyList[j], keyList[j + 1] = keyList[j + 1], keyList[j]

# 3 - 합을 구한다.
maximum = 0;
for i in keyList:
  maximum += numberList.pop(0) * charDic[i]

print(maximum)


