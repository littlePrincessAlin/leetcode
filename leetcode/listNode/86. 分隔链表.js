/**
 * @description: 86. 分隔链表
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const maxList = new ListNode(0);
  const minList = new ListNode(0);
  let cur = head,
    min = minList,
    max = maxList;
  while (cur) {
    if (cur.val < x) {
      min.next = cur;
      min = min.next;
    } else {
      max.next = cur;
      max = max.next;
    }
    cur = cur.next;
  }
  // 关键修复：断开 max 链表的尾部引用
  max.next = null;
  min.next = maxList.next;
  return minList.next;
};
