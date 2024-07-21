<template><div><h2 id="同一文件内" tabindex="-1"><a class="header-anchor" href="#同一文件内"><span>同一文件内</span></a></h2>
<blockquote>
<p>父组件 &amp; 子组件</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Father<span class="token punctuation">{</span>
  
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 调用子组件</span>
    <span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">{</span>title<span class="token operator">:</span><span class="token string">"我是标题"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Son<span class="token punctuation">{</span>
  <span class="token keyword">private</span> title<span class="token operator">:</span><span class="token builtin">string</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单独组件封装" tabindex="-1"><a class="header-anchor" href="#单独组件封装"><span>单独组件封装</span></a></h2>
<blockquote>
<p>子组件</p>
</blockquote>
<p>新建文件**/components/TestSon.ets</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token keyword">export</span> struct TestSon <span class="token punctuation">{</span>
   <span class="token keyword">private</span> title<span class="token operator">:</span><span class="token builtin">string</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>父组件</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>TestSon<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"**/TestSon"</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Father<span class="token punctuation">{</span>
  
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 调用子组件</span>
    <span class="token function">TestSon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>title<span class="token operator">:</span><span class="token string">"我是标题"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义构建函数" tabindex="-1"><a class="header-anchor" href="#自定义构建函数"><span>自定义构建函数</span></a></h2>
<h3 id="全局自定义构建函数" tabindex="-1"><a class="header-anchor" href="#全局自定义构建函数"><span>全局自定义构建函数</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Builder</span></span> <span class="token keyword">function</span> <span class="token function">SelfComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    xxx
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部自定义函数" tabindex="-1"><a class="header-anchor" href="#局部自定义函数"><span>局部自定义函数</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Builder</span></span> <span class="token function">SelfComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    xxx
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公共样式" tabindex="-1"><a class="header-anchor" href="#公共样式"><span>公共样式</span></a></h2>
<h3 id="全局公共样式" tabindex="-1"><a class="header-anchor" href="#全局公共样式"><span>全局公共样式</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Styles</span></span> <span class="token keyword">function</span> <span class="token function">testStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部公共样式" tabindex="-1"><a class="header-anchor" href="#局部公共样式"><span>局部公共样式</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Styles</span></span>  <span class="token function">testStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特定组件的样式" tabindex="-1"><a class="header-anchor" href="#特定组件的样式"><span>特定组件的样式</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Extend</span></span><span class="token punctuation">(</span>Text<span class="token punctuation">)</span> <span class="token keyword">function</span> <span class="token function">testStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token function">fontColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


