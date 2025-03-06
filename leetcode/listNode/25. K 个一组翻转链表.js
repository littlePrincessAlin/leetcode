/**
 * @description: 25. K 个一组翻转链表
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 */

const myReverse = (head, tail) => {
  let prev = tail.next;
  let p = head;
  while (prev !== tail) {
    const nex = p.next;
    p.next = prev;
    prev = p;
    p = nex;
  }
  return [tail, head];
};
var reverseKGroup = function (head, k) {
  const hair = new ListNode(0, head);
  let pre = hair;
  while (head) {
    let tail = pre;
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    const nex = tail.next; // 记录下一个，切断tail和tail.next的联系
    [head, tail] = myReverse(head, tail);
    // 把子链表重新接回原链表
    pre.next = head; // 拼接k组的
    tail.next = nex; // 链接下一个k组
    pre = tail; // 更新pre到tail
    head = tail.next; // 更新head到tail.next
  }
  return hair.next;
};
