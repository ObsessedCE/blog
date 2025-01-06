(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{350:function(n,t,e){"use strict";e.r(t);var s=e(17),r=Object(s.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"除自身以外数组的乘积"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#除自身以外数组的乘积"}},[n._v("#")]),n._v(" 除自身以外数组的乘积")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"}},[n._v("原题链接"),t("OutboundLink")],1),n._v("\n给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。\n题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。\n请 不要使用除法，且在 O(n) 时间复杂度内完成此题。")]),n._v(" "),t("p",[n._v("示例 1:")]),n._v(" "),t("blockquote",[t("p",[n._v("输入: nums = [1,2,3,4]\n输出: [24,12,8,6]")])]),n._v(" "),t("p",[n._v("示例 2:")]),n._v(" "),t("blockquote",[t("p",[n._v("输入: nums = [-1,1,0,-3,3]\n输出: [0,0,9,0,0]")])]),n._v(" "),t("p",[n._v("提示：")]),n._v(" "),t("ul",[t("li",[n._v("2 <= nums.length <= 105")]),n._v(" "),t("li",[n._v("-30 <= nums[i] <= 30")]),n._v(" "),t("li",[n._v("保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内")])]),n._v(" "),t("p",[n._v("进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）")]),n._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),t("blockquote",[t("p",[n._v("双前缀和思路。")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n       int n = nums.size();\n       vector<int> res(n,0);\n       res[0]  = 1;\n       for (int i = 1; i < n; i++) {\n           res[i] = res[i-1] * nums[i-1];\n       }\n       int r = 1;\n       for (int i = n-1; i>=0; i--) {\n           res[i] = res[i] * r;\n           r = r * nums[i];\n       }\n       return res;\n    }\n};\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);