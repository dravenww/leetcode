/**
 * @file leetcode 1
 * link: https://leetcode-cn.com/problems/two-sum/
 * desc:
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 你可以按任意顺序返回答案。
 *
 * 示例 1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 示例 2：
 *
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 *
 * 示例 3：
 *
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 *
 * 提示：
 *
 * 2 <= nums.length <= 103
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * 只会存在一个有效答案
 * @language javascript
 **/

function twoSum(nums, target) {
    var result = [];
    for (let i = 0; i <= nums.length - 1; i++) {
        let value = target - nums[i];
        let second = nums.indexOf(value);
        if (second === -1) {
            continue;
        } else if (second !== i) {
            if (second > i) {
                result.push(i, second);
            } else {
                result.push(second, i);
            }
            return result;
        }
    }
};

test("测试输入：[2, 7, 11, 15], 9；返回[0, 1]", () => {
    expect(twoSum([2, 7, 11, 15], 9))
        .toStrictEqual([0, 1]);
})

test("测试输入：[3, 2, 4], 6；返回[1, 2]", () => {
    expect(twoSum([3, 2, 4], 6))
        .toStrictEqual([1, 2]);
})
test("测试输入：[3, 3], 6；返回[0, 1]", () => {
    expect(twoSum([3, 3], 6))
        .toStrictEqual([0, 1]);
})