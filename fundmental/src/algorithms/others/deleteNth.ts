export function deleteNth(arr: number[], n: number) {
  const tool: { [K: number]: number } = {};
  return arr.filter((D) => {
    if (tool[D] >= n) return false;
    tool[D] = ++tool[D] || 1;
    return true;
  });
}

// deleteNth([1, 1, 1, 1], 2); // return [1,1]
// deleteNth([20, 37, 20, 21], 1); // return [20,37,21]
