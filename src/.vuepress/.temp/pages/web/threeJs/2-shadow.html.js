import comp from "/Users/zeroeldath/Desktop/ignore-space/whatToolsBlog/src/.vuepress/.temp/pages/web/threeJs/2-shadow.html.vue"
const data = JSON.parse("{\"path\":\"/web/threeJs/2-shadow.html\",\"title\":\"2. 光\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"2. 光\",\"tag\":[\"three.js\"],\"recommend\":2,\"description\":\"光照 目标：灯光与阴影 //灯光阴影 //1、材质要满足能够对光照有反应 /2、设置渲染器开启阴影的计算renderer,shadowMap,enabled=true; //3、设置光照投射阴影directionalLight.castshadow=true; //4、设置物体投射阴影sphere,castshadow=true; //5、设置物体接收...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://soft-vault.com/web/threeJs/2-shadow.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Night.Soul\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"2. 光\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"光照 目标：灯光与阴影 //灯光阴影 //1、材质要满足能够对光照有反应 /2、设置渲染器开启阴影的计算renderer,shadowMap,enabled=true; //3、设置光照投射阴影directionalLight.castshadow=true; //4、设置物体投射阴影sphere,castshadow=true; //5、设置物体接收...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Night.Soul\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"three.js\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"2. 光\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Night.Soul\\\",\\\"url\\\":\\\"https://github.com/NightSquirrl\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"光照\",\"slug\":\"光照\",\"link\":\"#光照\",\"children\":[]}],\"readingTime\":{\"minutes\":0.75,\"words\":224},\"filePathRelative\":\"web/threeJs/2-shadow.md\",\"excerpt\":\"<h2>光照</h2>\\n<blockquote>\\n<p>目标：灯光与阴影\\n//灯光阴影\\n//1、材质要满足能够对光照有反应\\n/2、设置渲染器开启阴影的计算renderer,shadowMap,enabled=true;\\n//3、设置光照投射阴影directionalLight.castshadow=true;\\n//4、设置物体投射阴影sphere,castshadow=true;\\n//5、设置物体接收阴影plane.receiveShadow=true;</p>\\n</blockquote>\\n<ol>\\n<li>开启场景中的阴影贴图</li>\\n</ol>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code>renderer<span class=\\\"token punctuation\\\">.</span>shadowMap<span class=\\\"token punctuation\\\">.</span>enabled <span class=\\\"token operator\\\">=</span> <span class=\\\"token boolean\\\">true</span>\\n</code></pre></div>\",\"autoDesc\":true}")
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
