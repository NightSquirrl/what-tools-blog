<template><div><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>Cookie</span></a></h2>
<p>Cookie 说白了就是一个存储在浏览器里的一个小小的文本文件，它附着在 HTTP 请求上，在浏览器和服务器之间“飞来飞去”。它可以携带用户信息，当服务器检查 Cookie 的时候，便可以获取到客户端的状态。</p>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点：</span></a></h3>
<ul>
<li>4KB</li>
<li>过量的 Cookie 会带来巨大的性能浪费</li>
<li>Cookie 是紧跟域名的</li>
<li>Cookie 是明文传递的，容易泄露用户信息，安全性不高。</li>
</ul>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<ol>
<li>
<p>设置 Cookie：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">"cookieName=cookieValue; expires=Thu, 31 Dec 2024 23:59:59 UTC; path=/"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的示例中，<code v-pre>cookieName</code> 是你要设置的 Cookie 的名称，<code v-pre>cookieValue</code> 是对应的值。<code v-pre>expires</code> 参数指定了 Cookie 的过期时间，这里设置为 2024 年 12 月 31 日。<code v-pre>path</code> 参数指定了 Cookie 的适用路径，这里设置为根路径 <code v-pre>/</code>。</p>
</li>
<li>
<p>获取 Cookie：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> cookieValue <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code v-pre>document.cookie</code> 可以获取当前页面的所有 Cookie。它返回一个字符串，包含了所有的 Cookie。</p>
</li>
<li>
<p>解析 Cookie：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">parseCookie</span><span class="token punctuation">(</span><span class="token parameter">cookieString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cookies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  cookieString<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">';'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cookie</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cookieName <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cookieValue <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cookies<span class="token punctuation">[</span>cookieName<span class="token punctuation">]</span> <span class="token operator">=</span> cookieValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> cookies<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> parsedCookies <span class="token operator">=</span> <span class="token function">parseCookie</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个 <code v-pre>parseCookie</code> 函数，它将 <code v-pre>document.cookie</code> 字符串解析为一个对象，其中 Cookie 的名称作为键，Cookie 的值作为对应的值。这样你就可以方便地通过 Cookie 名称访问其对应的值。</p>
</li>
<li>
<p>删除 Cookie：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">"cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要删除一个 Cookie，你可以将其过期时间设置为过去的时间（比如 1970 年 1 月 1 日），这样浏览器会自动删除该 Cookie。</p>
</li>
</ol>
<h3 id="携带到后端原理" tabindex="-1"><a class="header-anchor" href="#携带到后端原理"><span>携带到后端原理</span></a></h3>
<p>在发送请求时，浏览器会自动将存储在当前域名下的 Cookie 附加到请求头中，以便在后端进行识别和验证。</p>
</div></template>


