N = int(input());
inputs = []
for i in range(N):
  inputs.append(int(input()))

max = 0
inputs.sort(key=lambda v: v)

# group naturals and minuses
naturals = list(filter(lambda v: v>0, inputs))
minuses = list(filter(lambda v: v<0, inputs))
minuses.reverse()

# if minuses length odd number and have zero then remove minimum
zeroIdx = -1
for i, v in enumerate(inputs):
  if v == 0:
    zeroIdx = i
    break;
if zeroIdx != -1 and len(minuses) % 2 == 1:
  minuses.remove(minuses[0])

# add natural group item
while naturals:
  x = naturals.pop()
  if len(naturals):
    y = naturals.pop()
    if y == 1:
      max += x + y
    else:
      max += x * y 
  else:
    max += x

# add minuses group item
while minuses:
  x = minuses.pop()
  if len(minuses):
    y = minuses.pop()
    max += x * y
  else:
    max += x

print('max', max)

