<template><div><figure><img src="https://echarts.apache.org/zh/images/logo.png?_v_=20200710_1" alt="echart.png" tabindex="0" loading="lazy"><figcaption>echart.png</figcaption></figure>
<p><a href="https://echarts.apache.org/handbook/en/get-started" target="_blank" rel="noopener noreferrer">Echarts官网地址<ExternalLinkIcon/></a></p>
<h1 id="get-start" tabindex="-1"><a class="header-anchor" href="#get-start"><span>Get Start</span></a></h1>
<h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Echarts<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
    <span class="token punctuation">.</span>box <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #62CDFF<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"main"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js"</span> integrity<span class="token operator">=</span><span class="token string">"sha512-EmNxF3E6bM0Xg1zvmkeYD3HDBeGxtsG92IxFt1myNZhXdCav9MzvuH/zNMBU1DmIPN6njrhX1VTbqdJxQ2wHDg=="</span> crossorigin<span class="token operator">=</span><span class="token string">"anonymous"</span> referrerpolicy<span class="token operator">=</span><span class="token string">"no-referrer"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">var</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> option<span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Mon'</span><span class="token punctuation">,</span> <span class="token string">'Tue'</span><span class="token punctuation">,</span> <span class="token string">'Wed'</span><span class="token punctuation">,</span> <span class="token string">'Thu'</span><span class="token punctuation">,</span> <span class="token string">'Fri'</span><span class="token punctuation">,</span> <span class="token string">'Sat'</span><span class="token punctuation">,</span> <span class="token string">'Sun'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'value'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

option <span class="token operator">&amp;&amp;</span> myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用的步骤</p>
<ol>
<li>引入echarts 插件文件到html页面中</li>
<li>准备一个具备大小的DOM容器</li>
<li>初始化echarts实例对象</li>
<li>指定配置项和数据(option)</li>
<li>将配置项设置给echarts实例对象</li>
</ol>
<h2 id="echarts-基础配置讲解" tabindex="-1"><a class="header-anchor" href="#echarts-基础配置讲解"><span>Echarts 基础配置讲解</span></a></h2>
<p>注意一下 series 中的一个配置 stack
数据堆叠，同个类目轴上系列配置相同的<code v-pre>stack</code>值后 后一个系列的值会在前一个系列的值上相加。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 声明颜色数组</span>
<span class="token keyword">var</span> myColor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"#1089E7"</span><span class="token punctuation">,</span> <span class="token string">"#F57474"</span><span class="token punctuation">,</span> <span class="token string">"#56D0E3"</span><span class="token punctuation">,</span> <span class="token string">"#F8B448"</span><span class="token punctuation">,</span> <span class="token string">"#8B78F6"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// color设置我们线条的颜色 注意后面是个数组</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'pink'</span><span class="token punctuation">,</span> <span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token string">'green'</span><span class="token punctuation">,</span> <span class="token string">'skyblue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置图表的标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'折线图堆叠123'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 图表的提示框组件 </span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 触发方式</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"shadow"</span> <span class="token comment">// 默认为直线，可选为：'line' | 'shadow'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 图例组件</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">// series里面有了 name值则 legend里面的data可以删掉</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 工具箱组件  可以另存为图片等功能</span>
    <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">saveAsImage</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 网格配置  grid可以控制线形图 柱状图 图表大小</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
        <span class="token comment">// 是否显示刻度标签 如果是true 就显示 否则反之</span>
        <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置x轴的相关配置</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
        <span class="token comment">// 是否让我们的线条和坐标轴有缝隙</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'星期一'</span><span class="token punctuation">,</span> <span class="token string">'周二'</span><span class="token punctuation">,</span> <span class="token string">'周三'</span><span class="token punctuation">,</span> <span class="token string">'周四'</span><span class="token punctuation">,</span> <span class="token string">'周五'</span><span class="token punctuation">,</span> <span class="token string">'周六'</span><span class="token punctuation">,</span> <span class="token string">'周日'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// x 轴的文字颜色和字体大小</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(255,255,255,.6)"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//  x轴样式不显示</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token comment">// 如果想要设置单独的线条样式 </span>
            <span class="token comment">// lineStyle: {</span>
            <span class="token comment">//    color: "rgba(255,255,255,.1)",</span>
            <span class="token comment">//    width: 1,</span>
            <span class="token comment">//    type: "solid"</span>
        <span class="token comment">// }</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示刻度</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token comment">// 设置y轴的相关配置</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
        <span class="token comment">// y 轴的分割线的样式</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(255,255,255,.1)"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 系列图表配置 它决定着显示那种类型的图表</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'邮件营销'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
           <span class="token comment">//      stack: 'Total',</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'联盟广告'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
            <span class="token comment">//      stack: 'Total',</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">182</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">234</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'视频广告'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
          
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">232</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">154</span><span class="token punctuation">,</span> <span class="token number">190</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">410</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'直接访问'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
            <span class="token comment">// 如果类型是 bar 柱状图</span>
            <span class="token comment">// barWidth: "60%", 代表柱状图的宽度</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">332</span><span class="token punctuation">,</span> <span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">334</span><span class="token punctuation">,</span> <span class="token number">390</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 修改柱子圆角</span>
                <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token function-variable function">color</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> myColor<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 图形上的文本标签</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token comment">// 图形内显示</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"inside"</span><span class="token punctuation">,</span>
                    <span class="token comment">// 文字的显示格式</span>
                    <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">"{c}%"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://echarts.apache.org/zh/option.html#title" target="_blank" rel="noopener noreferrer">配置文档<ExternalLinkIcon/></a></p>
