import comp from "/Users/zeroeldath/Desktop/ignore-space/zero-eldath/vuepress-hope-what-tools-blog/src/.vuepress/.temp/pages/web/component-packaging/rollup.html.vue"
const data = JSON.parse("{\"path\":\"/web/component-packaging/rollup.html\",\"title\":\"🎃 rollup 快速上手\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"🎃 rollup 快速上手\",\"tag\":[\"前端\",\"rollup\"],\"description\":\"rollup 使用案例 初始化 依赖安装 配置文件 rollup.config.js 启动 插件 默认只能够处理 ESModule 加载 CommonJS 模块 代码拆分 动态导入 rollup.config.js 多入口打包 封装案例 组件封装模版 项目地址 初始化 对于 UI 组件的封装,直接复制 rollup 文件夹,只需要修改 types 里面...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/web/component-packaging/rollup.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Night.Soul\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"🎃 rollup 快速上手\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"rollup 使用案例 初始化 依赖安装 配置文件 rollup.config.js 启动 插件 默认只能够处理 ESModule 加载 CommonJS 模块 代码拆分 动态导入 rollup.config.js 多入口打包 封装案例 组件封装模版 项目地址 初始化 对于 UI 组件的封装,直接复制 rollup 文件夹,只需要修改 types 里面...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hope\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"rollup\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"🎃 rollup 快速上手\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"初始化\",\"slug\":\"初始化\",\"link\":\"#初始化\",\"children\":[{\"level\":3,\"title\":\"依赖安装\",\"slug\":\"依赖安装\",\"link\":\"#依赖安装\",\"children\":[]},{\"level\":3,\"title\":\"配置文件\",\"slug\":\"配置文件\",\"link\":\"#配置文件\",\"children\":[]},{\"level\":3,\"title\":\"启动\",\"slug\":\"启动\",\"link\":\"#启动\",\"children\":[]}]},{\"level\":2,\"title\":\"插件\",\"slug\":\"插件\",\"link\":\"#插件\",\"children\":[]},{\"level\":2,\"title\":\"加载 CommonJS 模块\",\"slug\":\"加载-commonjs-模块\",\"link\":\"#加载-commonjs-模块\",\"children\":[]},{\"level\":2,\"title\":\"代码拆分\",\"slug\":\"代码拆分\",\"link\":\"#代码拆分\",\"children\":[]},{\"level\":2,\"title\":\"多入口打包\",\"slug\":\"多入口打包\",\"link\":\"#多入口打包\",\"children\":[]},{\"level\":2,\"title\":\"初始化\",\"slug\":\"初始化-1\",\"link\":\"#初始化-1\",\"children\":[]}],\"readingTime\":{\"minutes\":1.34,\"words\":401},\"filePathRelative\":\"web/component-packaging/rollup.md\",\"excerpt\":\"\\n<h2>初始化</h2>\\n<h3>依赖安装</h3>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code>yarn init <span class=\\\"token operator\\\">-</span>y\\nyarn add rollup\\n</code></pre></div><h3>配置文件</h3>\\n<p><code>rollup.config.js</code></p>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">export</span>  <span class=\\\"token keyword\\\">default</span>  <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">input</span> <span class=\\\"token operator\\\">:</span><span class=\\\"token string\\\">\\\"src/index.js\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token literal-property property\\\">output</span><span class=\\\"token operator\\\">:</span><span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token literal-property property\\\">file</span><span class=\\\"token operator\\\">:</span><span class=\\\"token string\\\">\\\"dist/bundle.js\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n        <span class=\\\"token literal-property property\\\">format</span><span class=\\\"token operator\\\">:</span><span class=\\\"token string\\\">\\\"iife\\\"</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n</code></pre></div>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}