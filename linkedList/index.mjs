import { Node } from "./utils/node.mjs";
import { defaultEquals } from "./utils/lodash.mjs";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current?.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
}

const list = new LinkedList();
list.push("哈哈");
list.push("嘻嘻");
console.log(list);
