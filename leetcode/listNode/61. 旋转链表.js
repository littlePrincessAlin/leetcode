/**
 * 61. 旋转链表
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 */

var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  let n = 1;
  let cur = head;
  while (cur.next) {
    cur = cur.next;
    n++;
  }

  let add = n - (k % n);
  if (add === n) {
    return head;
  }

  cur.next = head;
  while (add) {
    cur = cur.next;
    add--;
  }

  const ret = cur.next;
  cur.next = null;
  return ret;
};
