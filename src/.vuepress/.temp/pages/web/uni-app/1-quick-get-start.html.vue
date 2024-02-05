<template><div><h2 id="_1-项目的创建方式" tabindex="-1"><a class="header-anchor" href="#_1-项目的创建方式"><span>1. 项目的创建方式</span></a></h2>
<h3 id="_1-1-创建-uni-app-项目方式" tabindex="-1"><a class="header-anchor" href="#_1-1-创建-uni-app-项目方式"><span>1.1 创建 uni-app 项目方式</span></a></h3>
<p><strong>uni-app 支持两种方式创建项目：</strong></p>
<ol>
<li>通过 HBuilderX 创建（需安装 HBuilderX 编辑器）</li>
<li>通过命令行创建（需安装 NodeJS 环境）</li>
</ol>
<h2 id="_2-hbuilderx-创建-uni-app-项目" tabindex="-1"><a class="header-anchor" href="#_2-hbuilderx-创建-uni-app-项目"><span>2. HBuilderX 创建 uni-app 项目</span></a></h2>
<ol>
<li>通过可视化的 hbuilderx 的界面创建项目</li>
</ol>
<figure><img src="https://img.picgo.net/2023/11/24/uniapp_picture_2.609bc84658543df29435596a.png" alt="uniapp_picture_2.609bc846" tabindex="0" loading="lazy"><figcaption>uniapp_picture_2.609bc846</figcaption></figure>
<ol start="2">
<li><strong>安装 uni-app vue3 编译器插件</strong></li>
<li>点击工具-&gt;安装插件,选择 uni-app(vue3)</li>
<li>打开微信小程序开发者工具,点击设置,点击安全,打开服务端口</li>
<li>在 hbuilderx 中点击运行,选择微信开发者工具
<ol>
<li>然后就会在微信小程序打开,可以点击运行实时查看我们的界面</li>
</ol>
</li>
</ol>
<h2 id="_3-命令行创建-uni-app-项目" tabindex="-1"><a class="header-anchor" href="#_3-命令行创建-uni-app-项目"><span>3. 命令行创建 uni-app 项目</span></a></h2>
<p><strong>优势</strong></p>
<p>通过命令行创建 uni-app 项目，<strong>不必依赖 HBuilderX</strong>，TypeScript 类型支持友好。</p>
<p><strong>命令行创建</strong> <strong>uni-app</strong> <strong>项目：</strong></p>
<p>vue3 + ts 版</p>
<h3 id="github" tabindex="-1"><a class="header-anchor" href="#github"><span>github</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 通过 npx 从 github 下载</span>
npx degit dcloudio/uni-preset-vue<span class="token comment">#vite-ts 项目名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="国内-gitee" tabindex="-1"><a class="header-anchor" href="#国内-gitee"><span>国内 gitee</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 通过 git 从 gitee 克隆下载</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> vite-ts https://gitee.com/dcloud/uni-preset-vue.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>常见问题</p>
<ul>
<li>运行 <code v-pre>npx</code> 命令下载失败，请尝试换成<strong>手机热点重试</strong></li>
<li>换手机热点依旧失败，请尝试从<a href="https://gitee.com/dcloud/uni-preset-vue/tree/vite-ts/" target="_blank" rel="noopener noreferrer">国内备用地址下载<ExternalLinkIcon/></a></li>
<li>在 <code v-pre>manifest.json</code> 文件添加 <a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">小程序 AppID<ExternalLinkIcon/></a> 用于真机预览</li>
<li>运行 <code v-pre>npx</code> 命令需依赖 NodeJS 环境，<a href="https://nodejs.org/zh-cn" target="_blank" rel="noopener noreferrer">NodeJS 下载地址<ExternalLinkIcon/></a></li>
<li>运行 <code v-pre>git</code> 命令需依赖 Git 环境，<a href="https://git-scm.com/download/" target="_blank" rel="noopener noreferrer">Git 下载地址<ExternalLinkIcon/></a></li>
</ul>
</blockquote>
<h2 id="_4-vs-code-开发-uni-app-项目" tabindex="-1"><a class="header-anchor" href="#_4-vs-code-开发-uni-app-项目"><span>4.  VS Code 开发 uni-app 项目</span></a></h2>
<h3 id="为什么选择-vs-code" tabindex="-1"><a class="header-anchor" href="#为什么选择-vs-code"><span>为什么选择 VS Code？</span></a></h3>
<ul>
<li>VS Code 对 <strong>TS 类型支持友好</strong>，前端开发者<strong>主流的编辑器</strong></li>
<li>HbuilderX 对 TS 类型支持暂不完善，期待官方完善 👀</li>
</ul>
<h3 id="用-vs-code-开发配置" tabindex="-1"><a class="header-anchor" href="#用-vs-code-开发配置"><span>用 VS Code 开发配置</span></a></h3>
<p>项目采用 Vue3 + TS 开发 uni-app 项目，所以需要分别安装 Vue3 + TS 插件 和 uni-app 插件。</p>
<h4 id="安装-vue3-ts-插件" tabindex="-1"><a class="header-anchor" href="#安装-vue3-ts-插件"><span>安装 Vue3 + TS 插件</span></a></h4>
<blockquote>
<p>注意事项</p>
<p>没开发过 Vue3 + TS 项目的小伙伴注意，需要先安装 Vue3 和 TS 的插件，并完成以下配置 👇</p>
<ul>
<li>安装 <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noopener noreferrer">Vue Language Features (Volar)<ExternalLinkIcon/></a> ：Vue3 语法提示插件</li>
<li>安装 <a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank" rel="noopener noreferrer">TypeScript Vue Plugin (Volar)<ExternalLinkIcon/></a> ：Vue3 的 TS 插件</li>
<li><strong>工作区禁用</strong> Vetur 插件(Vue2 插件和 Vue3 插件冲突)</li>
<li><strong>工作区禁用</strong> @builtin typescript 插件（禁用后自动开启 Vue3 的 TS 托管模式）</li>
</ul>
<p><a href="https://cn.vuejs.org/guide/typescript/overview.html#ide-support" target="_blank" rel="noopener noreferrer">查看 Vue3 官方文档<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="https://img.picgo.net/2023/11/24/uniapp_vscode_setting.75574ba64ddb340202c90793.png" alt="uniapp_vscode_setting.75574ba6" tabindex="0" loading="lazy"><figcaption>uniapp_vscode_setting.75574ba6</figcaption></figure>
<h4 id="安装-uni-app-插件" tabindex="-1"><a class="header-anchor" href="#安装-uni-app-插件"><span>安装 uni-app 插件</span></a></h4>
<ul>
<li>👉 安装 uni-app 开发插件
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=mrmaoddxxaa.create-uniapp-view" target="_blank" rel="noopener noreferrer">uni-create-view<ExternalLinkIcon/></a> ：快速创建 uni-app 页面</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-helper-vscode" target="_blank" rel="noopener noreferrer">uni-helper<ExternalLinkIcon/></a> ：uni-app 代码提示</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=evils.uniapp-vscode" target="_blank" rel="noopener noreferrer">uniapp 小程序扩展<ExternalLinkIcon/></a> ：鼠标悬停查文档</li>
</ul>
</li>
<li>👉 TS 类型校验
<ul>
<li>安装 <strong>类型声明文件</strong> <code v-pre>pnpm i -D miniprogram-api-typings @uni-helper/uni-app-types</code></li>
<li>配置 <code v-pre>tsconfig.json</code></li>
</ul>
</li>
<li>👉 JSON 注释问题
<ul>
<li>设置文件关联，把 <code v-pre>manifest.json</code> 和 <code v-pre>pages.json</code> 设置为 <code v-pre>jsonc</code></li>
</ul>
</li>
</ul>
<p><code v-pre>tsconfig.json</code> 参考</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"@vue/tsconfig/tsconfig.json"</span><span class="token punctuation">,</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/*"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"esnext"</span><span class="token punctuation">,</span> <span class="token string">"dom"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 类型声明文件</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"@dcloudio/types"</span><span class="token punctuation">,</span> <span class="token comment">// uni-app API 类型</span>
      <span class="token string">"miniprogram-api-typings"</span><span class="token punctuation">,</span> <span class="token comment">// 原生微信小程序类型</span>
      <span class="token string">"@uni-helper/uni-app-types"</span> <span class="token comment">// uni-app 组件类型</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// vue 编译器类型，校验标签类型</span>
  <span class="token property">"vueCompilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 原配置 `experimentalRuntimeMode` 现调整为 `nativeTags`</span>
    <span class="token property">"nativeTags"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"block"</span><span class="token punctuation">,</span> <span class="token string">"component"</span><span class="token punctuation">,</span> <span class="token string">"template"</span><span class="token punctuation">,</span> <span class="token string">"slot"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/**/*.ts"</span><span class="token punctuation">,</span> <span class="token string">"src/**/*.d.ts"</span><span class="token punctuation">,</span> <span class="token string">"src/**/*.tsx"</span><span class="token punctuation">,</span> <span class="token string">"src/**/*.vue"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>工作区设置参考</strong></p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token comment">// .vscode/settings.json</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 在保存时格式化文件</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 文件格式化配置</span>
  <span class="token property">"[json]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置语言的文件关联</span>
  <span class="token property">"files.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pages.json"</span><span class="token operator">:</span> <span class="token string">"jsonc"</span><span class="token punctuation">,</span> <span class="token comment">// pages.json 可以写注释</span>
    <span class="token property">"manifest.json"</span><span class="token operator">:</span> <span class="token string">"jsonc"</span> <span class="token comment">// manifest.json 可以写注释</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>版本升级</p>
