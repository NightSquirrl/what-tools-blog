<template><div><div align="center">
    <img width="200px" height="200px" src="https://www.z4a.net/images/2023/09/12/logo.png" />
    <h1>
		<a href="https://github.com/NightSquirrl/ant-unocss-ts-vite-react" target="_blank">ant-unocss-ts-vite-react</a>
	</h1>
    <p>-代码相关说明-</p>
</div>
<br />
<br />
<h1 id="主要使用到的技术" tabindex="-1"><a class="header-anchor" href="#主要使用到的技术"><span>主要使用到的技术</span></a></h1>
<p><code v-pre>vite axios unocss eslint antd ts react-router</code></p>
<h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>vite</span></a></h2>
<h3 id="添加路径别名" tabindex="-1"><a class="header-anchor" href="#添加路径别名"><span>添加路径别名 @</span></a></h3>
<p><code v-pre>vite.config.ts</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> checker <span class="token keyword">from</span> <span class="token string">"vite-plugin-checker"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UnoCSS <span class="token keyword">from</span> <span class="token string">"unocss/vite"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">checker</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">typescript</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">UnoCSS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"@"</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同步修改<code v-pre>tsconfig.json</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  <span class="token string-property property">"paths"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token string-property property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/*"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios"><span>axios</span></a></h2>
<h3 id="请求的封装" tabindex="-1"><a class="header-anchor" href="#请求的封装"><span>请求的封装</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"antd"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> http <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_BASE_URL</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 添加请求拦截器</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在发送请求之前做些什么</span>
      <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message <span class="token operator">??</span> <span class="token string">'未知请求错误'</span><span class="token punctuation">)</span>
      <span class="token comment">// 对请求错误做些什么</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 添加响应拦截器</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
      <span class="token comment">// 对响应数据进行格式化</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> response<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> response
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> status <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token operator">?.</span>status
      <span class="token keyword">let</span> <span class="token punctuation">{</span> msg<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token operator">?.</span>data <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>msg <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          msg <span class="token operator">=</span> message
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
                  msg <span class="token operator">=</span> <span class="token string">'参数错误'</span>
                  <span class="token keyword">break</span>
              <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
                  msg <span class="token operator">=</span> <span class="token string">'服务端错误'</span>
                  <span class="token keyword">break</span>
              <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
                  msg <span class="token operator">=</span> <span class="token string">'路由未找到'</span>
                  <span class="token keyword">break</span>
              <span class="token keyword">default</span><span class="token operator">:</span>
                  msg <span class="token operator">=</span> error<span class="token punctuation">.</span>message <span class="token operator">??</span> <span class="token string">'未知响应错误'</span>
                  <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
      <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
      <span class="token comment">// 对响应错误做点什么</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unocss-原子-css" tabindex="-1"><a class="header-anchor" href="#unocss-原子-css"><span>unocss 原子 css</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">/* eslint-disable no-useless-escape */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> presetAttributify<span class="token punctuation">,</span> presetIcons<span class="token punctuation">,</span> presetTypography<span class="token punctuation">,</span> presetUno <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"unocss"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> presetAutoprefixer <span class="token keyword">from</span> <span class="token string">"unocss-preset-autoprefixer"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> transformerDirectives <span class="token keyword">from</span> <span class="token string">"@unocss/transformer-directives"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> transformerVariantGroup <span class="token keyword">from</span> <span class="token string">"@unocss/transformer-variant-group"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^h-([\.\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^w-([\.\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^w-100vw$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"100vw"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^b-r-([\.\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">"border-radius"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transformers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">transformerDirectives</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">transformerVariantGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">presetAttributify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">presetIcons</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">autoInstall</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">presetUno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">presetTypography</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">presetAutoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"defaults"</span><span class="token punctuation">,</span> <span class="token string">"not IE 11"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<p>默认的语法与 tailwindcss 相同</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"h-700 p-4"</span><span class="token operator">></span>
       index
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-router-dom" tabindex="-1"><a class="header-anchor" href="#react-router-dom"><span>react-router-dom</span></a></h2>
<h3 id="创建路由表" tabindex="-1"><a class="header-anchor" href="#创建路由表"><span>创建路由表</span></a></h3>
<p><code v-pre>src/router/index.tsx</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Navigate<span class="token punctuation">,</span> RouteObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"../pages/Home"</span><span class="token punctuation">;</span>
<span class="token comment">// 路由映射表</span>
<span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> RouteObject<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 路由重定向</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">"/home"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">"./router"</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span><span class="token function">useRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-toastify" tabindex="-1"><a class="header-anchor" href="#react-toastify"><span>react-toastify</span></a></h2>
<blockquote>
<p>添加全局的消息事件,默认右上角弹窗</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ToastContainer<span class="token punctuation">,</span> toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-toastify"</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>toast <span class="token operator">=</span> toast<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


