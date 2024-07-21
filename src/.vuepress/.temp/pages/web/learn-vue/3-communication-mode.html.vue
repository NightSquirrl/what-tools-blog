<template><div><h2 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2"><span>Vue2</span></a></h2>
<p>子组件中，使用 $emit 触发一个自定义事件，并传递需要传递的数据：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 子组件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'custom-event'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件中，监听子组件触发的自定义事件，并在事件处理函数中接收数据：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 父组件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name">@custom-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCustomEvent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">handleCustomEvent</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'接收到子组件传递的数据：'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3"><span>Vue3</span></a></h2>
<h3 id="父子组件" tabindex="-1"><a class="header-anchor" href="#父子组件"><span>父子组件</span></a></h3>
<h4 id="emit-的方式" tabindex="-1"><a class="header-anchor" href="#emit-的方式"><span>emit 的方式</span></a></h4>
<blockquote>
<p>子组件传递</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickChild<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击子组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineEmits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">// 使用defineEmits创建名称，接受一个数组</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'clickChild'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">clickChild</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> param<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">'b'</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//传递给父组件</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'clickChild'</span><span class="token punctuation">,</span>param<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>父组件接受</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  我是父组件
  <span class="token comment">&lt;!-- clickChild是子组件绑定的事件，click是父组件接受方式 --></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span>  <span class="token attr-name">@clickChild</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickEven<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>子组件传递的值是 {{result}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> result<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">clickEven</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  result<span class="token punctuation">.</span>value<span class="token operator">=</span>val<span class="token punctuation">.</span>content
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="父组件获取子组件中的属性值" tabindex="-1"><a class="header-anchor" href="#父组件获取子组件中的属性值"><span>父组件获取子组件中的属性值</span></a></h4>
<blockquote>
<p>核心在于 子组件的 <code v-pre>defineExpose({sex, info})</code></p>
</blockquote>
<p>子组件传递的方式</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span> 我是子组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>性别:{{ sex}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span>defineExpose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sex<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'男'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> info<span class="token operator">=</span><span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">like</span><span class="token operator">:</span><span class="token string">'王者荣耀'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>sex<span class="token punctuation">,</span> info<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件显示的方式</p>
<blockquote>
<p>为子组件的添加 ref 实例</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  我是父组件
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>testcomRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getSonHander<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取子组件中的数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> testcomRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getSonHander</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取子组件中的性别'</span><span class="token punctuation">,</span> testcomRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>sex <span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取子组件中的其他信息'</span><span class="token punctuation">,</span> testcomRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>info <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子组件调用父组件的方法-子组件修改父组件的值" tabindex="-1"><a class="header-anchor" href="#子组件调用父组件的方法-子组件修改父组件的值"><span>子组件调用父组件的方法 | 子组件修改父组件的值</span></a></h4>
<p>子组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cesiumContainer<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map-x<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeFatherData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>X<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineEmits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
<span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"closeFather"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 
<span class="token keyword">const</span> <span class="token function-variable function">changeFatherData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">"closeFather"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XYZLayerList</span> <span class="token attr-name">@closeFather</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closeFather<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XYZLayerList</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> XYZLayerList <span class="token keyword">from</span> <span class="token string">"./XYZLayerList.vue"</span><span class="token comment">//引入子组件</span>
<span class="token keyword">const</span> <span class="token function-variable function">closeFather</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"触发了父组件方法"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="爷孙组件通信" tabindex="-1"><a class="header-anchor" href="#爷孙组件通信"><span>爷孙组件通信</span></a></h3>
<h4 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject"><span>provide / inject</span></a></h4>
<p>这个通信方式也是有两部分：</p>
<ol>
<li>Grandfather.vue 通过 provide 向孙组件 Grandson.vue 提供数据和方法</li>
<li>Grandson.vue 通过 inject 注入爷爷组件 Grandfather.vue 的数据和方法</li>
</ol>
<p>无论组件层次结构有多深，发起 provide 的组件都可以作为其所有下级组件的依赖提供者。</p>
<figure><img src="https://www.z4a.net/images/2024/06/10/imagede42eb2e9680d4f6.png" alt="imagede42eb2e9680d4f6.png" tabindex="0" loading="lazy"><figcaption>imagede42eb2e9680d4f6.png</figcaption></figure>
<p>Vue 3 的这一部分内容对比 Vue 2 来说变化很大，但使用起来其实也很简单，开发者学到这里不用慌，它们之间也有相同的地方：</p>
<ol>
<li>爷组件不需要知道哪些子组件使用它 provide 的数据</li>
<li>子组件不需要知道 inject 的数据来自哪里</li>
</ol>
<p>另外要切记一点就是： provide 和 inject 绑定并不是可响应的，这是刻意为之的，除非传入了一个可侦听的对象。</p>
<h5 id="发起-provide" tabindex="-1"><a class="header-anchor" href="#发起-provide"><span>发起 provide</span></a></h5>
<blockquote>
<p>Grandfather.vue</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>// Grandfather.vue
import { defineComponent, provide, ref } from 'vue'

export default defineComponent({
  setup() {
    // 声明一个响应性变量并 provide 其自身
    // 孙组件获取后可以保持响应性
    const msg = ref('Hello World!')
    provide('msg', msg)

    // 只 provide 响应式变量的值
    // 孙组件获取后只会得到当前的值
    provide('msgValue', msg.value)

    // 声明一个方法并 provide
    function printMsg() {
      console.log(msg.value)
    }
    provide('printMsg', printMsg)
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="接收-inject" tabindex="-1"><a class="header-anchor" href="#接收-inject"><span>接收 inject</span></a></h5>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>// Grandson.vue
import { defineComponent, inject } from 'vue'
import type { Ref } from 'vue'

export default defineComponent({
  setup() {
    // 获取响应式变量
    const msg = inject&lt;Ref<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>>('msg')
    console.log(msg!.value)

    // 获取普通的字符串
    const msgValue = inject<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>('msgValue')
    console.log(msgValue)

    // 获取函数
    const printMsg = inject&lt;() => void>('printMsg')
    if (typeof printMsg === 'function') {
      printMsg()
    }
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="设置默认值" tabindex="-1"><a class="header-anchor" href="#设置默认值"><span>设置默认值</span></a></h5>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>// Grandson.vue
import { defineComponent, inject, ref } from 'vue'
import type { Ref } from 'vue'

export default defineComponent({
  setup() {
    // 获取响应式变量
    const msg = inject&lt;Ref<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>>('msg', ref('Hello'))
    console.log(msg.value)

    // 获取普通的字符串
    const msgValue = inject<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>('msgValue', 'Hello')
    console.log(msgValue)

    // 获取函数
    const printMsg = inject&lt;() => void>('printMsg', () => {
      console.log('Hello')
    })
    printMsg()
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


