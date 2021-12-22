import { Node } from "./utils/node.js";
import LinkedList from "./linkedList.js";
import { defaultEquals } from "./utils/lodash.js";

// 基于单向链表
class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === undefined) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  // 移除下标项
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.count());
          this.head = this.head.next;
          current.next = this.head.next;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

const linkedList = new CircularLinkedList();
linkedList.insert(1, 0);
linkedList.insert(2, 1);
linkedList.insert(3, 1);
const str = linkedList.toString();
console.log(str);
const removeElement = linkedList.removeAt(2);
console.log(removeElement);
console.log(linkedList.toString());
