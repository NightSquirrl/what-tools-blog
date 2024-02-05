<template><div><h1 id="内容方面优化" tabindex="-1"><a class="header-anchor" href="#内容方面优化"><span><strong>内容方面优化</strong></span></a></h1>
<h2 id="_1-增加-mate-descripition" tabindex="-1"><a class="header-anchor" href="#_1-增加-mate-descripition"><span>1.<strong>增加 Mate Descripition</strong></span></a></h2>
<p>每个页面</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"xxxxxxxx"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>填写页面的介绍，160单词~170单词，可参考竞品</p>
<h2 id="_2-纯文本-a-link-文案可读性" tabindex="-1"><a class="header-anchor" href="#_2-纯文本-a-link-文案可读性"><span>2.<strong>纯文本 A Link 文案可读性</strong></span></a></h2>
<p>A Link 跳转的文本具有可读性，比如“More”按钮可以将其改成“More Apps”更直观</p>
<h2 id="_3-图片增加-alt-属性" tabindex="-1"><a class="header-anchor" href="#_3-图片增加-alt-属性"><span>3.<strong>图片增加 Alt 属性</strong></span></a></h2>
<p>给页面中每张图片增加有意义的alt属性，可以是对图片的描述，图片表示的功能。</p>
<h2 id="_4-设置网站title" tabindex="-1"><a class="header-anchor" href="#_4-设置网站title"><span>4.<strong>设置网站title</strong></span></a></h2>
<p>每个页面</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token constant">XXXXXX</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>填写页面的标题，50单词~100单词，可参考竞品</p>
<h2 id="_5-设置网站icon" tabindex="-1"><a class="header-anchor" href="#_5-设置网站icon"><span>5.<strong>设置网站Icon</strong></span></a></h2>
<p>每个页面设置的lcon都应该相同，只对域名的首页起作用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"xxxx"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-结构化数据-不同产品结构化数据内容不同" tabindex="-1"><a class="header-anchor" href="#_6-结构化数据-不同产品结构化数据内容不同"><span>6.<strong>结构化数据，不同产品结构化数据内容不同</strong></span></a></h2>
<h1 id="通用结构化数据" tabindex="-1"><a class="header-anchor" href="#通用结构化数据"><span><strong>通用结构化数据</strong></span></a></h1>
<h2 id="_1-设置网站logo" tabindex="-1"><a class="header-anchor" href="#_1-设置网站logo"><span>1.<strong>设置网站Logo</strong></span></a></h2>
<p>只需要在首页上设置</p>
<p>网页header增加JSON-LD，参考https://developers.google.com/search/docs/appearance/structured-data/logo?hl=zh-cn#example</p>
<p>Logo Icon要求：</p>
<p>大小至少112x112</p>
<p>格式的图片： BMP、GIF、JPEG、PNG、WebP 和 SVG</p>
<p>示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/ld+json"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-设置网站名称" tabindex="-1"><a class="header-anchor" href="#_2-设置网站名称"><span>2.<strong>设置网站名称</strong></span></a></h2>
<p>只需要在首页上设置</p>
<p>网页header增加JSON-LD，参考https://developers.google.com/search/docs/appearance/site-names?hl=zh-cn#how-to-add-structured-data</p>
<p>名称描述尽可能50个字符以上，但不能太长。可参考竞品重新组织语言。</p>
<p>示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/ld+json"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-设置网站更新时间" tabindex="-1"><a class="header-anchor" href="#_3-设置网站更新时间"><span>3.<strong>设置网站更新时间</strong></span></a></h2>
<p>可对有定期更新内容的关键页面进行设置</p>
<p>网页header增加JSON-LD，参考https://developers.google.com/search/docs/appearance/publication-dates?hl=zh-cn，建议添加<a href="https://schema.org/CreativeWork" target="_blank" rel="noopener noreferrer">CreativeWork<ExternalLinkIcon/></a>的子类型（例如<a href="https://developers.google.com/search/docs/appearance/structured-data/article?hl=zh-cn" target="_blank" rel="noopener noreferrer">Article<ExternalLinkIcon/></a>、<a href="https://schema.org/BlogPosting" target="_blank" rel="noopener noreferrer">BlogPosting<ExternalLinkIcon/></a>或<a href="https://developers.google.com/search/docs/appearance/structured-data/video?hl=zh-cn" target="_blank" rel="noopener noreferrer">VideoObject<ExternalLinkIcon/></a>），并指定datePublished和/或dateModified字段</p>
<p>示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/ld+json"</span><span class="token operator">></span><span class="token punctuation">{</span> <span class="token string-property property">"@context"</span><span class="token operator">:</span> <span class="token string">"https://schema.org"</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-设置面包屑路径" tabindex="-1"><a class="header-anchor" href="#_4-设置面包屑路径"><span>4.<strong>设置面包屑路径</strong></span></a></h2>
<p>针对页面跳转路径进行设置</p>
<p>网页header增加JSON-LD，参考https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=zh-cn#json-ld</p>
<p>参考</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/ld+json"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="其他结构化数据" tabindex="-1"><a class="header-anchor" href="#其他结构化数据"><span><strong>其他结构化数据</strong></span></a></h1>
<p>https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=zh-cn</p>
<h2 id="link-路径命名规范化" tabindex="-1"><a class="header-anchor" href="#link-路径命名规范化"><span><strong>Link 路径命名规范化</strong></span></a></h2>
<p>用有意义的名称，不要使用数字，单词之间用“-”</p>
<p>可以采用url channle 方式的技术实现路径的变化，并保持原有路径能访问</p>
<h2 id="url-归一化" tabindex="-1"><a class="header-anchor" href="#url-归一化"><span><strong>Url 归一化</strong></span></a></h2>
<h2 id="控制台没有异常" tabindex="-1"><a class="header-anchor" href="#控制台没有异常"><span><strong>控制台没有异常</strong></span></a></h2>
<h2 id="性能方面优化" tabindex="-1"><a class="header-anchor" href="#性能方面优化"><span><strong>性能方面优化</strong></span></a></h2>
<h2 id="cls优化" tabindex="-1"><a class="header-anchor" href="#cls优化"><span><strong>CLS优化</strong></span></a></h2>
<h2 id="tbt优化" tabindex="-1"><a class="header-anchor" href="#tbt优化"><span><strong>TBT优化</strong></span></a></h2>
<h2 id="lcp优化" tabindex="-1"><a class="header-anchor" href="#lcp优化"><span><strong>LCP优化</strong></span></a></h2>
</div></template>


