const dfs2 = (n) => {
  console.log(n);
  visited.push(n);
  graph[n].forEach((ele) => {
    if (!visited.has(ele)) {
      dfs2(ele);
    }
  });
};

dfs2(2);
