#
#
# reduce
# python3 부터 내장함수에서 빠짐
# reduce(function, iterable[, initializer])
from functools import reduce
result = reduce(lambda x,y: x+y, [1,2,3,4,5], 1000)
print(result)

inputs = [1,2,3,4,5,100,6,7,8,9,10]
def findMax(inputs):
  result = 0
  for item in inputs:
    if result < item:
      result = item
  return result

inputMax = findMax(inputs)
print(inputMax)

inputMax = reduce(lambda x,y: x if x > y else y, inputs)
print(inputMax)




