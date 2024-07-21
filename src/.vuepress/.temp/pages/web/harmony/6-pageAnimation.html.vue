<template><div><h1 id="页面动画" tabindex="-1"><a class="header-anchor" href="#页面动画"><span>页面动画</span></a></h1>
<h2 id="属性动画" tabindex="-1"><a class="header-anchor" href="#属性动画"><span>属性动画</span></a></h2>
<p>给组件添加 animation属性添加动画</p>
<p><code v-pre>width</code>,<code v-pre>height</code>,<code v-pre>Opacity</code>,<code v-pre>backgroundColor</code>,<code v-pre>scale</code>,<code v-pre>rotate</code>,<code v-pre>translate</code></p>
<table>
<thead>
<tr>
<th>名称</th>
<th>参数类型</th>
<th>必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>duration</td>
<td>number</td>
<td>否</td>
<td><code v-pre>设置动画时长。默认值：1000单位：毫秒从API version 9开始，该接口支持在ArkTS卡片中使用。**说明：**- 在ArkTS卡片上最大动画持续时间为1000毫秒。- 设置浮点型类型的值时，向下取整；设置值为1.2，按照1处理。</code></td>
</tr>
<tr>
<td>tempo</td>
<td>number</td>
<td>否</td>
<td><code v-pre>动画播放速度。数值越大，动画播放速度越快，数值越小，播放速度越慢。值为0时，表示不存在动画。默认值：1</code></td>
</tr>
<tr>
<td>curve</td>
<td>string | <a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/ts-appendix-enums-0000001478061741-V3#ZH-CN_TOPIC_0000001574248789__curve" target="_blank" rel="noopener noreferrer">Curve<ExternalLinkIcon/></a> | <a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-curve-0000001427585072-V3#ZH-CN_TOPIC_0000001523808354__icurve" target="_blank" rel="noopener noreferrer">ICurve<ExternalLinkIcon/></a>9+</td>
<td>否</td>
<td><code v-pre>设置动画曲线。默认值：Curve.EaseInOut从API version 9开始，该接口支持在ArkTS卡片中使用。</code></td>
</tr>
<tr>
<td>delay</td>
<td>number</td>
<td>否</td>
<td><code v-pre>设置动画延迟执行的时长。默认值：0，不延迟播放。单位：毫秒取值范围：[0, +∞)**说明：**设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。</code></td>
</tr>
<tr>
<td>iterations</td>
<td>number</td>
<td>否</td>
<td><code v-pre>设置播放次数。默认值：1取值范围：[-1, +∞)**说明：**设置为-1时表示无限次播放。设置为0时表示无动画效果。</code></td>
</tr>
<tr>
<td>playMode</td>
<td><a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/ts-appendix-enums-0000001478061741-V3#ZH-CN_TOPIC_0000001574248789__playmode" target="_blank" rel="noopener noreferrer">PlayMode<ExternalLinkIcon/></a></td>
<td>否</td>
<td><code v-pre>设置动画播放模式，默认播放完成后重头开始播放。默认值：PlayMode.Normal从API version 9开始，该接口支持在ArkTS卡片中使用。</code></td>
</tr>
<tr>
<td>onFinish</td>
<td><code v-pre>() =&gt; void</code></td>
<td>否</td>
<td><code v-pre>状态回调，动画播放完成时触发。从API version 9开始，该接口支持在ArkTS卡片中使用。**说明：**当iterations设置为-1时，动画效果无限循环不会停止，所以不会触发此回调</code></td>
</tr>
</tbody>
</table>
<h2 id="显示动画" tabindex="-1"><a class="header-anchor" href="#显示动画"><span>显示动画</span></a></h2>
<p>通过全局的 animateTo修改组件的属性</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token function">animateTo</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span><span class="token number">200</span> <span class="token comment">// 上方表格中的属性</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Demo</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">'change rotate angle'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">margin</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> angle<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rotateAngle <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">animateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      duration<span class="token operator">:</span> <span class="token number">1200</span><span class="token punctuation">,</span>
      curve<span class="token operator">:</span> Curve<span class="token punctuation">.</span>Friction<span class="token punctuation">,</span>
      delay<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      iterations<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 设置-1表示动画无限循环</span>
      playMode<span class="token operator">:</span> PlayMode<span class="token punctuation">.</span>Alternate<span class="token punctuation">,</span>
      <span class="token function-variable function">onFinish</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'play end'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>rotateAngle <span class="token operator">=</span> <span class="token number">90</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件转场动画" tabindex="-1"><a class="header-anchor" href="#组件转场动画"><span>组件转场动画</span></a></h2>
