graph = {}

graph['s'] = {}
graph['s']['a'] = 10

graph['a'] = {}
graph['a']['b'] = 20

graph['b'] = {}
graph['b']['end'] = 30
graph['b']['c'] = 1

graph['c'] = {}
graph['c']['a'] = 1

graph['end'] = {}

infinity = float('inf')
costs = {}
costs['a'] = 10
costs['b'] = infinity
costs['c'] = infinity
costs['end'] = infinity

parents = {}
parents['a'] = 's'

processed = []

def find_miminum_node(costs):
  minimum = float('inf')
  minimum_node = None
  for node in costs:
    if minimum > costs[node] and node not in processed:
      minimum = costs[node]
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

print('weigh: ', costs['end'])