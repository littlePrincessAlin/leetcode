/**
 * @description: 206. 反转链表
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
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
// 1. 设置一个空节点dummy
// 2. 遍历head，设置next指针记录head.next
// 3. head.next = dummy
// 4. dummy = head
// 5. head = next;
// 6. 返回dummy

var reverseList = function (head) {
  let dummy = null;
  while (head) {
    const next = head.next;
    head.next = dummy;
    dummy = head;
    head = next;
  }
  return dummy;
};
