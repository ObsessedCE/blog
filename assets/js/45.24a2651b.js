(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{367:function(n,t,s){"use strict";s.r(t);var e=s(17),r=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"删除有序数组中的重复项-ii"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除有序数组中的重复项-ii"}},[n._v("#")]),n._v(" 删除有序数组中的重复项 II")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"}},[n._v("原题链接"),t("OutboundLink")],1),n._v("\n给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。\n不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。")]),n._v(" "),t("p",[n._v("示例 1：")]),n._v(" "),t("blockquote",[t("p",[n._v("输入：nums = [1,1,1,2,2,3]\n输出：5, nums = [1,1,2,2,3]\n解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。")])]),n._v(" "),t("p",[n._v("示例 2：")]),n._v(" "),t("blockquote",[t("p",[n._v("输入：nums = [0,0,1,1,1,1,2,3,3]\n输出：7, nums = [0,0,1,1,2,3,3]\n解释：函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。")])]),n._v(" "),t("p",[n._v("提示：")]),n._v(" "),t("ul",[t("li",[n._v("1 <= nums.length <= 3 * 104")]),n._v(" "),t("li",[n._v("-104 <= nums[i] <= 104")]),n._v(" "),t("li",[n._v("nums 已按升序排列")])]),n._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),t("blockquote",[t("p",[n._v("只需要判断当前元素是否和之前队列末尾两个元素是否同时相等。")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        int m = nums.size();\n        if (m <= 2) {\n           return m;\n        }\n        int pos = 2 ;\n        for (int i = 2; i < m; i++){\n            if (nums[i] != nums[pos - 1] || nums[i] != nums[pos - 2]) {\n                 nums[pos++] = nums[i];\n            }\n        }\n        return pos;\n    }\n};\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);