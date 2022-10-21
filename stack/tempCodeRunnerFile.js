function flatArr(arr) {
  let q = [arr];
  let a = [];
  while (q.length) {
    const t = q.shift();
    if (Array.isArray(t)) {
      for (let i = 0; i < t.length; i++) {
        q.push(t[i]);
      }
    } else {
      a.push(t);
    }
  }
  return a;
}

let a = [1, [2, [2, 3]], [3, [4, [5]]], [6, 7, 8, [9, 10]]];
let ret = flatArr(a);
console.log(ret);