<ul>
<li>原依赖 <code v-pre>@types/wechat-miniprogram</code> 现调整为 <a href="https://github.com/wechat-miniprogram/api-typings" target="_blank" rel="noopener noreferrer">miniprogram-api-typings<ExternalLinkIcon/></a>。</li>
<li>原配置 <code v-pre>experimentalRuntimeMode</code> 现调整为 <code v-pre>nativeTags</code>。</li>
</ul>
</blockquote>
<p>这一步处理很关键，否则 TS 项目无法校验组件属性类型。</p>
<h2 id="_5-解读-pages-json" tabindex="-1"><a class="header-anchor" href="#_5-解读-pages-json"><span>5. 解读 pages.json</span></a></h2>
<p>用于配置页面路由、导航栏、tabBar 等页面类信息</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 页面路由</span>
  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
      <span class="token comment">// 页面样式配置</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"首页"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/my/my"</span><span class="token punctuation">,</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"我的"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 全局样式配置</span>
  <span class="token property">"globalStyle"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"uni-app"</span><span class="token punctuation">,</span>
    <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#27BA9B"</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#F8F8F8"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// tabBar 配置</span>
  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#27BA9B"</span><span class="token punctuation">,</span>
    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/home_default.png"</span><span class="token punctuation">,</span>
        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/home_selected.png"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/my/my"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"我的"</span><span class="token punctuation">,</span>
        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/user_default.png"</span><span class="token punctuation">,</span>
        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/user_selected.png"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-uni-app-和原生小程序开发区别" tabindex="-1"><a class="header-anchor" href="#_6-uni-app-和原生小程序开发区别"><span>6. uni-app 和原生小程序开发区别</span></a></h2>
