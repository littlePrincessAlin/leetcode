/**
 * @description: 92. 反转链表 II
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseBetween = function (head, left, right) {
  const reverse = (head) => {
    // 反转子区间，head会被反转
    let cur = null;
    while (head) {
      const next = head.next;
      head.next = cur;
      cur = head;
      head = next;
    }
  };
  if (!head || !head.next || left === right) return head;
  let list = new ListNode(0, head);
  let dummy = list;
  // 1. 找到left-1的节点，并切断连接
  for (let i = 0; i < left - 1; i++) {
    dummy = dummy.next;
  }
  // 2. 找到right的节点，并切断连接
  let rightNode = dummy;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  // 3.切断
  let leftNode = dummy.next;
  let rightNext = rightNode.next;
  // 注意：切断链接
  dummy.next = null;
  rightNode.next = null;

  // 4. 反转子区间
  reverse(leftNode);
  // 5. 拼接，dummy--右---左--rightNext
  dummy.next = rightNode;
  leftNode.next = rightNext;
  return list.next;
};