<p><code v-pre>transition</code>组件插入和移除的过度动画</p>
<p>需要配合<a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/ts-explicit-animation-0000001478341181-V3" target="_blank" rel="noopener noreferrer">animateTo<ExternalLinkIcon/></a>才能生效，动效时长、曲线、延时跟随animateTo中的配置）</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数</th>
<th>必填</th>
<th>参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>slide</td>
<td><a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/ts-page-transition-animation-0000001477981233-V3#ZH-CN_TOPIC_0000001523489146__slideeffect%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E" target="_blank" rel="noopener noreferrer">SlideEffect<ExternalLinkIcon/></a></td>
<td>否</td>
<td><code v-pre>设置页面转场时的滑入滑出效果。默认值：SlideEffect.Right</code></td>
</tr>
<tr>
<td>translate</td>
<td><code v-pre>{x? : number |string,y? : number |string,z? : number |string}</code></td>
<td></td>
<td><code v-pre>设置页面转场时的平移效果，为入场时起点和退场时终点的值，和slide同时设置时默认生效slide。- x：横向的平移距离。- y：纵向的平移距离。- z：竖向的平移距离。</code></td>
</tr>
<tr>
<td>scale</td>
<td><code v-pre>{x? : number,y? : number,z? : number,centerX? : number |string,centerY? : number |string}</code></td>
<td></td>
<td><code v-pre>设置页面转场时的缩放效果，为入场时起点和退场时终点的值。- x：横向放大倍数（或缩小比例）。- y：纵向放大倍数（或缩小比例）。- z：竖向放大倍数（或缩小比例）。- centerX、centerY缩放中心点。- 中心点为0时，默认的是组件的左上角。</code></td>
</tr>
<tr>
<td>opacity</td>
<td>number</td>
<td>否</td>
<td><code v-pre>设置入场的起点透明度值或者退场的终点透明度值。默认值：1</code></td>
</tr>
</tbody>
</table>
<h3 id="slideeffect枚举说明" tabindex="-1"><a class="header-anchor" href="#slideeffect枚举说明"><span>SlideEffect枚举说明</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Left</td>
<td style="text-align:left">设置到入场时表示从左边滑入，出场时表示滑出到左边。</td>
</tr>
<tr>
<td style="text-align:left">Right</td>
<td style="text-align:left">设置到入场时表示从右边滑入，出场时表示滑出到右边。</td>
</tr>
<tr>
<td style="text-align:left">Top</td>
<td style="text-align:left">设置到入场时表示从上边滑入，出场时表示滑出到上边。</td>
</tr>
<tr>
<td style="text-align:left">Bottom</td>
<td style="text-align:left">设置到入场时表示从下边滑入，出场时表示滑出到下边。</td>
</tr>
</tbody>
</table>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">事件</th>
<th style="text-align:left">功能描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onEnter(event: (type?: RouteType, progress?: number) =&gt; void)</td>
<td style="text-align:left"><code v-pre>回调入参为当前入场动画的归一化进度[0 - 1]。- type：跳转方法。- progress：当前进度。触发该事件的条件：逐帧回调，直到入场动画结束，progress从0变化到1。</code></td>
</tr>
<tr>
<td style="text-align:left">onExit(event: (type?: RouteType, progress?: number) =&gt; void)</td>
<td style="text-align:left"><code v-pre>回调入参为当前退场动画的归一化进度[0 - 1]。- type：跳转方法。- progress：当前进度。触发该事件的条件：逐帧回调，直到退场动画结束，progress从0变化到1。</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>Demo</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// Image的显示和消失配置为不同的过渡效果</span>
<span class="token function">Image</span><span class="token punctuation">(</span><span class="token function">$r</span><span class="token punctuation">(</span><span class="token string">'app.media.testImg'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> TransitionType<span class="token punctuation">.</span>Insert<span class="token punctuation">,</span> scale<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">1.0</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> TransitionType<span class="token punctuation">.</span>Delete<span class="token punctuation">,</span> rotate<span class="token operator">:</span> <span class="token punctuation">{</span> angle<span class="token operator">:</span> <span class="token number">180</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>



<span class="token comment">// 点击Button控制Image的显示和消失</span>
<span class="token function">animateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> duration<span class="token operator">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token string">'hide'</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token string">'show'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>flag
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


