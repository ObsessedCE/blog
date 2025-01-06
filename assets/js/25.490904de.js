(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{346:function(n,i,t){"use strict";t.r(i);var s=t(25),e=Object(s.a)({},(function(){var n=this,i=n._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("h1",{attrs:{id:"跳跃游戏-ii"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#跳跃游戏-ii"}},[n._v("#")]),n._v(" 跳跃游戏 II")]),n._v(" "),i("p",[i("a",{attrs:{href:"https://leetcode.cn/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"}},[n._v("原题链接"),i("OutboundLink")],1),n._v("\n给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:")]),n._v(" "),i("ul",[i("li",[n._v("0 <= j <= nums[i]")]),n._v(" "),i("li",[n._v("i + j < n")])]),n._v(" "),i("p",[n._v("返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。")]),n._v(" "),i("p",[n._v("示例 1:")]),n._v(" "),i("blockquote",[i("p",[n._v("输入: nums = [2,3,1,1,4]\n输出: 2\n解释: 跳到最后一个位置的最小跳跃数是 2。\n从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。")])]),n._v(" "),i("blockquote",[i("p",[n._v("示例 2:\n输入: nums = [2,3,0,1,4]\n输出: 2")])]),n._v(" "),i("p",[n._v("提示:")]),n._v(" "),i("ul",[i("li",[n._v("1 <= nums.length <= 104")]),n._v(" "),i("li",[n._v("0 <= nums[i] <= 1000")])]),n._v(" "),i("p",[n._v("题目保证可以到达 nums[n-1]")]),n._v(" "),i("h2",{attrs:{id:"题解"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),i("blockquote",[i("p",[n._v("动态规划，dp[i]为到达当前位置的最小次数。转移方程dp[j] = min(dp[j], dp[i] +1);")])]),n._v(" "),i("div",{staticClass:"language-c++ extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("class Solution {\npublic:\n    int jump(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> dp(n, n+1);\n        dp[0] = 0;\n        int pos = 0;\n        for (int i = 0; i < n && i <=pos; i++) {\n            pos = max(pos, i + nums[i]);\n            for (int j = 1; j <= nums[i] && i + j <n; j++){\n                dp[i + j] = min(dp[i+j], dp[i] + 1);\n            }\n        }\n        return dp[n-1];\n    }\n};\n")])])]),i("div",{staticClass:"language-c++ extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("class Solution {\npublic:\n    int jump(vector<int>& nums) {\n      int n = nums.size();\n      int pos = 0; // 先前步数能到达的最大位置\n      int res  = 0;\n      int maxPosition = 0; // 先前步数再多走一步能达到的最大最值\n      for (int i = 0; i < n; i++) {\n          if (i > pos) {\n            pos = maxPosition;\n            res++;\n          }\n          maxPosition = max(maxPosition, i + nums[i]);\n      }   \n      return res;\n    }\n};\n")])])])])}),[],!1,null,null,null);i.default=e.exports}}]);