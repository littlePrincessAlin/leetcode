/**
 * @description 两数之和
 * 链表相加
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const list = new ListNode(0);
  let dummy = list;
  let rest = 0;
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rest;
    rest = Math.floor(sum / 10);
    dummy.next = new ListNode(sum % 10);
    dummy = dummy.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (rest) {
    dummy.next = new ListNode(rest);
  }
  return list.next;
};
