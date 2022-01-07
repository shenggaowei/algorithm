import { Compare, defaultCompareFn } from "./utils/lodash.js";
import { Node } from "./utils/node.js";

class BinarySearchTree {
  constructor(compareFn = defaultCompareFn) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(root, key) {
    if (this.compareFn(key, root.key) === Compare.LESS_THAN) {
      if (root.left === null) {
        root.left = new Node(key);
      } else {
        this.insertNode(root.left, key);
      }
    } else {
      if (root.right === null) {
        root.right = new Node(key);
      } else {
        this.insertNode(root.right, key);
      }
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  // 中序遍历
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  // 先序遍历
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  // 后序遍历
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  // 找出最小值
  minNode(node) {
    let current = node;
    while (current && current.left !== null) {
      current = current.left;
    }
    return current.key;
  }

  max() {
    return this.maxNode(this.root);
  }

  // 找出最大值
  maxNode(node) {
    let current = node;
    while (current && current.right !== null) {
      current = current.right;
    }
    return current.key;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  // 寻找节点的值
  searchNode(node, key) {
    if (node === null) {
      return false;
    }

    if (node.key > key) {
      return this.searchNode(node.left, key);
    } else if (node.key < key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key) {
    return this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) {
      return node;
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(18);
tree.insert(25);
tree.insert(6);

const min = tree.min();
const max = tree.max();

console.log("tree的最大值和最小值分别是=>", max, min);
let ret = (key) => (tree.search(key) ? `${key}存在` : `${key}不存在`);

console.log(ret(7));
console.log(ret(29));
console.log(ret(18));
console.log(ret(0));
/**
 * 递归
 * 要想理解递归，首先要理解递归
 * 递归采用栈结构，层层递进弹出。
 * 1. 递归起点
 * 2. 递归终点
 * 3. 递归推进
 *
 * 递推到终点(入栈)，递归到起点(出栈)。
 */
