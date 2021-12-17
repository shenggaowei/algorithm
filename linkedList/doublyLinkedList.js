import { DoublyNode } from "./utils/node.js";
import LinkedList from "./linkedList.js";
import { defaultEquals } from "./utils/lodash.js";

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index) {
    // 1 越界检查 2 在头插入 3 在尾插入 4 在中间插入
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      const node = new DoublyNode(element);
      // 第一项
      if (index === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
        // 最后一项
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
        //中间的几项
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  remove(index) {
    // 1 越界检查
    // 2 在头删除
    // 3 在尾删除
    // 4 在中间删除
    if (index == 0) {
      const current = this.head;
      if (this.count === 0) {
        this.head = undefined;
      } else {
        this.head = current.next;
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      const current = this.tail;
      const previous = current.prev;
      previous.next = undefined;
      this.tail = previous;
    } else {
      const current = this.getElementAt(index);
      const previous = current.prev;
      const next = current.next;
      previous.next = next;
      next.prev = previous;
    }
    this.count--;
  }
}

const doublyList = new DoublyLinkedList();
doublyList.insert("小红", 0);
doublyList.insert("小明", 1);
doublyList.insert("小强", 2);
console.log(doublyList.toString());
doublyList.remove(1);
console.log(doublyList.toString());
