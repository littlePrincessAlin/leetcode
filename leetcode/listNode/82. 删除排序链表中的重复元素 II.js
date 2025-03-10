/**
 * @description: 82. 删除排序链表中的重复元素 II
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
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
  const list = new ListNode(0);
  if (!head) return head;
  let dummy = list;
  let cur = head;
  while (cur && cur.next) {
    if (cur.val !== cur.next.val) {
      dummy.next = new ListNode(cur.val);
      dummy = dummy.next;
      cur = cur.next;
    } else {
      while (cur.next && cur.next.val === cur.val) {
        cur = cur.next;
      }
      cur = cur.next;
    }
  }
  if (cur) {
    dummy.next = new ListNode(cur.val);
    dummy = dummy.next;
  }
  return list.next;
};
