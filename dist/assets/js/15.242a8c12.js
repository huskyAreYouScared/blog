(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{223:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"自动更新日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动更新日志"}},[a._v("#")]),a._v(" 自动更新日志")]),a._v(" "),s("ul",[s("li",[a._v("需要插件conventional-changelog-cli + commitizen")])]),a._v(" "),s("h4",{attrs:{id:"第一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[a._v("#")]),a._v(" 第一步")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g conventional-changelog-cli\n")])])]),s("ul",[s("li",[a._v("安装成功之后需要如果在命令行 找不到conventional-changelog这个命令需要去配置"),s("a",{attrs:{href:"https://www.baidu.com/s?wd=%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[a._v("环境变量"),s("OutboundLink")],1)])]),a._v(" "),s("h4",{attrs:{id:"第二步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[a._v("#")]),a._v(" 第二步")]),a._v(" "),s("ul",[s("li",[a._v("进入到要生成日志的项目中")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  conventional-changelog -p angular -i CHANGELOG.md -s\n")])])]),s("ul",[s("li",[a._v("此时根目录下就会生成 CHANGELOG.md文件")])]),a._v(" "),s("h4",{attrs:{id:"第三步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步"}},[a._v("#")]),a._v(" 第三步")]),a._v(" "),s("ul",[s("li",[a._v("安装git commit 规范提交的插件,这里我用了"),s("a",{attrs:{href:"https://www.npmjs.com/package/commitizen",target:"_blank",rel:"noopener noreferrer"}},[a._v("commitizen"),s("OutboundLink")],1)])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g commitizen\n")])])]),s("ul",[s("li",[a._v("然后初始化您的项目以使用cz-conventional-changelog适配器")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  commitizen init cz-conventional-changelog --save-dev --save-exact\n")])])]),s("h4",{attrs:{id:"第四步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四步"}},[a._v("#")]),a._v(" 第四步")]),a._v(" "),s("ul",[s("li",[a._v("之前是使用git commit来提交，现在可以使用 git cz来提交，然后就按照命令行的提示一步一步填写即可")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  ? Select the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" of change that you're committing: perf:     A code change that improves performance\n  ? What is the scope of this change "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("e.g. component or "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("press enter to skip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n  ? Write a short, imperative tense description of the change "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("max "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("94")]),a._v(" chars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" conventional-changelog\n  ? Provide a longer description of the change: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("press enter to skip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  \n  ? Are there any breaking changes? No\n  ? Does this change affect any "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" issues? No\n")])])]),s("h4",{attrs:{id:"第五步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五步"}},[a._v("#")]),a._v(" 第五步")]),a._v(" "),s("ul",[s("li",[a._v("改变CHANGELOG文件和package的版本号，在package文件中新增加命令version")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('  // package.json\n  "scripts":{\n    ···\n    "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"\n    ···\n  }\n')])])]),s("ul",[s("li",[a._v("添加好之后执行命令")]),a._v(" "),s("li",[a._v("version 后面可以写major/minor/patch，分别对应主要版本、次要版本、补丁 （v0.0.1）")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" version minor -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'description'")]),a._v("\n")])])]),s("ul",[s("li",[a._v("此时就将git 提交的信息写入CHANGELOG了")])]),a._v(" "),s("h4",{attrs:{id:"别忘了提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#别忘了提交"}},[a._v("#")]),a._v(" 别忘了提交")])])}),[],!1,null,null,null);t.default=n.exports}}]);