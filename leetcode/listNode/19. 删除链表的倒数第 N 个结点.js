/**
 * @description: 删除链表第N个结点
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 */

// 1. 创造一个空链表，链接到head，slow指向空链表的头结点，也就是null
// 2. 让fast 先走n步
// 3. fast和slow同时走，当fast到达链表尾部时，slow指向的节点就是倒数第n个节点
// 4. 删除倒数第n个节点，slow.next = slow.next.next
// 5. 返回list.next

var removeNthFromEnd = function (head, n) {
  let fast = head;
  const list = new ListNode(0, head);
  let slow = list;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return list.next;
};
