import comp from "/Users/zeroeldath/Desktop/ignore-space/zero-eldath/whatToolsBlog/src/.vuepress/.temp/pages/server/git/collect.html.vue"
const data = JSON.parse("{\"path\":\"/server/git/collect.html\",\"title\":\"🥹 git 收集\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"🥹 git 收集\",\"tag\":[\"git\"],\"star\":true,\"description\":\" git 无法检测到 文件夹命名大小写的变化如何解决 修改上次提交 撤销提交 \"},\"headers\":[],\"readingTime\":{\"minutes\":0.76,\"words\":229},\"filePathRelative\":\"server/git/collect.md\",\"excerpt\":\"<blockquote>\\n<p>git 无法检测到 文件夹命名大小写的变化如何解决</p>\\n</blockquote>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token function\\\">git</span> config core.ignorecase <span class=\\\"token comment\\\"># 查看本地仓库git忽略大小写是打开还是关闭</span>\\n<span class=\\\"token function\\\">git</span> config core.ignorecase <span class=\\\"token boolean\\\">false</span> <span class=\\\"token comment\\\"># 关闭忽略大小写</span>\\n</code></pre></div>\",\"autoDesc\":true}")
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