<h3 id="开发区别" tabindex="-1"><a class="header-anchor" href="#开发区别"><span>开发区别</span></a></h3>
<p>uni-app 项目每个页面是一个 <code v-pre>.vue</code> 文件，数据绑定及事件处理同 <code v-pre>Vue.js</code> 规范：</p>
<ol>
<li>属性绑定 <code v-pre>src=&quot;{ { url }}&quot;</code> 升级成 <code v-pre>:src=&quot;url&quot;</code></li>
<li>事件绑定 <code v-pre>bindtap=&quot;eventName&quot;</code> 升级成 <code v-pre>@tap=&quot;eventName&quot;</code>，<strong>支持（）传参</strong></li>
<li>支持 Vue 常用<strong>指令</strong> <code v-pre>v-for</code>、<code v-pre>v-if</code>、<code v-pre>v-show</code>、<code v-pre>v-model</code> 等</li>
</ol>
<h3 id="其他区别补充" tabindex="-1"><a class="header-anchor" href="#其他区别补充"><span>其他区别补充</span></a></h3>
<ol>
<li>调用接口能力，<strong>建议前缀</strong> <code v-pre>wx</code> 替换为 <code v-pre>uni</code> ，养成好习惯，<strong>支持多端开发</strong>。</li>
<li><code v-pre>&lt;style&gt;</code> 页面样式不需要写 <code v-pre>scoped</code>，小程序是多页面应用，<strong>页面样式自动隔离</strong>。</li>
<li><strong>生命周期分三部分</strong>：应用生命周期(小程序)，页面生命周期(小程序)，组件生命周期(Vue)</li>
</ol>
<h2 id="_7-组件库" tabindex="-1"><a class="header-anchor" href="#_7-组件库"><span>7. 组件库</span></a></h2>
<p>安装 <a href="https://uniapp.dcloud.net.cn/component/uniui/quickstart.html#npm%E5%AE%89%E8%A3%85" target="_blank" rel="noopener noreferrer">uni-ui 组件库<ExternalLinkIcon/></a></p>
<div class="language-bahs line-numbers-mode" data-ext="bahs" data-title="bahs"><pre v-pre class="language-bahs"><code>pnpm i @dcloudio/uni-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置自动导入组件</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token comment">// pages.json</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 组件自动导入</span>
  <span class="token property">"easycom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"autoscan"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
