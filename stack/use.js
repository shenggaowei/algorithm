/**
 * 有效的括号 只判断()
 * @param {string} str
 * @returns
 */
function brackets(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
}

/**
 * 多括号
 * @param {string} str
 * @returns
 */
function bracketsIsValid(str) {
  if (str % 2 === 1) {
    return false;
  }
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      stack.push(str[i]);
    } else {
      const top = stack[str.length - 1];
      if (map.get(top) === str[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/**
 * 迭代实现先序遍历
 * @param {tree} root
 * @returns
 */
function preOrder(root) {
  const stack = [];
  const res = [];

  if (root) {
    stack.push(root);
  }

  while (stack.length) {
    const t = stack.pop();
    res.push(t.val);
    if (t.right) {
      stack.push(t.right);
    }
    if (t.left) {
      stack.push(t.left);
    }
  }

  return res;
}

/**
 * 拍平数组 广度优先遍历
 */

function flatArr(arr) {
  let q = [arr];
  let a = [];
  while (q.length) {
    const t = q.pop();
    if (Array.isArray(t)) {
      for (let i = 0; i < t.length; i++) {
        q.unshift(t[i]);
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
