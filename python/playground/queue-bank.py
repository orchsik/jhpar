# 은행이다. 4개의 숫자만 저장할 수 있는 은행이야
# 정수를 입력받는다
# 자연수가 입력되면 저장한다
# 0이 입력되면 가장 먼저 저장된 값을 돌려준다
# -1이 입력되면 은행 종료한다.

MAX_SIZE = 4
queue_bank = [None] * MAX_SIZE
head = 0
tail = -1
bank_size = 0


def enque(N):
  global tail
  global bank_size
  if bank_size == MAX_SIZE:
    print('full !!!')
  else:
    tail += 1
    tail = tail % MAX_SIZE
    queue_bank[tail] = N
    bank_size +=  1


def deque():
  global head
  global bank_size
  if bank_size == 0:
    print('empty !!!')
  else:
    r = queue_bank[head]
    queue_bank[head] = None
    head += 1
    head = head % MAX_SIZE
    bank_size -= 1
    print(r)
    

while True:
  N = int(input())
  if N > 0:
    enque(N)
  elif N == 0:
    deque()
  else:
    print('good bye')

  print(queue_bank, head, tail)
  if N < 0:
      break

