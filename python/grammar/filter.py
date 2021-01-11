#
#
# filter(함수, literable)
# 두번째 인수인 반복 가능한 자료형 요소들을 첫번째 인자 함수에 하나씩 입력하여 리턴값이 참인 것만 묶어서 돌려준다.
# 함수의 리턴 값은 참이나 거짓이어야 한다.
inputs = [-2, -3, 5, 6]
def getOnlyPositiveNumber(inputs):
  result = []
  for item in inputs:
    if item > 0:
      result.append(item)
    else:
      pass
  return result

positiveNumbers = getOnlyPositiveNumber(inputs)
# print(positiveNumbers)

def getOnlyPositiveNumber(item):
  return item > 0

positiveNumbers = list(filter(getOnlyPositiveNumber, inputs))
# print(positiveNumbers)

positiveNumbers = list(filter(lambda item: item >0, inputs))
# print(positiveNumbers)


# def filter(cb, _list):
#   filtered = []
#   for item in _list:
#     if cb(item) == True:
#       filtered.append(item)
#   return filtered

result = list(filter(lambda x: x%2 == 0, [1,2,3,4,5,6,7,8,9,10]))

print(result)