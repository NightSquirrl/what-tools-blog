import comp from "/Users/zeroeldath/Desktop/ignore-space/zero-eldath/whatToolsBlog/src/.vuepress/.temp/pages/web/Vue/2-vue-vuex-pinia.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/2-vue-vuex-pinia.html\",\"title\":\"🪤 2. Vue 状态管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"🪤 2. Vue 状态管理\",\"tag\":[\"Vue\",\"vuex\",\"pinia\"],\"description\":\"pinia.svgpinia.svg Vue 状态管理 vuex pinia Vuex Vue2 选项式 API 状态管理 - 在 src 中创建文件夹 store，创建 index.js 文件 要使用 store 就在把 store 挂载到 Vue 中 vuex 基础使用 1.state 在 state 中添加数据 State 数据的使用 直接使用 ...\"},\"headers\":[{\"level\":2,\"title\":\"Vuex\",\"slug\":\"vuex\",\"link\":\"#vuex\",\"children\":[{\"level\":3,\"title\":\"Vue2 选项式 API\",\"slug\":\"vue2-选项式-api\",\"link\":\"#vue2-选项式-api\",\"children\":[]},{\"level\":3,\"title\":\"Vue3 组合式 API @4\",\"slug\":\"vue3-组合式-api-4\",\"link\":\"#vue3-组合式-api-4\",\"children\":[]},{\"level\":3,\"title\":\"增加模块的概念\",\"slug\":\"增加模块的概念\",\"link\":\"#增加模块的概念\",\"children\":[]}]},{\"level\":2,\"title\":\"Pinia\",\"slug\":\"pinia\",\"link\":\"#pinia\",\"children\":[{\"level\":3,\"title\":\"vue3\",\"slug\":\"vue3\",\"link\":\"#vue3\",\"children\":[]},{\"level\":3,\"title\":\"vue2\",\"slug\":\"vue2\",\"link\":\"#vue2\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.96,\"words\":2087},\"filePathRelative\":\"web/Vue/2-vue-vuex-pinia.md\",\"excerpt\":\"<figure><img src=\\\"https://pinia.vuejs.org/logo.svg\\\" alt=\\\"pinia.svg\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>pinia.svg</figcaption></figure>\\n<h1>Vue 状态管理 vuex pinia</h1>\\n<h2>Vuex</h2>\\n<h3>Vue2 选项式 API</h3>\\n<blockquote>\\n<p>状态管理 - 在 src 中创建文件夹 store，创建 index.js 文件</p>\\n</blockquote>\\n<div class=\\\"language-JavaScript\\\" data-ext=\\\"JavaScript\\\" data-title=\\\"JavaScript\\\"><pre class=\\\"language-JavaScript\\\"><code>import Vue from 'vue'\\nimport Vuex from 'vuex'\\n\\nVue.use(Vuex) // 把 Vuex 注册到Vue 上\\n\\nexport default new Vuex.Store({\\n    // 在开发环境开启严格模式 这样修改数据 就必须通过 mutation 来处理\\n    strict:products.env.NODE_ENV !== 'production',\\n    // 状态\\n    state: {\\n    },\\n    // 用来处理状态\\n    mutations: {\\n    },\\n    // 用于异步处理\\n    actions: {\\n    },\\n    // 用来挂载模块\\n    modules: {\\n    }\\n})\\n</code></pre></div>\",\"autoDesc\":true}")
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
