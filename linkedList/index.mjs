import { Node } from "./utils/node.mjs";
import { defaultEquals } from "./utils/lodash.mjs";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  // 需要判断是插入第一个还是在最后进行插入
  push(element) {
    const node = new Node(element);
    if (this.count === 0) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.count++;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element);
      let cur = this.head;
      if (index === 0) {
        node.next = cur;
        this.head = node;
      } else {
        const pre = this.getElementAt(index - 1);
        node.next = pre.next;
        pre.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let cur = this.head;
      if (index === 0) {
        this.head = cur.next;
      } else {
        const pre = this.getElementAt(index - 1);
        cur = pre.next;
        pre.next = cur.next;
      }
      this.count--;
    }
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (!this.head) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size(); i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

const list = new LinkedList();
list.push("嘻嘻1");
list.push("哈哈2");
list.push("嘻嘻3");
list.push("哈哈3");
list.insert("嘻嘻4", 2);
console.log(JSON.stringify(list.head));
console.log(list.toString());
