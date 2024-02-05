<template><div><h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化"><span>项目初始化</span></a></h2>
<p>创建文件rollup.config.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>npm init <span class="token operator">-</span>y
tsc <span class="token operator">--</span>init


npm install rollup <span class="token operator">-</span><span class="token constant">D</span>
npm install rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>dts <span class="token operator">-</span><span class="token constant">D</span>
npm install rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>typescript2 <span class="token operator">-</span><span class="token constant">D</span>
npm install typescript <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parcel" tabindex="-1"><a class="header-anchor" href="#parcel"><span>Parcel</span></a></h2>
<p>启动命令 yarn parcel src/index.html</p>
<blockquote>
<p>一句话,做你任何你想做的事情,一切交给 parcel,包括依赖的自动安装</p>
</blockquote>
<p>打包</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> parcel build src/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="发布npm" tabindex="-1"><a class="header-anchor" href="#发布npm"><span>发布npm</span></a></h2>
<ol>
<li>npm adduser
用户名 密码 邮箱 邮箱验证码</li>
<li>npm login<br>
输入刚才的 用户名 密码 邮箱 验证码</li>
<li>npm publish 发布</li>
</ol>
</div></template>


