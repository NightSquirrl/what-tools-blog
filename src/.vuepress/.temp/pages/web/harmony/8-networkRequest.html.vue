<template><div><h1 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求"><span>网络请求</span></a></h1>
<ul>
<li>http数据请求</li>
<li>websocket</li>
<li>socket</li>
</ul>
<h2 id="http" tabindex="-1"><a class="header-anchor" href="#http"><span>HTTP</span></a></h2>
<h3 id="导入模块" tabindex="-1"><a class="header-anchor" href="#导入模块"><span>导入模块</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">'@ohos.net.http'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 引入包名</span>
<span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">'@ohos.net.http'</span><span class="token punctuation">;</span>

<span class="token comment">// 每一个httpRequest对应一个HTTP请求任务，不可复用</span>
<span class="token keyword">let</span> httpRequest <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 用于订阅HTTP响应头，此接口会比request请求先返回。可以根据业务需要订阅此消息</span>
<span class="token comment">// 从API 8开始，使用on('headersReceive', Callback)替代on('headerReceive', AsyncCallback)。 8+</span>
httpRequest<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'headersReceive'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'header: '</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
httpRequest<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>
    <span class="token comment">// 填写HTTP请求的URL地址，可以带参数也可以不带参数。URL地址需要开发者自定义。请求的参数可以在extraData中指定</span>
    <span class="token string">"EXAMPLE_URL"</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        method<span class="token operator">:</span> http<span class="token punctuation">.</span>RequestMethod<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">,</span> <span class="token comment">// 可选，默认为http.RequestMethod.GET</span>
        <span class="token comment">// 开发者根据自身业务需要添加header字段</span>
        header<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 当使用POST请求时此字段用于传递内容</span>
        extraData<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token string">"data to send"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        expectDataType<span class="token operator">:</span> http<span class="token punctuation">.</span>HttpDataType<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token comment">// 可选，指定返回数据的类型</span>
        usingCache<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可选，默认为true</span>
        priority<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 可选，默认为1</span>
        connectTimeout<span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token comment">// 可选，默认为60000ms</span>
        readTimeout<span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token comment">// 可选，默认为60000ms</span>
        usingProtocol<span class="token operator">:</span> http<span class="token punctuation">.</span>HttpProtocol<span class="token punctuation">.</span><span class="token constant">HTTP1_1</span><span class="token punctuation">,</span> <span class="token comment">// 可选，协议类型默认值由系统自动指定</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// data.result为HTTP响应内容，可根据业务需要进行解析</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Result:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'code:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>responseCode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// data.header为HTTP响应头，可根据业务需要进行解析</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'header:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>header<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'cookies:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>cookies<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8+</span>
            <span class="token comment">// 取消订阅HTTP响应头事件</span>
            httpRequest<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'headersReceive'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 当该请求使用完毕时，调用destroy方法主动销毁</span>
            httpRequest<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'error:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 取消订阅HTTP响应头事件</span>
            httpRequest<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'headersReceive'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 当该请求使用完毕时，调用destroy方法主动销毁。</span>
            httpRequest<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requset-参数" tabindex="-1"><a class="header-anchor" href="#requset-参数"><span>requset 参数</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>method</td>
<td><a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-http-0000001478061929-V3#ZH-CN_TOPIC_0000001523968386__requestmethod" target="_blank" rel="noopener noreferrer">RequestMethod<ExternalLinkIcon/></a></td>
<td>否</td>
<td>请求方式。</td>
</tr>
<tr>
<td>extraData</td>
<td><code v-pre>string </code></td>
<td>Object</td>
<td><code v-pre>ArrayBuffer8+发送请求的额外数据。- 当HTTP请求为POST、PUT等方法时，此字段为HTTP请求的content。当'Content-Type'为'application/x-www-form-urlencoded'时，请求提交的信息主体数据应在key和value进行URL转码后按照键值对&quot;key1=value1&amp;key2=value2&amp;key3=value3&quot;的方式进行编码。- 当HTTP请求为GET、OPTIONS、DELETE、TRACE、CONNECT等方法时，此字段为HTTP请求的参数补充，参数内容会拼接到URL中进行发送。- 开发者传入string对象，开发者需要自行编码，将编码后的string传入。</code></td>
</tr>
<tr>
<td><a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-http-0000001478061929-V3#ZH-CN_TOPIC_0000001523968386__entry809654898152951p0" target="_blank" rel="noopener noreferrer">expectDataType9+<ExternalLinkIcon/></a></td>
<td><a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-http-0000001478061929-V3#ZH-CN_TOPIC_0000001523968386__httpdatatype9" target="_blank" rel="noopener noreferrer">HttpDataType<ExternalLinkIcon/></a></td>
<td>否</td>
<td>指定返回数据的类型。如果设置了此参数，系统将优先返回指定的类型。</td>
</tr>
<tr>
<td>usingCache9+</td>
<td>boolean</td>
<td>否</td>
<td>是否使用缓存，默认为true。</td>
</tr>
<tr>
<td>priority9+</td>
<td>number</td>
<td>否</td>
<td>优先级，范围[1,1000]，默认是1。</td>
</tr>
<tr>
<td>header</td>
<td>Object</td>
<td>否</td>
<td><code v-pre>HTTP请求头字段。默认{'Content-Type': 'application/json'}。</code></td>
</tr>
<tr>
<td>readTimeout</td>
<td>number</td>
<td>否</td>
<td>读取超时时间。单位为毫秒（ms），默认为60000ms。设置为0表示不会出现超时情况。</td>
</tr>
<tr>
<td>connectTimeout</td>
<td>number</td>
<td>否</td>
<td>连接超时时间。单位为毫秒（ms），默认为60000ms。</td>
</tr>
<tr>
<td>usingProtocol9+</td>
<td><a href="https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-http-0000001478061929-V3#ZH-CN_TOPIC_0000001523968386__httpprotocol9" target="_blank" rel="noopener noreferrer">HttpProtocol<ExternalLinkIcon/></a></td>
<td>否</td>
<td>使用协议。默认值由系统自动指定。</td>
</tr>
</tbody>
</table>
<h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket"><span>webSocket</span></a></h2>
<h3 id="导入模块-1" tabindex="-1"><a class="header-anchor" href="#导入模块-1"><span>导入模块</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> webSocket <span class="token keyword">from</span> <span class="token string">'@ohos.net.webSocket'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="demo-1" tabindex="-1"><a class="header-anchor" href="#demo-1"><span>Demo</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> webSocket <span class="token keyword">from</span> <span class="token string">'@ohos.net.webSocket'</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> defaultIpAddress <span class="token operator">=</span> <span class="token string">"ws://"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ws <span class="token operator">=</span> webSocket<span class="token punctuation">.</span><span class="token function">createWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'open'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"on open, status:"</span> <span class="token operator">+</span> value<span class="token punctuation">[</span><span class="token string">'status'</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">", message:"</span> <span class="token operator">+</span> value<span class="token punctuation">[</span><span class="token string">'message'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 当收到on('open')事件时，可以通过send()方法与服务器进行通信</span>
    ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Hello, server!"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"send success"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"send fail, err:"</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"on message, message:"</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 当收到服务器的`bye`消息时（此消息字段仅为示意，具体字段需要与服务器协商），主动断开连接</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">'bye'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ws<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"close success"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"close fail, err is "</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"on close, code is "</span> <span class="token operator">+</span> value<span class="token punctuation">.</span>code <span class="token operator">+</span> <span class="token string">", reason is "</span> <span class="token operator">+</span> value<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"on error, error:"</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>defaultIpAddress<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"connect success"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"connect fail, err:"</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


