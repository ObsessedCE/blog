(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{359:function(n,t,s){"use strict";s.r(t);var i=s(17),e=Object(i.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"判断子序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断子序列"}},[n._v("#")]),n._v(" 判断子序列")]),n._v(" "),t("p",[n._v('给定字符串 s 和 t ，判断 s 是否为 t 的子序列。字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。\n进阶：\n如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？')]),n._v(" "),t("p",[n._v("示例 1：")]),n._v(" "),t("blockquote",[t("p",[n._v('输入：s = "abc", t = "ahbgdc"\n输出：true')])]),n._v(" "),t("p",[n._v("示例 2：")]),n._v(" "),t("blockquote",[t("p",[n._v('输入：s = "axc", t = "ahbgdc"\n输出：false')])]),n._v(" "),t("p",[n._v("提示：")]),n._v(" "),t("ul",[t("li",[n._v("0 <= s.length <= 100")]),n._v(" "),t("li",[n._v("0 <= t.length <= 10^4\n两个字符串都只由小写字符组成。")])]),n._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        int n = s.size() -1, m = t.size()-1;\n        if (n < 0) {\n            return true;\n        }\n        for (int i = m; i >= 0; i--) {\n            if (t[i] == s[n]) {\n                n--;\n            }\n            if (n < 0) {\n            return true;\n            }\n        }\n        return false;\n    }\n};\n")])])]),t("blockquote",[t("p",[n._v("进阶版解法，对t字符串进行预处理。")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        int n = s.size(), m = t.size();\n        vector<vector<int>> f(m + 1, vector<int>(26, 0));\n        for (int i = 0; i < 26; i++) {\n            f[m][i] = m;\n        }\n        for (int i = m - 1; i >= 0; i--) {\n            for (int j = 0; j < 26; j++) {\n                if (t[i] == j + 'a') {\n                    f[i][j] = i;\n                } else {\n                    f[i][j] = f[i+1][j];\n                }\n            }\n        }\n\n        int add = 0;\n        for (int i = 0; i < n; i ++) {\n            if (f[add][s[i] -'a'] == m) {\n                return false;\n            }\n            add = f[add][s[i] - 'a'] + 1;\n        }\n        return true;\n    }\n};\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);