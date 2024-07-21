<template><div><h1 id="🪤-vue-router" tabindex="-1"><a class="header-anchor" href="#🪤-vue-router"><span>🪤 vue-router</span></a></h1>
<h2 id="路由的相关知识点" tabindex="-1"><a class="header-anchor" href="#路由的相关知识点"><span>路由的相关知识点</span></a></h2>
<h3 id="前端路由" tabindex="-1"><a class="header-anchor" href="#前端路由"><span>前端路由</span></a></h3>
<blockquote>
<p>前端路由是后来发展到SPA（单页应用）时才出现的概念。 SPA 就是一个WEB项目只有一个 HTML 页面，一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转。</p>
</blockquote>
<p>前端路由在SPA项目中是必不可少的，页面的跳转、刷新都与路由有关，通过不同的url显示相应的页面。</p>
<p>优点：前后端的彻底分离，不刷新页面，用户体验较好，页面持久性较好。</p>
<h3 id="后端路由" tabindex="-1"><a class="header-anchor" href="#后端路由"><span>后端路由</span></a></h3>
<p>当在地址栏切换不同的url时，都会向服务器发送一个请求，服务器接收并响应这个请求，在服务端拼接好html文件返回给页面来展示。</p>
<p>优点：减轻了前端的压力，html都由后端拼接；</p>
<p>缺点：依赖于网络，网速慢，用户体验很差，项目比较庞大时，服务器端压力较大，</p>
<p>不能在地址栏输入指定的url访问相应的模块，前后端不分离。</p>
<h3 id="路由模式" tabindex="-1"><a class="header-anchor" href="#路由模式"><span>路由模式</span></a></h3>
<h4 id="hash模式-对应hashhistory" tabindex="-1"><a class="header-anchor" href="#hash模式-对应hashhistory"><span>hash模式（对应HashHistory）</span></a></h4>
<ul>
<li>
<p>前端路由的路径用井号 # 拼接在真实 url 后面的模式，但是会覆盖锚点定位元素的功能，通过监听 URL 的哈希部分变化，相应地更新页面的内容。</p>
</li>
<li>
<p>前端路由的处理完全在客户端进行，在路由发生变化时，只会改变 URL 中的哈希部分(井号 # 后面的路径)，且不会向服务器发送新的请求，而是触发 onhashchange 事件。</p>
</li>
<li>
<p>hash 只有#符号之前的内容才会包含在请求中被发送到后端，如果 nginx 没有匹配得到当前的 url 也没关系。hash 永远不会提交到 server 端。</p>
</li>
<li>
<p>hash值的改变，都会在浏览器的访问历史中增加一个记录，所以可以通过浏览器的回退、前进按钮控制hash的切换。</p>
</li>
<li>
<p>hash 路由不会造成 404 页面的问题，因为所有路由信息都在客户端进行解析和处理，服务器只负责提供应用的初始 HTML 页面和静态资源，不需要关心路由的匹配问题。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// onhashchage事件，可以在window对象上监听这个事件</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>oldURL<span class="token punctuation">,</span> event<span class="token punctuation">.</span>newURL<span class="token punctuation">)</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="history模式-对应html5history" tabindex="-1"><a class="header-anchor" href="#history模式-对应html5history"><span>history模式 （对应HTML5History）</span></a></h4>
<ul>
<li>
<p>是 html5 新推出的功能，比 Hash url 更美观</p>
</li>
<li>
<p>在 history 模式下浏览器在刷新页面时，会按照路径发送真实的资源请求。如果 nginx 没有匹配得到当前的 url ，就会出现 404 的页面。</p>
</li>
<li>
<p>在使用 history 模式时，需要<strong>通过服务端支持允许地址可访问</strong>，如果没有设置，就很容易导致出现 404 的局面。</p>
</li>
<li>
<p>改变url： history 提供了 pushState 和 replaceState 两个方法来记录路由状态，这两个方法只改变 URL 不会引起页面刷新。</p>
</li>
<li>
<p>监听url变化：通过 onpopstate 事件监听history变化，在点击浏览器的前进或者后退功能时触发，在onpopstate 事件中根据状态信息加载对应的页面内容。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'/b'</span><span class="token punctuation">)</span> <span class="token comment">// 替换路由</span>
history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'/a'</span><span class="token punctuation">)</span> <span class="token comment">// 路由压栈，记录浏览器的历史栈 不刷新页面</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回</span>
history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 前进</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 后退2次</span>

