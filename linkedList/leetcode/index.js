// https://leetcode-cn.com/problems/remove-linked-list-elements/

/**
 * 1 移除头部指针
 * 2 移除中间指针
 * 3 移除尾部指针
 * @param {1} head
 * @param {*} val
 * @returns
 */
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }
  while (head.val === val) {
    head = head.next;
  }
  let pre = head;
  while (pre && pre.val) {
    let cur = pre.next;
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
  }
  return head;
};

/**
 * 反转链表 迭代
 * @param {linkedList} head
 * @returns
 */
var reverseList = function (head) {
  let current = head;
  let pre = null;
  while (current) {
    let temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }

  return pre;
};

/**
 * 两数相加
 * @param {number} l1
 * @param {number} l2
 * @returns
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while (p1 || p2) {
    let v1 = p1 ? p1.val : 0;
    let v2 = p2 ? p2.val : 0;
    let sum = v1 + v2 + carry;
    let v3 = sum % 10;
    carry = Math.floor(sum / 10);
    p3.next = new ListNode(v3);
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
    p3 = p3.next;
  }
  if (carry) {
    p3.next = new ListNode(carry);
  }
  return l3.next;
};

/**
 * 删除排序链表中的重复元素
 * @param {Listnode} head
 * @returns
 */
var deleteDuplicates = function (head) {
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
      // 1,1,1 三个数连续相等，移除后需要再次与后面的数比较
    } else {
      p = p.next;
    }
  }
  return head;
};
