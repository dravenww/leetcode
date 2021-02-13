/**
 * @file leetcode 2
 * link: https://leetcode-cn.com/problems/add-two-numbers/
 * desc:
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *
 * 示例 1：
 * 输入：输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 *
 * 示例 2：
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 *
 * 提示：
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 <= Node.val <= 9
 * 题目数据保证列表表示的数字不含前导零
 *
 * @language javascript
 **/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    let result = new ListNode();
    let isNeedAdd = 0;
    let rn = result;
    while (isNeedAdd || l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + isNeedAdd;
        isNeedAdd = sum > 9 ? 1 : 0;
        rn.next = new ListNode(sum % 10);
        rn = rn.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return result.next;
}

test("测试输入：[2, 4, 3], [5, 6, 4]；返回[7, 0, 8]", () => {
    expect(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))),
        new ListNode(5, new ListNode(6, new ListNode(4)))))
        .toStrictEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
})

test("测试输入：[0], [0]；返回[0]", () => {
    expect(addTwoNumbers(new ListNode(0), new ListNode(0)))
        .toStrictEqual(new ListNode(0));
})
