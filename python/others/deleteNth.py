def deleteNth(arr, n):
  tool = {}
  result = []
  for i in arr:
    if i not in tool:
      tool[i] = 0
    else:
      tool[i] += 1

    if tool[i] < n:
      result.append(i)
  return result

  
print(deleteNth([1, 1, 1, 1], 2)); # return [1,1]
print(deleteNth([20, 37, 20, 21], 1)); # return [20,37,21]