+      <span class="token comment">// uni-ui 规则如下配置  </span>
+      <span class="token property">"^uni-(.*)"</span><span class="token operator">:</span> <span class="token string">"@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// …省略</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装类型声明文件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> @uni-helper/uni-ui-types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>配置类型声明文件</strong></p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"@dcloudio/types"</span><span class="token punctuation">,</span> <span class="token comment">// uni-app API 类型</span>
      <span class="token string">"miniprogram-api-typings"</span><span class="token punctuation">,</span> <span class="token comment">// 原生微信小程序类型</span>
      <span class="token string">"@uni-helper/uni-app-types"</span><span class="token punctuation">,</span> <span class="token comment">// uni-app 组件类型</span>
+      <span class="token string">"@uni-helper/uni-ui-types"</span> <span class="token comment">// uni-ui 组件类型  </span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// vue 编译器类型，校验标签类型</span>
  <span class="token property">"vueCompilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"nativeTags"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"block"</span><span class="token punctuation">,</span> <span class="token string">"component"</span><span class="token punctuation">,</span> <span class="token string">"template"</span><span class="token punctuation">,</span> <span class="token string">"slot"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-小程序端-pinia-持久化" tabindex="-1"><a class="header-anchor" href="#_8-小程序端-pinia-持久化"><span>8. 小程序端 Pinia 持久化</span></a></h2>
<p>说明：<code v-pre>Pinia</code> 用法与 <code v-pre>Vue3</code> 项目完全一致，<code v-pre>uni-app</code> 项目仅需解决<strong>持久化插件兼容性</strong>问题。</p>
<h3 id="持久化存储插件" tabindex="-1"><a class="header-anchor" href="#持久化存储插件"><span>持久化存储插件</span></a></h3>
<p>安装持久化存储插件： <a href="https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html#storage" target="_blank" rel="noopener noreferrer">pinia-plugin-persistedstate<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i pinia-plugin-persistedstate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插件默认使用 <code v-pre>localStorage</code> 实现持久化，小程序端不兼容，需要替换持久化 API。</p>
<blockquote>
<p>Stores/modules/member.ts</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">// 定义 Store</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useMemberStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
  <span class="token string">'member'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 会员信息</span>
    <span class="token keyword">const</span> profile <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 保存会员信息，登录时使用</span>
    <span class="token keyword">const</span> <span class="token function-variable function">setProfile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      profile<span class="token punctuation">.</span>value <span class="token operator">=</span> val
    <span class="token punctuation">}</span>

    <span class="token comment">// 清理会员信息，退出时使用</span>
    <span class="token keyword">const</span> <span class="token function-variable function">clearProfile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      profile<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 记得 return</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      profile<span class="token punctuation">,</span>
      setProfile<span class="token punctuation">,</span>
      clearProfile<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// TODO: 持久化</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Stores/index/ts</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> persist <span class="token keyword">from</span> <span class="token string">'pinia-plugin-persistedstate'</span>

<span class="token comment">// 创建 pinia 实例</span>
<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 使用持久化存储插件</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>persist<span class="token punctuation">)</span>

<span class="token comment">// 默认导出，给 main.ts 使用</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> pinia

