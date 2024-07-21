<template><div><h2 id="_1-apply-方法" tabindex="-1"><a class="header-anchor" href="#_1-apply-方法"><span>1. <code v-pre>apply</code> 方法</span></a></h2>
<blockquote>
<p><code v-pre>apply</code> 方法允许你调用一个函数，并指定函数内部的 <code v-pre>this</code> 值和一个参数数组（或类数组对象）作为参数。语法如下：</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">functionName</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数体</span>
<span class="token punctuation">}</span>

<span class="token function">functionName</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>thisValue<span class="token punctuation">,</span> <span class="token punctuation">[</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>thisValue</code> 参数是要将函数绑定到的对象，它将成为函数内部的 <code v-pre>this</code> 值。<code v-pre>arg1</code>, <code v-pre>arg2</code>, ... 是函数的参数。</p>
</blockquote>
<h2 id="_2-call" tabindex="-1"><a class="header-anchor" href="#_2-call"><span>2. call</span></a></h2>
<blockquote>
<p><code v-pre>call</code> 方法与 <code v-pre>apply</code> 方法类似，但是参数需要按照单独的参数传递，而不是作为数组。语法如下：</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">functionName</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数体</span>
<span class="token punctuation">}</span>

<span class="token function">functionName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisValue<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>thisValue</code> 参数是要将函数绑定到的对象，<code v-pre>arg1</code>, <code v-pre>arg2</code>, ... 是函数的参数。</p>
</blockquote>
<h2 id="_3-bind" tabindex="-1"><a class="header-anchor" href="#_3-bind"><span>3. bind</span></a></h2>
<blockquote>
<p><code v-pre>bind</code>:它也可以用于改变函数的执行上下文。不同之处在于，<code v-pre>bind</code> 方法返回一个新的函数，而不是<mark>立即执行函数</mark>。你可以稍后调用返回的函数。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">functionName</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数体</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> boundFunction <span class="token operator">=</span> <span class="token function">functionName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>thisValue<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">boundFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