<ul>
<li>让图表跟随屏幕自适应</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例"><span>综合案例</span></a></h1>
<h2 id="柱形图" tabindex="-1"><a class="header-anchor" href="#柱形图"><span>柱形图</span></a></h2>
<Histogram/><details>
<summary>点击展开代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">完整的代码</span> <span class="token operator">:</span>
    <span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
        <span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
        <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">"echarts"</span><span class="token punctuation">;</span>

        <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 基于准备好的dom，初始化echarts实例</span>
        <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"main"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 绘制图表</span>
        myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"#0400ff"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">"axis"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"shadow"</span><span class="token punctuation">,</span> <span class="token comment">// 默认为直线，可选为：'line' | 'shadow'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">"0%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">"10px"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">"0%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">"4%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"category"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"旅游行业"</span><span class="token punctuation">,</span>
        <span class="token string">"教育培训"</span><span class="token punctuation">,</span>
        <span class="token string">"游戏行业"</span><span class="token punctuation">,</span>
        <span class="token string">"医疗行业"</span><span class="token punctuation">,</span>
        <span class="token string">"电商行业"</span><span class="token punctuation">,</span>
        <span class="token string">"社交行业"</span><span class="token punctuation">,</span>
        <span class="token string">"金融行业"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">alignWithLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,1)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"value"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,1)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,1)"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,1)"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"直接访问"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token string">"35%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"main"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
    #main <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="折线图" tabindex="-1"><a class="header-anchor" href="#折线图"><span>折线图</span></a></h2>
<LineChart /><details>
<summary>点击展开代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"#00f2f1"</span><span class="token punctuation">,</span> <span class="token string">"#ed3f35"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过坐标轴来触发</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">"axis"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 距离容器10%</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">"10%"</span><span class="token punctuation">,</span>
            <span class="token comment">// 修饰图例文字的颜色</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#4c9bfd"</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果series 里面设置了name，此时图例组件的data可以省略</span>
        <span class="token comment">// data: ["邮件营销", "联盟广告"]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">"20%"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">"3%"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">"4%"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">"3%"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">"#012f4a"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"category"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"1月"</span><span class="token punctuation">,</span>
            <span class="token string">"2月"</span><span class="token punctuation">,</span>
            <span class="token string">"3月"</span><span class="token punctuation">,</span>
            <span class="token string">"4月"</span><span class="token punctuation">,</span>
            <span class="token string">"5月"</span><span class="token punctuation">,</span>
            <span class="token string">"6月"</span><span class="token punctuation">,</span>
            <span class="token string">"7月"</span><span class="token punctuation">,</span>
            <span class="token string">"8月"</span><span class="token punctuation">,</span>
            <span class="token string">"9月"</span><span class="token punctuation">,</span>
            <span class="token string">"10月"</span><span class="token punctuation">,</span>
            <span class="token string">"11月"</span><span class="token punctuation">,</span>
            <span class="token string">"12月"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 去除刻度</span>
            <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 修饰刻度标签的颜色</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.7)"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 去除x坐标轴的颜色</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"value"</span><span class="token punctuation">,</span>
            <span class="token comment">// 去除刻度</span>
            <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 修饰刻度标签的颜色</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.7)"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 修改y轴分割线的颜色</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#012f4a"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"新增粉丝"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"line"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">"总量"</span><span class="token punctuation">,</span>
            <span class="token comment">// 是否让线条圆滑显示</span>
            <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">.</span>year<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"新增游客"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"line"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">"总量"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">.</span>year<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details> 
