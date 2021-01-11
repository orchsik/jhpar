graph = {}
graph['cab'] = ['cat','car']
graph['car'] = ['cat','bar']
graph['cat'] = ['mat','bat']
graph['bar'] = ['bat']
graph['mat'] = ['bat']
graph['bat'] = []

# cab 에서 출발 / bat 도착
# 최단 경로는?

from collections import deque

def search(site):
  search_queue = deque()
  search_queue += graph[site]
  searched = []
  while search_queue:
    site = search_queue.popleft()
    if not site in searched:
      if site == 'bat':
        goalIdx = -1
        for i, _site in enumerate(searched):
          nodes = graph[_site]
          if 'bat' in nodes: 
            goalIdx = i
            break
        print('도착 / 최단경로: ', len(searched[0: goalIdx]) + 2)
        return True
      else:
        searched.append(site)
        search_queue += graph[site]
  return False

search('cab')