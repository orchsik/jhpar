# 이진트리 기반 최소힙 자료구조 제공 (우선순위큐 느낌)
# 일반 리스트를 최소힙처럼 다를 수 있게 해준다.
# 자료구조가 아니라 함수다. 필요할 때마다 heapq를 사용
import heapq

heap=[]

# 추가: heappush(_list, _item)
heapq.heappush(heap, 4)
heapq.heappush(heap, 1)
heapq.heappush(heap, 7)
heapq.heappush(heap, 3)
print(heap) # [1, 3, 7, 4]

# 삭제: heappop(_list)
print(heapq.heappop(heap), '/', heap)  # 1 / [3, 4, 7]
print(heapq.heappop(heap), '/', heap)  # 3 / [4, 7]
print(heapq.heappop(heap), '/', heap)  # 4 / [7]
print(heapq.heappop(heap), '/', heap)  # 7 / []

# 삭제X 보기: []
heapq.heappush(heap, 4)
heapq.heappush(heap, 1)
heapq.heappush(heap, 7)
heapq.heappush(heap, 3)
print(heap[0])
print(heap[0])
print(heap[0])
print(heap[0])

# 기존리스트 > heap 변환: heapify(_list)
heap = [4, 1, 7, 3, 8, 5]
heapq.heapify(heap)
print(heap) # [1, 3, 5, 4, 8, 7]

# 최대힙: heappush(_list, (우선순위, 값))
nums = [4, 1, 7, 3, 8, 5]
heap = []
for num in nums:
  heapq.heappush(heap, (-num, num))
while heap:
  print(heapq.heappop(heap)[1]) # 8 7 5 4 3 1

# K번째 최소값/최대값
def kth_smallest(nums, k):
  heap = []
  for num in nums:
    heapq.heappush(heap, num)

  kth_min = None
  for i in range(k):
    kth_min = heapq.heappop(heap)
  return kth_min

print(kth_smallest([4, 1, 7, 3, 8, 5], 3)) # 4

# 힙 정렬
def heap_sort(nums):
  heap = []
  for num in nums:
    heapq.heappush(heap, num)
  
  sorted_nums = []
  while heap:
    sorted_nums.append(heapq.heappop(heap))
  return sorted_nums

print(heap_sort([4, 1, 7, 3, 8, 5])) # [1, 3, 4, 5, 7, 8]