# 다익스트라 알고리즘 원리
# 1. 가장 가격이 싼 정점, 즉 도달하는데 시간이 가장 적게 걸리는 정점을 찾는다.
# 2. 이 정점의 이웃 정점에 대해 현재의 가격보다 더 싼 경로가 존재하는지 확인한다. 만약 존재한다면 가격과 부모를 수정한다. 
# 3. 그래프 상의 모든 정점에 대해 이러한 일을 반복한다.
# 4. 최종경로를 계산한다
# Cf) 가중치가 음수인 경우 사용불가 (벨만-포드를 사용하세요)
#####

# 3개의 Hash Table 이 필요하다
# 그래프 / 가격 / 부모
graph= {}
graph["start"] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2
graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {}

infinity = float('inf')
costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = infinity

parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = None

# 처리한 정점 리스트
processed = []

def find_lowest_cost_node(costs):
  lowest_cost = float('inf')
  lowest_cost_node = None
  for node in costs:
    cost = costs[node]
    if cost < lowest_cost and node not in processed:
      lowest_cost = cost
      lowest_cost_node = node
  return lowest_cost_node

node = find_lowest_cost_node(costs)
while node is not None:
  cost  = costs[node]
  neighbors = graph[node]
  for _node in neighbors.keys():
    new_cost = cost + neighbors[_node]
    if costs[_node] > new_cost:
      costs[_node] = new_cost
      parents[_node] = node
  processed.append(node)
  node = find_lowest_cost_node(costs)


def solution(node, answer = ''):
  parentValue = parents[node]
  del parents[node]

  for node in parents.keys():
    if parentValue == node:
      return solution(parentValue, parentValue + ' -> ' + answer)
  return 's -> '  + answer  + 'end'
      
print(solution('fin'))
