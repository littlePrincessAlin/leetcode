/**
 * @description: 23. 合并 K 个升序链表
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 1. k个链表，可以变成合并两个有序链表上

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 21. 合并两个有序链表
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
var mergeKLists = function (lists) {
  //二分查找
  function dfs(i, j) {
    const m = j - i;
    if (m === 0) return null; // 注意输入的 lists 可能是空的
    if (m === 1) return lists[i]; // 无需合并，直接返回
    const left = dfs(i, i + Math.floor(m / 2)); // 合并左半部分
    const right = dfs(i + Math.floor(m / 2), j); // 合并右半部分
    return mergeTwoLists(left, right); // 最后把左半和右半合并
  }
  return dfs(0, lists.length);
};
