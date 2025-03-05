/**
 * @description: 21. 合并两个有序链表
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 */

var mergeTwoLists = function (list1, list2) {
  const list = new ListNode(0);
  let dummy = list;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      dummy.next = new ListNode(list2.val);
      list2 = list2.next;
    } else {
      dummy.next = new ListNode(list1.val);
      list1 = list1.next;
    }
    dummy = dummy.next;
  }
  while (list1) {
    dummy.next = new ListNode(list1.val);
    list1 = list1.next;
    dummy = dummy.next;
  }
  while (list2) {
    dummy.next = new ListNode(list2.val);
    list2 = list2.next;
    dummy = dummy.next;
  }
  return list.next;
};
