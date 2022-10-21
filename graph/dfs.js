import graph from "./graph.js";

const visited = new Set();

const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};

const dfs2 = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((ele) => {
    if (!visited.has(ele)) {
      dfs2(ele);
    }
  });
};

dfs2(2);
