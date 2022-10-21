import graph from "./graph.js";

const visited = new Set();
const q = [2];
// 注意判断入队需要在进队的时候进行判断。防止队列加入重复的元素。
while (q.length) {
  const n = q.shift();
  console.log(n);
  visited.add(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
    }
  });
}
