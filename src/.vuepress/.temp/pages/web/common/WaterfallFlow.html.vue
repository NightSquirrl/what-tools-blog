<template><div><blockquote>
<p>HTML 代码</p>
</blockquote>
<details>
<summary>点击展开代码</summary>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wf-item<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(image,index) in images<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>  <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wf-img<span class="token punctuation">"</span></span> <span class="token attr-name">:alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index.toString()<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="css-方式" tabindex="-1"><a class="header-anchor" href="#css-方式"><span>css 方式</span></a></h2>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* 设置最外层的宽度以及使用 grid 布局,5 列,间隙是 10px */</span>
<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">columns</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
    <span class="token property">column-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">.wf-img</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js-方式" tabindex="-1"><a class="header-anchor" href="#js-方式"><span>js 方式</span></a></h2>
<details>
<summary>点击展开代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">Waterfall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>oItems <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>column <span class="token operator">=</span> options<span class="token punctuation">.</span>column<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gap <span class="token operator">=</span> options<span class="token punctuation">.</span>gap<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>itemWidth <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>offsetWidth <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>column <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gap<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>column<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>heighArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token class-name">Waterfall</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Waterfall</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> item <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> minIndex <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>oItems<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>oItems<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemWidth <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>column<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">"0px"</span>
            item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>itemWidth <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gap<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>heighArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">getItemHeight</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

            <span class="token keyword">let</span> minIndex <span class="token operator">=</span> <span class="token function">getMinIndex</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heighArray<span class="token punctuation">)</span>
            item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>oItems<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span>
            item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heighArray<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gap <span class="token operator">+</span> <span class="token string">"px"</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>heighArray<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">+=</span> item<span class="token punctuation">.</span>offsetHeight <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gap
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getMinIndex</span><span class="token punctuation">(</span><span class="token parameter">heightArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> heightArray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> heightArray<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getItemHeight</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Waterfall


<span class="token comment">// 调用</span>

<span class="token keyword">new</span> <span class="token class-name">Waterfall</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"wrapper"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>原理解释:
首先接收所有的参数
计算出每一个图片应该所占的宽度
获取到所有的图片 item
使用 for 进行动态的计算 top 和 left(使用 absolute 布局)
首先是绘制出第一行的位置也就是条件 &lt; this.column
他们的 top 都是 0 left 是当前的索引值 * (当前的宽度+间隔),当每一个的位置确定之后需要将他们的高度存储在数组中
然后开始绘制其他的行
计算出最小的高度,决定了下一张图片的 top,而下一张图片的 left = (最小值的索引)对应的 dom 的 offsetLeft</p>
</blockquote>
</details>
<div style="height:200px">
<WaterfallFlow/>
</div>
</div></template>


<script setup>
import WaterfallFlow from "@source/web/common/components/WaterfallFlow/WaterfallFlow.vue"
</script>