<template><div><h1 id="页面路由" tabindex="-1"><a class="header-anchor" href="#页面路由"><span>页面路由</span></a></h1>
<p>页面栈的最大容量是 32 个页面使用 router.clear()方法可以清空页面栈 释放内存</p>
<p>Router 两种页面跳转的方式:</p>
<ul>
<li>router.pushUrl():入栈页面router.back()返回页面</li>
<li>router.replaceUrl():替换当前的页面 无法返回</li>
</ul>
<p>Router 两种页面实例模式:</p>
<ul>
<li>Standard:标准模式每次跳转页面新建页面入栈</li>
<li>Single:单例模式 如果目标的页面已存在页面中 将其移动到栈顶</li>
</ul>
<h2 id="页面路由-1" tabindex="-1"><a class="header-anchor" href="#页面路由-1"><span>页面路由</span></a></h2>
<ol>
<li>
<p>导入模块</p>
</li>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">"@ohos.router"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>使用 router 实现页面的跳转</p>
</li>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code>router<span class="token punctuation">.</span><span class="token function">pushUrl</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    url<span class="token operator">:</span><span class="token string">'pages/xxx'</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span><span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  router<span class="token punctuation">.</span>RouterMode<span class="token punctuation">.</span>Single<span class="token punctuation">,</span>
  err<span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'跳转失败'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>错误码</p>
</li>
<li>
<div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre v-pre class="language-tex"><code>100001:内部错误,可能是页面渲染失败
100002:路由地址错误
100003:栈页面超过 32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取参数</p>
</li>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code>router<span class="token punctuation">.</span><span class="token function">getParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>返回上一页</p>
</li>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 上一页</span>
router<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 指定页面</span>
router<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span>
 <span class="token punctuation">{</span>
    url<span class="token operator">:</span><span class="token string">'pages/xxx'</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span><span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>main_pages.json 页面配置</p>
</li>
</ol>
</div></template>