<span class="token comment">// 模块统一导出</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./modules/member'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>main.ts</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createSSRApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> pinia <span class="token keyword">from</span> <span class="token string">'./stores'</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createSSRApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多端兼容" tabindex="-1"><a class="header-anchor" href="#多端兼容"><span>多端兼容</span></a></h3>
<p><strong>网页端持久化 API</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 网页端API</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多端持久化 API</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 兼容多端API</span>
uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>
<span class="token comment">// stores/modules/member.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useMemberStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
  <span class="token string">'member'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">//…省略</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 配置持久化</span>
    <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 调整为兼容多端的API</span>
      <span class="token literal-property property">storage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-uni-request-请求封装" tabindex="-1"><a class="header-anchor" href="#_9-uni-request-请求封装"><span>9. uni.request 请求封装</span></a></h2>
<h3 id="请求和上传文件拦截器" tabindex="-1"><a class="header-anchor" href="#请求和上传文件拦截器"><span>请求和上传文件拦截器</span></a></h3>
<blockquote>
<p>实现需求</p>
<ol>
<li>拼接基础地址</li>
<li>设置超时时间</li>
<li>添加请求头标识</li>
<li>添加 token</li>
</ol>
</blockquote>
<p>参考代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/utils/http.ts</span>

<span class="token comment">// 请求基地址</span>
<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">'https://pcapi-xiaotuxian-front-devtest.itheima.net'</span>

<span class="token comment">// 拦截器配置</span>
<span class="token keyword">const</span> httpInterceptor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 拦截前触发</span>
  <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> UniApp<span class="token punctuation">.</span>RequestOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 非 http 开头需拼接地址</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">.</span>url <span class="token operator">=</span> baseURL <span class="token operator">+</span> options<span class="token punctuation">.</span>url
    <span class="token punctuation">}</span>
    <span class="token comment">// 2. 请求超时</span>
    options<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span>
    <span class="token comment">// 3. 添加小程序端请求头标识</span>
    options<span class="token punctuation">.</span>header <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'source-client'</span><span class="token operator">:</span> <span class="token string">'miniapp'</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>options<span class="token punctuation">.</span>header<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 4. 添加 token 请求头标识</span>
    <span class="token keyword">const</span> memberStore <span class="token operator">=</span> <span class="token function">useMemberStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> memberStore<span class="token punctuation">.</span>profile<span class="token operator">?.</span>token
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">.</span>header<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 拦截 request 请求</span>
uni<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span> httpInterceptor<span class="token punctuation">)</span>
<span class="token comment">// 拦截 uploadFile 文件上传</span>
uni<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token string">'uploadFile'</span><span class="token punctuation">,</span> httpInterceptor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>常见问题</p>
<p><strong>问:</strong> 为什么用手机预览没有数据？</p>
<p><strong>答:</strong> 微信小程序端，需登录 <a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">微信公众平台<ExternalLinkIcon/></a> 配置以下地址为合法域名 👇</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>https://pcapi-xiaotuxian-front-devtest.itheima.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h3 id="封装-promise-请求函数" tabindex="-1"><a class="header-anchor" href="#封装-promise-请求函数"><span>封装 Promise 请求函数</span></a></h3>
<p>实现需求</p>
<ol>
<li>返回 Promise 对象，用于处理返回值类型</li>
<li>成功 resolve
<ol>
<li>提取数据</li>
<li>添加泛型</li>
</ol>
</li>
<li>失败 reject
<ol>
<li>401 错误</li>
<li>其他错误</li>
<li>网络错误</li>
</ol>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 请求函数
 * <span class="token keyword">@param</span>  <span class="token parameter">UniApp<span class="token punctuation">.</span>RequestOptions</span>
 * <span class="token keyword">@returns</span> Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */</span>
type Data<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> string
  <span class="token literal-property property">msg</span><span class="token operator">:</span> string
  <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2.2 添加类型，支持泛型</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> UniApp<span class="token punctuation">.</span>RequestOptions</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 返回 Promise 对象</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span>Data<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>options<span class="token punctuation">,</span>
      <span class="token comment">// 响应成功</span>
      <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 状态码 2xx，参考 axios 的设计</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>statusCode <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 2.1 提取核心数据 res.data</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data <span class="token keyword">as</span> Data<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 401错误  -> 清理用户信息，跳转到登录页</span>
          <span class="token keyword">const</span> memberStore <span class="token operator">=</span> <span class="token function">useMemberStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          memberStore<span class="token punctuation">.</span><span class="token function">clearProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/login/login'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 其他错误 -> 根据后端错误信息轻提示</span>
          uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data <span class="token keyword">as</span> Data<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">.</span>msg <span class="token operator">||</span> <span class="token string">'请求错误'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 响应失败</span>
      <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'网络错误，换个网络试试'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-统一代码风格" tabindex="-1"><a class="header-anchor" href="#_10-统一代码风格"><span>10. 统一代码风格</span></a></h2>
