(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{372:function(n,t,e){"use strict";e.r(t);var i=e(17),r=Object(i.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"买卖股票的最佳时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#买卖股票的最佳时机"}},[n._v("#")]),n._v(" 买卖股票的最佳时机")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"}},[n._v("原题链接"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。\n你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。\n返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。")]),n._v(" "),t("blockquote",[t("p",[n._v("示例 1：\n输入：[7,1,5,3,6,4]\n输出：5\n解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。\n注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。")])]),n._v(" "),t("blockquote",[t("p",[n._v("示例 2：\n输入：prices = [7,6,4,3,1]\n输出：0\n解释：在这种情况下, 没有交易完成, 所以最大利润为 0。")])]),n._v(" "),t("p",[n._v("提示：")]),n._v(" "),t("ul",[t("li",[n._v("1 <= prices.length <= 105")]),n._v(" "),t("li",[n._v("0 <= prices[i] <= 104")])]),n._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),t("blockquote",[t("p",[n._v("贪心+动态规划")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int n = prices.size();\n        int res = 0;\n        int tmp = 0;\n        for (int i = 0; i < n -1; i++) {\n            prices[i] = prices[i + 1] - prices[i];\n            if (tmp < 0) {\n                tmp = 0;\n            } \n            tmp += prices[i];\n            res = max(res, tmp);\n        }\n        return res;\n    }\n};\n")])])]),t("blockquote",[t("p",[n._v("记忆化遍历，记录已经遍历的价格中最小的价格。当前最高价格 - 当前最低价格 = 最大利润")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int inf = 1e9;\n        int minprice = inf, maxProfit = 0;\n        for (int price : prices){\n            maxProfit = max(maxProfit, price - minprice);\n            minprice = min(minprice, price);\n        }\n        return maxProfit;\n    }\n};\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);