<template><div><h2 id="父级" tabindex="-1"><a class="header-anchor" href="#父级"><span>父级</span></a></h2>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token comment">/*grid-template-columns: 1fr 1fr 1fr;*/</span>  <span class="token comment">/*设置列 4 列,每一列的宽度等均分配*/</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span><span class="token function">minmax</span><span class="token punctuation">(</span>260px<span class="token punctuation">,</span>1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*设置列 自动计算个数,每一列的宽度最小值和最大值*/</span>
    <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/*设置四周的间隙 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子元素" tabindex="-1"><a class="header-anchor" href="#子元素"><span>子元素</span></a></h2>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.box1</span> <span class="token punctuation">{</span>
    <span class="token property">grid-row</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


