graph = {}

graph['s'] = {}
graph['s']['a'] = 5
graph['s']['b'] = 2

graph['a'] = {}
graph['a']['c'] = 4
graph['a']['d'] = 2

graph['b'] = {}
graph['b']['a'] = 8
graph['b']['d'] = 7

graph['c']={}
graph['c']['end'] = 3
graph['c']['d'] = 6

graph['d'] = {}
graph['d']['end'] = 1

graph['end'] = {}

infinity = float('inf')
costs = {}
costs['a'] = 5
costs['b'] = 2
costs['c'] = infinity
costs['d'] = infinity
costs['end'] = infinity

parents = {}
parents['a'] = 's'
parents['b'] = 's'

processed = []

def find_miminum_node(costs):
  minimum = float('inf')
  minimum_node = None
  for node in costs:
    cost = costs[node]
    if minimum > cost and node not in processed:
      minimum = cost
      minimum_node = node
  return minimum_node

minimum_node = find_miminum_node(costs)
while minimum_node is not None:
  cost = costs[minimum_node]
  neighbors = graph[minimum_node]
  for node in neighbors:
    new_cost = cost + neighbors[node]
    if costs[node] > new_cost:
      costs[node] = new_cost
      parents[node] = minimum_node
  processed.append(minimum_node)
  minimum_node = find_miminum_node(costs)

# print('parents', parents)

def solution(node, answer = ''):
  parentValue = parents[node]
  del parents[node]

  for node in parents.keys():
    if parentValue == node:
      return solution(parentValue, parentValue + ' -> ' + answer)
  return 's -> '  + answer  + 'end'


print('route: ', solution('end'))
print('weight: ', costs['end'])
