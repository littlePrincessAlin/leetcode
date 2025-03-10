/**
 * @description: 83. 删除排序链表中的重复元素
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 输入：head = [1,1,2]
 * 输出：[1,2]
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
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  const list = new ListNode(0, head);
  let dummy = list;
  while (dummy.next && dummy.next.next) {
    if (dummy.next.val === dummy.next.next.val) {
      dummy.next = dummy.next.next;
    } else {
      dummy = dummy.next;
    }
  }
  return list.next;
};
