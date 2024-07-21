import comp from "/Users/zeroeldath/Desktop/ignore-space/zero-eldath/whatToolsBlog/src/.vuepress/.temp/pages/web/Vue/3-communicationMode.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/3-communicationMode.html\",\"title\":\"3. Vue中组件的通信方式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"3. Vue中组件的通信方式\",\"tag\":[\"Vue\"],\"description\":\"Vue2 子组件中，使用 $emit 触发一个自定义事件，并传递需要传递的数据： 父组件中，监听子组件触发的自定义事件，并在事件处理函数中接收数据： Vue3 父子组件 emit 的方式 子组件传递 父组件接受 父组件获取子组件中的属性值 核心在于 子组件的 defineExpose({sex, info}) 子组件传递的方式 父组件显示的方式 为子组...\"},\"headers\":[{\"level\":2,\"title\":\"Vue2\",\"slug\":\"vue2\",\"link\":\"#vue2\",\"children\":[]},{\"level\":2,\"title\":\"Vue3\",\"slug\":\"vue3\",\"link\":\"#vue3\",\"children\":[{\"level\":3,\"title\":\"父子组件\",\"slug\":\"父子组件\",\"link\":\"#父子组件\",\"children\":[]},{\"level\":3,\"title\":\"爷孙组件通信\",\"slug\":\"爷孙组件通信\",\"link\":\"#爷孙组件通信\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.25,\"words\":974},\"filePathRelative\":\"web/Vue/3-communicationMode.md\",\"excerpt\":\"<h2>Vue2</h2>\\n<p>子组件中，使用 $emit 触发一个自定义事件，并传递需要传递的数据：</p>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token comment\\\">// 子组件</span>\\n<span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">$emit</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'custom-event'</span><span class=\\\"token punctuation\\\">,</span> data<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\",\"autoDesc\":true}")
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
