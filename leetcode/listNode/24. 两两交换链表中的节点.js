/**
 * @description: 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let list = new ListNode(0, head);
  let dummy = list;
  if (head === null || head.next === null) return head;
  while (dummy.next !== null && dummy.next.next !== null) {
    const node1 = dummy.next;
    const node2 = dummy.next.next;

    dummy.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    dummy = node1;
  }
  return list.next;
};
