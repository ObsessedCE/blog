(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{370:function(n,t,s){"use strict";s.r(t);var e=s(17),r=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"轮转数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#轮转数组"}},[n._v("#")]),n._v(" 轮转数组")]),n._v(" "),t("blockquote",[t("p",[n._v("给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。")])]),n._v(" "),t("p",[n._v("示例 1:")]),n._v(" "),t("blockquote",[t("p",[n._v("输入: nums = [1,2,3,4,5,6,7], k = 3\n输出: [5,6,7,1,2,3,4]\n解释:\n向右轮转 1 步: [7,1,2,3,4,5,6]\n向右轮转 2 步: [6,7,1,2,3,4,5]\n向右轮转 3 步: [5,6,7,1,2,3,4]")])]),n._v(" "),t("blockquote",[t("p",[n._v("示例 2:\n输入：nums = [-1,-100,3,99], k = 2\n输出：[3,99,-1,-100]\n解释:\n向右轮转 1 步: [99,-1,-100,3]\n向右轮转 2 步: [3,99,-1,-100]")])]),n._v(" "),t("p",[n._v("提示：")]),n._v(" "),t("ul",[t("li",[n._v("1 <= nums.length <= 105")]),n._v(" "),t("li",[n._v("-231 <= nums[i] <= 231 - 1")]),n._v(" "),t("li",[n._v("0 <= k <= 105")])]),n._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),t("blockquote",[t("p",[n._v("使用额外数组空间进行移动，时间复杂度为O(n),空间复杂度为O(n)")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        int n  = nums.size();\n        k = k %n;\n        vector<int> res(n);\n        for (int i = 0 ; i < n; i ++) {\n            res[(i + k) % n] = nums[i];\n        }\n        nums.assign(res.begin(), res.end());\n    }\n};\n")])])]),t("blockquote",[t("p",[n._v("循环替换，直到所有元素都被替换。an = bk, a为遍历次数，b为每次遍历涉及元素数量, an 为lcm(n,k),推导出遍历次数为n,k的最大公约数。")])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://i-blog.csdnimg.cn/direct/753e54b2d2ae468eb618a8d017c8ff9d.png",alt:"在这里插入图片描述",referrerpolicy:"no-referrer"}})]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        int n  = nums.size();\n        k = k % n;\n        int count = gcd(k , n);\n        for (int start = 0; start < count; start++){\n            int cur = start;\n            int prev = nums[start];\n            do {\n                int next = (cur + k) % n;\n                swap(nums[next], prev);\n                cur = next;\n            } while(start != cur);\n        }\n    }\n};\n")])])]),t("blockquote",[t("p",[n._v("也是循环替换的思路，不过通过遍历记录已经遍历过的元素数量。")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        int n  = nums.size();\n        k = k % n;\n        int count  = 0;\n        for (int start = 0; count != n; start++){\n            int cur = start;\n            int prev = nums[start];\n            do {\n                int next = (cur + k) % n;\n                swap(nums[next], prev);\n                cur = next;\n                count++;\n            } while(start != cur);\n        }\n    }\n};\n")])])]),t("blockquote",[t("p",[n._v("翻转数组")])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://i-blog.csdnimg.cn/direct/eed439e0aa4244a6915d5ca244953b06.png",alt:"在这里插入图片描述",referrerpolicy:"no-referrer"}})]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        k = k % nums.size();\n        reverse(nums, 0, nums.size() - 1);\n        reverse(nums, 0 , k-1);\n        reverse(nums, k, nums.size()-1);\n    }\n    \n    void reverse(vector<int>& nums, int start, int end) {\n        while (start < end) {\n            swap(nums[start], nums[end]);\n            start += 1;\n            end -= 1;\n        }\n    }\n\n};\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);