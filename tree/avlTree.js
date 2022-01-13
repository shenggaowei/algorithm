import { defaultCompareFn } from "./utils/lodash.js";
import BinarySearchTree from "./binarySearchTree.js";

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompareFn) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }
  rotationLR(node) {}
  rotationRL(node) {}
}

export default AVLTree;