<ul>
<li>安装 <code v-pre>eslint</code> + <code v-pre>prettier</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> eslint prettier eslint-plugin-vue @vue/eslint-config-prettier @vue/eslint-config-typescript @rushstack/eslint-patch @vue/tsconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>新建 <code v-pre>.eslintrc.cjs</code> 文件，添加以下 <code v-pre>eslint</code> 配置</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">/* eslint-env node */</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@rushstack/eslint-patch/modern-module-resolution'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'plugin:vue/vue3-essential'</span><span class="token punctuation">,</span>
    <span class="token string">'eslint:recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'@vue/eslint-config-typescript'</span><span class="token punctuation">,</span>
    <span class="token string">'@vue/eslint-config-prettier'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 小程序全局变量</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">uni</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">WechatMiniprogram</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getCurrentPages</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getApp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">UniApp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">UniHelper</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">App</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Page</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Component</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AnyObject</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">'latest'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'prettier/prettier'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'warn'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/multi-word-component-names'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'off'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/no-setup-props-destructure'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'off'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/no-deprecated-html-element-is'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'off'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/no-unused-vars'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'off'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置 <code v-pre>package.json</code></li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"script"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... 省略 ...</span>
    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext .vue,.js,.ts --fix --ignore-path .gitignore"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-工作流规范-husky" tabindex="-1"><a class="header-anchor" href="#git-工作流规范-husky"><span>Git 工作流规范 --- husky</span></a></h3>
<ul>
<li>安装并初始化 <code v-pre>husky</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> dlx husky-init

npx husky-init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>安装 <code v-pre>lint-staged</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>配置 <code v-pre>package.json</code></li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"script"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... 省略 ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*.{vue,ts,js}"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"eslint --fix"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改 <code v-pre>.husky/pre-commit</code> 文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>- <span class="token function">npm</span> <span class="token builtin class-name">test</span>   
+ <span class="token function">npm</span> run lint-staged  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-安全区域" tabindex="-1"><a class="header-anchor" href="#_11-安全区域"><span>11. 安全区域</span></a></h2>
<p>不同手机的安全区域不同，适配安全区域能防止页面重要内容被遮挡。</p>
<p>可通过 <code v-pre>uni.getSystemInfoSync()</code> 获取屏幕边界到安全区的距离。</p>
<figure><img src="https://img.picgo.net/2023/11/24/home_picture_2.89dbf50654a7fda1fc332c6b.png" alt="安全区域" tabindex="0" loading="lazy"><figcaption>安全区域</figcaption></figure>
<p><strong>自定义导航配置</strong></p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token comment">// src/pages.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
  <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"navigationStyle"</span><span class="token operator">:</span> <span class="token string">"custom"</span><span class="token punctuation">,</span> <span class="token comment">// 隐藏默认导航</span>
    <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"首页"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件安全区适配</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> src<span class="token operator">/</span>pages<span class="token operator">/</span>index<span class="token operator">/</span>componets<span class="token operator">/</span>CustomNavbar<span class="token punctuation">.</span>vue <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// 获取屏幕边界到安全区域距离</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> safeAreaInsets <span class="token punctuation">}</span> <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 顶部占位 <span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"navbar"</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"{ paddingTop: safeAreaInsets?.top + 'px' }"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">...</span>省略 <span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-父组件调用子组件的方法" tabindex="-1"><a class="header-anchor" href="#_12-父组件调用子组件的方法"><span>12. 父组件调用子组件的方法</span></a></h2>
<p>实现流程</p>
<blockquote>
<p>父组件传递参数 ref=&quot;child&quot;</p>
<p>获取组件的实例类型主要是 ts 使用</p>
<p>父组件调用</p>
<p>Child.value.子方法</p>
<p>子组件暴漏方法</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">export</span> type types <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token keyword">typeof</span>  子组件<span class="token operator">></span>


child<span class="token punctuation">.</span>value<span class="token punctuation">.</span>暴漏的方法的 key

