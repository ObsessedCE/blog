(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{354:function(n,t,s){"use strict";s.r(t);var e=s(17),r=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"反转字符串中的单词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反转字符串中的单词"}},[n._v("#")]),n._v(" 反转字符串中的单词")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode.cn/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"}},[n._v("原题链接"),t("OutboundLink")],1),n._v("\n给你一个字符串 s ，请你反转字符串中 单词 的顺序。单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。\n注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。")]),n._v(" "),t("p",[n._v("示例 1：")]),n._v(" "),t("blockquote",[t("p",[n._v('输入：s = "the sky is blue"\n输出："blue is sky the"')])]),n._v(" "),t("p",[n._v("示例 2：")]),n._v(" "),t("blockquote",[t("p",[n._v('输入：s = "  hello world  "\n输出："world hello"\n解释：反转后的字符串中不能存在前导空格和尾随空格。')])]),n._v(" "),t("p",[n._v("示例 3：")]),n._v(" "),t("blockquote",[t("p",[n._v('输入：s = "a good   example"\n输出："example good a"\n解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。')])]),n._v(" "),t("p",[n._v("提示：")]),n._v(" "),t("ul",[t("li",[n._v("1 <= s.length <= 104")]),n._v(" "),t("li",[n._v("s 包含英文大小写字母、数字和空格 ' '")]),n._v(" "),t("li",[n._v("s 中 至少存在一个 单词")])]),n._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),t("blockquote",[t("p",[n._v("模拟实现。")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('class Solution {\npublic:\n    string reverseWords(string s) {\n        string res = "";\n        int n = s.size();\n        string tmp = "";\n        for (int i = n-1; i >=0; i--) {\n            if (s[i] != \' \') {\n                tmp = s[i] + tmp;\n            } else {\n                if (tmp != "") {\n                    if (res.size() != 0) {\n                        tmp = \' \' + tmp;\n                    }\n                    res = res + tmp;\n                }\n                tmp = "";\n            }\n        }\n        if (tmp != "") {\n            if (res.size() != 0) {\n                tmp = \' \' + tmp;\n            }\n            res = res + tmp;\n        }\n        return res;\n    }\n};\n')])])]),t("blockquote",[t("p",[n._v("栈")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('class Solution {\npublic:\n    string reverseWords(string s) {\n        string res  = "";\n        string tmp  = "";\n        stack<string> stk;\n        for (int i = 0; i < s.size(); i++) {\n            if (s[i] != \' \') {\n                tmp += s[i];\n            } else {\n                if (tmp != "") {\n                    stk.push(tmp);\n                }\n                tmp = "";\n            }\n        }\n        if (tmp != "") {\n            stk.push(tmp);\n        }\n        while (!stk.empty()) {\n            tmp = stk.top();\n            stk.pop();\n            if (res != "") {\n                tmp = " " + tmp;\n            }\n            res += tmp;\n        }\n        return res;\n    }    \n};\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);