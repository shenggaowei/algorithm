import LinkedList from "./linkedList.js";
import { defaultEquals, defaultCompareFn } from "./utils/lodash.js";

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompareFn) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert = (element, index = 0) => {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  };

  getIndexNextSortedElement = (element) => {
    let current = this.head;
    for (let i = 0; i < this.size() && current; i++) {
      const index = this.compareFn(element, current.element);
      if (index === -1) {
        return i;
      }
      current = current.next;
    }
    return this.size();
  };
}

const linkedList = new SortedLinkedList();
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(2);
linkedList.insert(8);
linkedList.insert(6);
linkedList.insert(5);
linkedList.insert(7);
console.log(linkedList.toString());
