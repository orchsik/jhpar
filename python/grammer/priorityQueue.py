# minheap 기반으로 최소값 우선으로 정렬된다.
from queue import PriorityQueue

# 초기화 - default maxsize infinite
pque = PriorityQueue()
# maxsize set
pque = PriorityQueue(maxsize=8)

# 원소추가
pque.put(3)
pque.put(1)
pque.put(2)

# 원소삭제
print(pque.get()) # 1
print(pque.get()) # 2
print(pque.get()) # 3

# 정렬기준 변경: (우선순위, 값)의 튜플 형태로 데이터를 추가하고 제거하면 된다.
pque.put((3, 'apple'))
pque.put((1, 'banana'))
pque.put((2, 'cherry'))
print(pque.get()[1]) # banana
print(pque.get()[1]) # cherry
print(pque.get()[1]) # apple

# 역정릴TIP
pque.put((-3, 'apple'))
pque.put((-1, 'banana'))
pque.put((-2, 'cherry'))
print(pque.get()[1]) # apple
print(pque.get()[1]) # cherry
print(pque.get()[1]) # banana

# 크기
pque.put(3)
pque.put(2)
pque.put(1)
print(pque.queue())
