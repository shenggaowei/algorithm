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

  remove(index) {
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
}

const list = new LinkedList();
list.push("嘻嘻1");
list.push("哈哈2");
list.push("嘻嘻3");
console.log(JSON.stringify(list.head));
list.remove(2);
console.log(JSON.stringify(list.head));
