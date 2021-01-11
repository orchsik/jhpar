#
#
# 3항 연산자
inputValue = 10
def check(inputValue):
  if inputValue > 10: print('10초과')
  else: print('10이하')
check(inputValue)

def check2(inputValue):
  return print('10초과') if inputValue > 10 else print('10이하')
check2(inputValue)

inputList = [1, -1, 0]
result = ['양수' if item > 0 else ('음수' if item < 0 else 0) for item in inputList]
print(result)