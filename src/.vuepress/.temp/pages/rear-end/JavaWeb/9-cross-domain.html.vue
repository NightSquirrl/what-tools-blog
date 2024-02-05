<template><div><h2 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置"><span>NGINX 配置</span></a></h2>
<blockquote>
<p>让服务器告诉浏览器：允许跨域（返回 cross-origin-allow 响应头）</p>
</blockquote>
<div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ^~ /api/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8080/api/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Access-Control-Allow-Origin'</span> <span class="token variable">$http_origin</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Access-Control-Allow-Credentials'</span> <span class="token string">'true'</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Methods <span class="token string">'GET, POST, OPTIONS'</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Headers <span class="token string">'*'</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_method</span> = <span class="token string">'OPTIONS'</span>)</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Access-Control-Allow-Credentials'</span> <span class="token string">'true'</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Access-Control-Allow-Origin'</span> <span class="token variable">$http_origin</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Access-Control-Allow-Methods'</span> <span class="token string">'GET, POST, OPTIONS'</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Access-Control-Allow-Headers'</span> <span class="token string">'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range'</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Access-Control-Max-Age'</span> <span class="token number">1728000</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Content-Type'</span> <span class="token string">'text/plain; charset=utf-8'</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Content-Length'</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">204</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后端-crossorigin-配置" tabindex="-1"><a class="header-anchor" href="#后端-crossorigin-配置"><span>后端@CrossOrigin 配置</span></a></h2>
<p>在 controller 中添加注释@CrossOrigin(origin={&quot;xxxx&quot;},allowCredentials=&quot;true&quot;)</p>
<h3 id="web全局请求拦截" tabindex="-1"><a class="header-anchor" href="#web全局请求拦截"><span>web全局请求拦截</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebMvcConfg</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置允许跨域的路径</span>
    registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">"/**"</span><span class="token punctuation">)</span>
      <span class="token comment">//设置允许跨域请求的域名</span>
      <span class="token comment">//当**Credentials为true时，**Origin不能为星号，需为具体的ip地址【如果接口不带cookie,ip无需设成具体ip】</span>
      <span class="token punctuation">.</span><span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">"http://localhost:9527"</span><span class="token punctuation">,</span> <span class="token string">"http://127.0.0.1:9527"</span><span class="token punctuation">,</span> <span class="token string">"http://127.0.0.1:8082"</span><span class="token punctuation">,</span> <span class="token string">"http://127.0.0.1:8083"</span><span class="token punctuation">)</span>
      <span class="token comment">//是否允许证书 不再默认开启</span>
      <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token comment">//设置允许的方法</span>
      <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span>
      <span class="token comment">//跨域允许时间</span>
      <span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


