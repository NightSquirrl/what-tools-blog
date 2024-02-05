<template><div><h1 id="rollup-使用案例" tabindex="-1"><a class="header-anchor" href="#rollup-使用案例"><span>rollup 使用案例</span></a></h1>
<h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h2>
<h3 id="依赖安装" tabindex="-1"><a class="header-anchor" href="#依赖安装"><span>依赖安装</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>yarn init <span class="token operator">-</span>y
yarn add rollup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3>
<p><code v-pre>rollup.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span>  <span class="token keyword">default</span>  <span class="token punctuation">{</span>
    <span class="token literal-property property">input</span> <span class="token operator">:</span><span class="token string">"src/index.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">file</span><span class="token operator">:</span><span class="token string">"dist/bundle.js"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span><span class="token string">"iife"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> rollup <span class="token parameter variable">--config</span> rollup.config.js

<span class="token comment">#报错</span>

<span class="token function">yarn</span> rollup <span class="token parameter variable">--config</span> rollup.config.js <span class="token parameter variable">--bundleConfigAsCjs</span>

or

fix package.json <span class="token function">add</span>    <span class="token string">"type"</span><span class="token builtin class-name">:</span> <span class="token string">"module"</span>, 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2>
<blockquote>
<p>默认只能够处理 ESModule</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> rollup-plugin-json <span class="token comment"># 用于导入 JSON 兵 tree-shakinng</span>
<span class="token function">yarn</span> <span class="token function">add</span> rollup-plugin-node-resolve <span class="token comment">#允许加载第三方的模块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="加载-commonjs-模块" tabindex="-1"><a class="header-anchor" href="#加载-commonjs-模块"><span>加载 CommonJS 模块</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> rollup-plugin-commonjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码拆分" tabindex="-1"><a class="header-anchor" href="#代码拆分"><span>代码拆分</span></a></h2>
<p>动态导入</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./logger"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>log<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"code split"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rollup.config.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">"rollup-plugin-json"</span>
<span class="token keyword">import</span> nodeResolve <span class="token keyword">from</span> <span class="token string">"rollup-plugin-node-resolve"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">"rollup-plugin-commonjs"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span>  <span class="token keyword">default</span>  <span class="token punctuation">{</span>
    <span class="token literal-property property">input</span> <span class="token operator">:</span><span class="token string">"src/index.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// file:"dist/bundle.js",</span>
        <span class="token literal-property property">dir</span><span class="token operator">:</span><span class="token string">'dist'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span><span class="token string">"amd"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多入口打包" tabindex="-1"><a class="header-anchor" href="#多入口打包"><span>多入口打包</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">"rollup-plugin-json"</span>
<span class="token keyword">import</span> nodeResolve <span class="token keyword">from</span> <span class="token string">"rollup-plugin-node-resolve"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">"rollup-plugin-commonjs"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span>  <span class="token keyword">default</span>  <span class="token punctuation">{</span>
    <span class="token literal-property property">input</span> <span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"src/xxx.js"</span><span class="token punctuation">,</span><span class="token string">"src/.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// file:"dist/bundle.js",</span>
        <span class="token literal-property property">dir</span><span class="token operator">:</span><span class="token string">'dist'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span><span class="token string">"amd"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="封装案例" tabindex="-1"><a class="header-anchor" href="#封装案例"><span>封装案例</span></a></h1>
<blockquote>
<p>组件封装模版</p>
</blockquote>
<p><a href="https://github.com/NightSquirrl/drop-upload-react" target="_blank" rel="noopener noreferrer">项目地址<ExternalLinkIcon/></a></p>
<h2 id="初始化-1" tabindex="-1"><a class="header-anchor" href="#初始化-1"><span>初始化</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init vite@latest

<span class="token comment"># 需要的依赖</span>
<span class="token string">"@rollup/plugin-typescript"</span><span class="token builtin class-name">:</span> <span class="token string">"^11.1.2"</span>,
<span class="token string">"rollup-plugin-babel"</span><span class="token builtin class-name">:</span> <span class="token string">"^4.4.0"</span>,
<span class="token string">"@rollup/plugin-babel"</span><span class="token builtin class-name">:</span> <span class="token string">"^6.0.3"</span>,
<span class="token string">"@rollup/plugin-commonjs"</span><span class="token builtin class-name">:</span> <span class="token string">"^25.0.3"</span>,
<span class="token string">"@rollup/plugin-node-resolve"</span><span class="token builtin class-name">:</span> <span class="token string">"^15.1.0"</span>,
<span class="token string">"typescript"</span><span class="token builtin class-name">:</span> <span class="token string">"^5.0.2"</span>,
<span class="token string">"rollup"</span><span class="token builtin class-name">:</span> <span class="token string">"^2.79.1"</span>,
<span class="token string">"rollup-plugin-auto-external"</span><span class="token builtin class-name">:</span> <span class="token string">"^2.0.0"</span>,
<span class="token string">"rollup-plugin-copy"</span><span class="token builtin class-name">:</span> <span class="token string">"^3.4.0"</span>,
<span class="token string">"rollup-plugin-peer-deps-external"</span><span class="token builtin class-name">:</span> <span class="token string">"^2.2.4"</span>,
<span class="token string">"rollup-plugin-postcss"</span><span class="token builtin class-name">:</span> <span class="token string">"^4.0.2"</span>,
<span class="token string">"sass"</span><span class="token builtin class-name">:</span> <span class="token string">"^1.64.1"</span>,
<span class="token string">"tslib"</span><span class="token builtin class-name">:</span> <span class="token string">"^2.6.1"</span>,
<span class="token string">"@babel/core"</span><span class="token builtin class-name">:</span> <span class="token string">"^7.22.17"</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 UI 组件的封装,直接复制 rollup 文件夹,只需要修改 types 里面的引入既可
打包命令 <code v-pre>    &quot;build:lib&quot;: &quot;rimraf dist &amp;&amp; npx rollup -c rollup/rollup.config.js&quot;</code></p>
<p>本地测试:
先进行打包,然后将打包后的文件 dist 修改为任意的名称 xxx,然后进入到该目录,执行 npm link,此时会将该包添加到全局,在需要使用的项目中通过 npm link xxx</p>
</div></template>