window<span class="token punctuation">.</span><span class="token function-variable function">onpopstate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 根据当前 URL 加载对应页面</span>
  <span class="token function">loadPage</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>history.pushState 修改浏览器地址，而页面的加载是通过 onpopstate 事件监听实现，加载对应的页面内容，完成页面更新。</p>
<p>onpopstate 事件是浏览器历史导航的核心事件,它标识了页面状态的变化时机。通过监听这个时机,根据最新的状态信息更新页面</p>
<p>当使用 history.pushState() 或 history.replaceState() 方法修改浏览器的历史记录时，不会直接触发 onpopstate 事件。</p>
<p>但是，可以在调用这些方法时将数据存储在历史记录条目的状态对象中， onpopstate 事件在处理程序中访问该状态对象。这样，就可以在不触发 onpopstate 事件的情况下更新页面内容，并获取到相应的状态值。</p>
<h4 id="history-模式下-404-页面的处理" tabindex="-1"><a class="header-anchor" href="#history-模式下-404-页面的处理"><span>history 模式下 404 页面的处理</span></a></h4>
<p>在 history 模式下，浏览器会向服务器发起请求，服务器根据请求的路径进行匹配：</p>
<p>如果服务器无法找到与请求路径匹配的资源或路由处理器，服务器可以返回 /404 路由，跳转到项目中配置的 404 页面，指示该路径未找到。</p>
<p>对于使用历史路由模式的单页应用（SPA），通常会在服务器配置中添加一个通配符路由，将所有非静态资源的请求都重定向到主页或一个自定义的 404 页面，以保证在前端处理路由时不会出现真正的 404 错误页面。</p>
<p>在项目中配置对应的  404 页面:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> publicRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/404'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'src/views/404/index'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2-vue-router-3" tabindex="-1"><a class="header-anchor" href="#vue2-vue-router-3"><span>Vue2 | vue-router@3</span></a></h2>
<blockquote>
<p>安装</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>yarn add vue<span class="token operator">-</span>router@<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>新建文件 src/router/index.js</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./views/Home.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">'./views/About.vue'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'history'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 设置根路径重定向到 '/home'</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code v-pre>redirect</code> 字段用于指定重定向的路径。</p>
<blockquote>
<p>在入口文件挂在路由</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/about'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue3-vue-router-4" tabindex="-1"><a class="header-anchor" href="#vue3-vue-router-4"><span>Vue3 | vue-router@4</span></a></h2>
<blockquote>
<p>安装</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>新建文件 src/router/index.ts</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//1. 导入相关的 API</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span>createWebHistory<span class="token punctuation">,</span>RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> "vue<span class="token operator">-</span>router

<span class="token comment">// 2. 定义路由组件.</span>
<span class="token comment">// 也可以从其他文件导入</span>
<span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span>Array<span class="token operator">&lt;</span>RouterRecordRaw<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">"/home/:id"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"Home"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'xxxx'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
<span class="token punctuation">]</span>

<span class="token comment">// 3. 创建路由实例并传递 `routes` 配置</span>
<span class="token comment">// 你可以在这里输入更多的配置，但我们在这里</span>
<span class="token comment">// 暂时保持简单</span>


<span class="token comment">// vue2 mode history vue3 createWebHistory</span>
<span class="token comment">// history</span>
<span class="token comment">//</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'popstate'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// vue2 mode hash vue3 createWebHasHistory // 路径会多一个#/</span>
<span class="token comment">// location.hash</span>
<span class="token comment">//window.addEventListener('hashchange',()=> {})</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span><span class="token function">createWebbbHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在 vue 的入口文件进行挂在注册</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入刚刚创建的router</span>

<span class="token comment">// 4. 创建并挂载根实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//确保 _use_ 路由实例使</span>
<span class="token comment">//整个应用支持路由。</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>展示路由</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 5. 展示</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>组件实现路由的跳转</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 6. 跳转</span>
<span class="token comment">// 组件跳转</span>
<span class="token comment">//replace 不保留历史记录</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link replace to<span class="token operator">=</span><span class="token string">''</span><span class="token operator">></span>
<span class="token comment">// 默认 push</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">'{name:"Home"}'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>编程式跳转</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//useRoute 取参数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span>useRoute<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-router"</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token string">""</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//取参</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>
route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>全局前置守卫</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  to<span class="token punctuation">.</span>path
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  to<span class="token punctuation">.</span>path
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


