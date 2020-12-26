change = 1000 - int(input())
moneyList = [500, 100, 50, 10, 5, 1]

R = 0;
for item in moneyList:
  R += change // item
  change %= item

print(R)