<h2 id="饼状图" tabindex="-1"><a class="header-anchor" href="#饼状图"><span>饼状图</span></a></h2>
<Pie/><details>
<summary>点击展开代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">"item"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">"{a} &lt;br/>{b}: {c} ({d}%)"</span><span class="token punctuation">,</span>
        <span class="token function-variable function">position</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">p</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//其中p为当前鼠标的位置</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">"90%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"0岁以下"</span><span class="token punctuation">,</span> <span class="token string">"20-29岁"</span><span class="token punctuation">,</span> <span class="token string">"30-39岁"</span><span class="token punctuation">,</span> <span class="token string">"40-49岁"</span><span class="token punctuation">,</span> <span class="token string">"50岁以上"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.5)"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"年龄分布"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pie"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"50%"</span><span class="token punctuation">,</span> <span class="token string">"42%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"40%"</span><span class="token punctuation">,</span> <span class="token string">"60%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"#065aab"</span><span class="token punctuation">,</span>
                <span class="token string">"#066eab"</span><span class="token punctuation">,</span>
                <span class="token string">"#0682ab"</span><span class="token punctuation">,</span>
                <span class="token string">"#0696ab"</span><span class="token punctuation">,</span>
                <span class="token string">"#06a0ab"</span><span class="token punctuation">,</span>
                <span class="token string">"#06b4ab"</span><span class="token punctuation">,</span>
                <span class="token string">"#06c8ab"</span><span class="token punctuation">,</span>
                <span class="token string">"#06dcab"</span><span class="token punctuation">,</span>
                <span class="token string">"#06f0ab"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"0岁以下"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"20-29岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"30-39岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"40-49岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"50岁以上"</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details> 
<h2 id="进度图" tabindex="-1"><a class="header-anchor" href="#进度图"><span>进度图</span></a></h2>
<ProgressBarChart/><details>
<summary>点击展开代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token comment">//图标位置</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">"10%"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">"22%"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">"10%"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> titlename<span class="token punctuation">,</span>
            <span class="token literal-property property">inverse</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#0400ff"</span><span class="token punctuation">,</span>

                <span class="token literal-property property">rich</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">lg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"#339911"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#0400ff"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                        <span class="token comment">// padding: 5,</span>
                        <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">inverse</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> valdata<span class="token punctuation">,</span>
            <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#0400ff"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"条"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
            <span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">params</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">var</span> num <span class="token operator">=</span> myColor<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
                        <span class="token keyword">return</span> myColor<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex <span class="token operator">%</span> num<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"inside"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">"{c}%"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"框"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">"#00c1de"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details> 
