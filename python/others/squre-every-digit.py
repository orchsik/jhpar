def square_digits(num):
  result = ''
  for word in list(str(num)):
    result += str(int(word) ** 2)
  return int(result)

def square_digits2(num):
  return ''.join(str(int(i)**2) for i in str(num))



print(square_digits(9119))
print(square_digits2(9119))