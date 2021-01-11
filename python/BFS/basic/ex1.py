# s에서 f로 가는 최단 경로를 구하세요

graph = {}
graph['s'] = ['a','b']
graph['a'] = ['c', 'f']
graph['b'] = ['c', 'd']
graph['c'] = []
graph['d'] = ['f']
graph['f'] = []

from collections import deque


def search(name):
  search_queue = deque()
  search_queue += graph[name]
  searched = []
  while search_queue:
    site = search_queue.popleft()
    if not site in search_queue:
      if site == 'f':
        print('도착 / 최단경로: ', len(searched))
        return True
      else:
        search_queue += graph[site]
        searched.append(site)
  return False

search('s')
