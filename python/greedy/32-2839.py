# export const solution = (input: number) => {
#   const maxMok = Math.floor(input / 5);

#   let result = 0;
#   for (let currentMok = maxMok; currentMok > -1; currentMok--) {
#     const reminder = input - 5 * currentMok;
#     const reminderlist = String(reminder).split('');
#     const sum = reminderlist.reduce((acc, item) => {
#       return acc + +item;
#     }, 0);
#     if (sum % 3 === 0) {
#       result += currentMok;
#       result += sum / 3;
#       break;
#     }
#   }
#   result = result || -1;
#   return result;
# };

result = 0

N = int(input())
# 최대한 사용할 수 있는 5kg 개수
maxMok = N // 5

for currentMok in range(maxMok, -1, -1):
  reminder = N - 5 * currentMok
  reminderList = list(str(reminder))
  # 3kg 쓸 수 있는지 체크
  sum = 0
  for item in reminderList:
    sum += int(item)
  # 3kg 쓸 수 있으면 그만~
  if sum % 3 == 0:
    result += currentMok
    result += reminder // 3
    break

if result == 0: result = -1
print(result)