<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  暴露方法的 key<span class="token operator">:</span>具体的暴漏方法
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-下拉刷新" tabindex="-1"><a class="header-anchor" href="#_13-下拉刷新"><span>13. 下拉刷新</span></a></h2>
<p>基于 <code v-pre>scroll-view</code> 组件实现下拉刷新，需要通过以下方式来实现下拉刷新的功能。</p>
<ul>
<li>配置 <code v-pre>refresher-enabled</code> 属性，开启下拉刷新交互</li>
<li>监听 <code v-pre>@refresherrefresh</code> 事件，判断用户是否执行了下拉操作</li>
<li>配置 <code v-pre>refresher-triggered</code> 属性，关闭下拉状态</li>
</ul>
<h2 id="_14-骨架屏" tabindex="-1"><a class="header-anchor" href="#_14-骨架屏"><span>14. 骨架屏</span></a></h2>
<p>在微信小程序的模拟器界面点击页面信息</p>
<figure><img src="https://img.picgo.net/2023/11/24/image-20231124213814562917856bb6661864e.png" alt="image-20231124213814562" tabindex="0" loading="lazy"><figcaption>image-20231124213814562</figcaption></figure>
<figure><img src="https://img.picgo.net/2023/11/24/image-202311242138293702604bbff0de03b52.png" alt="image-20231124213829370" tabindex="0" loading="lazy"><figcaption>image-20231124213829370</figcaption></figure>
<p>将生成的代码进行修改 vue 即可</p>
<h2 id="_15-wx-获取登录凭证" tabindex="-1"><a class="header-anchor" href="#_15-wx-获取登录凭证"><span>15. WX 获取登录凭证</span></a></h2>
<p>前端：调用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html" target="_blank" rel="noopener noreferrer">wx.login()<ExternalLinkIcon/></a> 接口获取登录凭证（code）。</p>
<h3 id="获取手机号码" tabindex="-1"><a class="header-anchor" href="#获取手机号码"><span>获取手机号码</span></a></h3>
<p>出于安全限制，小程序【规定】想获取用户的手机号，必须由用户主动【点击按钮】并【允许申请】才可获取加密的手机号信息。</p>
<p><strong>前端</strong>：提供 <code v-pre>open-type</code> 按钮，在事件处理函数中获取加密的手机号信息。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"button phone"</span> open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"getPhoneNumber"</span> @getphonenumber<span class="token operator">=</span><span class="token string">"onGetphonenumber"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>text <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"icon icon-phone"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>text<span class="token operator">></span>
手机号快捷登录
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-分包预下载" tabindex="-1"><a class="header-anchor" href="#_16-分包预下载"><span>16. 分包预下载</span></a></h2>
<p>当用户进入【我的】页面时，由框架自动预下载【会员模块】的分包，提升进入后续分包页面时的启动速度。</p>
<h3 id="操作方式" tabindex="-1"><a class="header-anchor" href="#操作方式"><span>操作方式</span></a></h3>
<p>新建一个文件夹专门用来存储分包的页面</p>
<p>如果已经配置了之前 vscode 的插件</p>
<p>可以右键文件夹选择分包页面</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token comment">// src/pages.json</span>

