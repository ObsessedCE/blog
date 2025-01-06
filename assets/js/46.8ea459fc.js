(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{368:function(n,t,e){"use strict";e.r(t);var s=e(17),r=Object(s.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"多数元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多数元素"}},[n._v("#")]),n._v(" 多数元素")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode.cn/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"}},[n._v("原题链接"),t("OutboundLink")],1)]),n._v(" "),t("blockquote",[t("p",[n._v("给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。\n你可以假设数组是非空的，并且给定的数组总是存在多数元素。")])]),n._v(" "),t("p",[n._v("示例 1：")]),n._v(" "),t("blockquote",[t("p",[n._v("输入：nums = [3,2,3]\n输出：3")])]),n._v(" "),t("p",[n._v("示例 2：")]),n._v(" "),t("blockquote",[t("p",[n._v("输入：nums = [2,2,1,1,1,2,2]\n输出：2")])]),n._v(" "),t("p",[n._v("提示：")]),n._v(" "),t("blockquote",[t("p",[n._v("n == nums.length\n1 <= n <= 5 * 104\n-109 <= nums[i] <= 109")])]),n._v(" "),t("p",[n._v("进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。")]),n._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),t("blockquote",[t("p",[n._v("Boyer-Moore 投票算法： 众数个数最多，将众数看作与其他数的相反数(-1、1).当众数为+1，非众数为-1.当众数为-1，非众数为+1.最后众数肯定可以进行抵消非众数的结果，剩余结果就是众数元素。")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int count = 0;\n        int res = -1;\n        for (int i = 0; i < nums.size(); i++) {\n            if (count == 0){\n                res =  nums[i];\n            }\n            if (res == nums[i]) {\n                count +=1;\n            } else {\n                count -= 1;\n            }\n        \n        }\n        return res;\n    }\n};\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);