<h2 id="折线背景图" tabindex="-1"><a class="header-anchor" href="#折线背景图"><span>折线背景图</span></a></h2>
<LineChartShadow/><details>
<summary>点击展开代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">"axis"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#dddc6b"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">"0%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.5)"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">"30"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">"10"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"category"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.6)"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.2)"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"01"</span><span class="token punctuation">,</span>
                <span class="token string">"02"</span><span class="token punctuation">,</span>
                <span class="token string">"03"</span><span class="token punctuation">,</span>
                <span class="token string">"04"</span><span class="token punctuation">,</span>
                <span class="token string">"05"</span><span class="token punctuation">,</span>
                <span class="token string">"06"</span><span class="token punctuation">,</span>
                <span class="token string">"07"</span><span class="token punctuation">,</span>
                <span class="token string">"08"</span><span class="token punctuation">,</span>
                <span class="token string">"09"</span><span class="token punctuation">,</span>
                <span class="token string">"11"</span><span class="token punctuation">,</span>
                <span class="token string">"12"</span><span class="token punctuation">,</span>
                <span class="token string">"13"</span><span class="token punctuation">,</span>
                <span class="token string">"14"</span><span class="token punctuation">,</span>
                <span class="token string">"15"</span><span class="token punctuation">,</span>
                <span class="token string">"16"</span><span class="token punctuation">,</span>
                <span class="token string">"17"</span><span class="token punctuation">,</span>
                <span class="token string">"18"</span><span class="token punctuation">,</span>
                <span class="token string">"19"</span><span class="token punctuation">,</span>
                <span class="token string">"20"</span><span class="token punctuation">,</span>
                <span class="token string">"21"</span><span class="token punctuation">,</span>
                <span class="token string">"22"</span><span class="token punctuation">,</span>
                <span class="token string">"23"</span><span class="token punctuation">,</span>
                <span class="token string">"24"</span><span class="token punctuation">,</span>
                <span class="token string">"25"</span><span class="token punctuation">,</span>
                <span class="token string">"26"</span><span class="token punctuation">,</span>
                <span class="token string">"27"</span><span class="token punctuation">,</span>
                <span class="token string">"28"</span><span class="token punctuation">,</span>
                <span class="token string">"29"</span><span class="token punctuation">,</span>
                <span class="token string">"30"</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"value"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.1)"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.6)"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.1)"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"播放量"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"line"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"circle"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#0184d5"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(1, 132, 213, 0.4)"</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(1, 132, 213, 0.1)"</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token boolean">false</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">"rgba(0, 0, 0, 0.1)"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#0184d5"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">"rgba(221, 220, 107, .1)"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token number">40</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"转发量"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"line"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"circle"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#00d887"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(0, 216, 135, 0.4)"</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(0, 216, 135, 0.1)"</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token boolean">false</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">"rgba(0, 0, 0, 0.1)"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#00d887"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">"rgba(221, 220, 107, .1)"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">80</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">70</span><span class="token punctuation">,</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token number">70</span><span class="token punctuation">,</span>
                <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token number">40</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details> 
<h2 id="饼状图数据" tabindex="-1"><a class="header-anchor" href="#饼状图数据"><span>饼状图数据</span></a></h2>
<PointDistributionStatistics/><details>
<summary>点击展开代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">"90%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(4, 0, 255,.5)"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">"item"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">"{a} &lt;br/>{b} : {c} ({d}%)"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 注意颜色写的位置</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"#006cff"</span><span class="token punctuation">,</span>
        <span class="token string">"#60cda0"</span><span class="token punctuation">,</span>
        <span class="token string">"#ed8884"</span><span class="token punctuation">,</span>
        <span class="token string">"#ff9f7f"</span><span class="token punctuation">,</span>
        <span class="token string">"#0096ff"</span><span class="token punctuation">,</span>
        <span class="token string">"#9fe6b8"</span><span class="token punctuation">,</span>
        <span class="token string">"#32c5e9"</span><span class="token punctuation">,</span>
        <span class="token string">"#1d9dff"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"点位统计"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pie"</span><span class="token punctuation">,</span>
            <span class="token comment">// 如果radius是百分比则必须加引号</span>
            <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"10%"</span><span class="token punctuation">,</span> <span class="token string">"70%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"50%"</span><span class="token punctuation">,</span> <span class="token string">"42%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token string">"radius"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"云南"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"北京"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"山东"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"河北"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"江苏"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"浙江"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"深圳"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"广东"</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 修饰饼形图文字相关的样式 label对象</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 修饰引导线样式</span>
            <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 连接到图形的线长度</span>
                <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token comment">// 连接到文字的线长度</span>
                <span class="token literal-property property">length2</span><span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details> 
<h2 id="轨道飞行图" tabindex="-1"><a class="header-anchor" href="#轨道飞行图"><span>轨道飞行图</span></a></h2>
<blockquote>
<p>借助于 echart 社区</p>
</blockquote>
<FlightPath/></div></template>


<script setup>
import Histogram from "@source/web/Echarts/components/Histogram.vue";
import LineChart from "@source/web/Echarts/components/LineChart.vue";
import Pie from "@source/web/Echarts/components/Pie.vue";
import ProgressBarChart from "@source/web/Echarts/components/ProgressBarChart.vue";
import LineChartShadow from "@source/web/Echarts/components/LineChartShadow.vue";
import PointDistributionStatistics from "@source/web/Echarts/components/PointDistributionStatistics.vue"
import FlightPath from "@source/web/Echarts/components/FlightPath.vue"
</script>