<span class="token punctuation">{</span>
  <span class="token comment">// ...省略</span>
  <span class="token comment">// 分包加载规则</span>
  <span class="token property">"subPackages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 子包的根目录</span>
      <span class="token property">"root"</span><span class="token operator">:</span> <span class="token string">"pagesMember"</span><span class="token punctuation">,</span>
      <span class="token comment">// 页面路径和窗口表现</span>
      <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"settings/settings"</span><span class="token punctuation">,</span>
          <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"设置"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 分包预下载规则</span>
  <span class="token property">"preloadRule"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pages/my/my"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"network"</span><span class="token operator">:</span> <span class="token string">"all"</span><span class="token punctuation">,</span> 
      <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pagesMember"</span><span class="token punctuation">]</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-项目打包" tabindex="-1"><a class="header-anchor" href="#_17-项目打包"><span>17. 项目打包</span></a></h2>
<h3 id="核心步骤" tabindex="-1"><a class="header-anchor" href="#核心步骤"><span>核心步骤</span></a></h3>
<ol>
<li>运行打包命令 <code v-pre>pnpm build:mp-weixin</code></li>
<li>预览和测试，微信开发者工具导入生成的 <code v-pre>/dist/build/mp-weixin</code> 目录</li>
<li>上传小程序代码</li>
<li>提交审核和发布</li>
</ol>
<h3 id="条件编译" tabindex="-1"><a class="header-anchor" href="#条件编译"><span>条件编译</span></a></h3>
<blockquote>
<p>常见问题</p>
<p>Q：按照 uni-app 规范开发可保证多平台兼容，但每个平台有自己的一些特性，该如何处理？</p>
<p>A：通过 <a href="https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor" target="_blank" rel="noopener noreferrer">条件编译<ExternalLinkIcon/></a>，让代码按条件编译到指定平台。</p>
</blockquote>
<p><strong>网页端不支持微信平台授权登录等功能</strong>，可通过 <a href="https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor" target="_blank" rel="noopener noreferrer">条件编译<ExternalLinkIcon/></a>，实现不同端渲染不同的登录界面。</p>
<h3 id="条件编译语法" tabindex="-1"><a class="header-anchor" href="#条件编译语法"><span>条件编译语法</span></a></h3>
<p>通过特殊注释，以 <strong><code v-pre>#ifdef</code></strong> 或 <strong><code v-pre>#ifndef</code></strong> 加 <strong>平台名称</strong> 开头，以 <strong><code v-pre>#endif</code></strong> 结尾。</p>
<p>多平台编译：<strong><code v-pre>#ifdef H5 || MP-WEIXIN</code></strong> 表示在 <strong>H5 端 或 微信小程序端</strong> 代码。</p>
<p>条件编译支持: 支持 .vue, .ts, .js, .scss, .css, pages.json 等文件。</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 微信平台特有API，需要条件编译</span>
<span class="token comment">// #ifdef MP-WEIXIN</span>
wx<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
wx<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// #endif</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 微信开发能力按钮，需要条件编译 --></span>
  <span class="token comment">&lt;!-- #ifdef MP-WEIXIN --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openSetting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>授权管理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>feedback<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>问题反馈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contact<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>联系我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- #endif --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 如果出现样式兼容，也可添加条件编译 */</span>
<span class="token selector">page</span> <span class="token punctuation">{</span>
  <span class="token comment">/* #ifdef H5 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token comment">/* #endif */</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>开发技巧</p>
<p>可通过搜索 <code v-pre>wx.</code> 和 <code v-pre>open-type</code> 等平台关键词，快速查找需要<strong>小程序端</strong>需添加编译模式的代码。</p>
</blockquote>
<h3 id="打包为-h5-端" tabindex="-1"><a class="header-anchor" href="#打包为-h5-端"><span>打包为 H5 端</span></a></h3>
<p>把当前 uni-app 项目打包成网页(H5)端，并配置路由基础路径。</p>
<h3 id="核心步骤-1" tabindex="-1"><a class="header-anchor" href="#核心步骤-1"><span>核心步骤</span></a></h3>
<ol>
<li>运行打包命令 <code v-pre>pnpm build:h5</code></li>
<li>预览和测试，使用浏览器打开 <code v-pre>/dist/build/h5</code> 目录下的 <code v-pre>index.html</code> 文件</li>
<li>由运维部署到服务器</li>
</ol>
<h3 id="路由基础路径" tabindex="-1"><a class="header-anchor" href="#路由基础路径"><span>路由基础路径</span></a></h3>
<p>默认的路由基础路径为 <code v-pre>/</code> 根路径，部分网站并不是部署到根路径，需要按运维要求调整。</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code>
<span class="token comment">// manifest.json</span>
<span class="token punctuation">{</span>
  <span class="token comment">/* 网页端特有配置 */</span>
  <span class="token property">"h5"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"router"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 基础路径：./ 为相对路径</span>
      <span class="token property">"base"</span><span class="token operator">:</span> <span class="token string">"./"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token comment">/* 小程序特有相关 */</span><span class="token punctuation">,</span>
  <span class="token property">"mp-weixin"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// …省略</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"vueVersion"</span><span class="token operator">:</span> <span class="token string">"3"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包为-app-端" tabindex="-1"><a class="header-anchor" href="#打包为-app-端"><span>打包为 APP 端</span></a></h3>
<p><a href="https://uniapp.dcloud.net.cn/tutorial/run/run-app.html" target="_blank" rel="noopener noreferrer">App 端<ExternalLinkIcon/></a> 的打包，预览、测试、发行，使用 <code v-pre>HBuilderX</code> 工具。</p>
</div></template>


