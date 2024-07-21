<template><div><h1 id="node-版本控制" tabindex="-1"><a class="header-anchor" href="#node-版本控制"><span>node 版本控制</span></a></h1>
<h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h2>
<p><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">NVM Window github 地址如下<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating" target="_blank" rel="noopener noreferrer">其他系统的下载地址<ExternalLinkIcon/></a></p>
<p>选择合适的系统版本下载</p>
<h2 id="换源" tabindex="-1"><a class="header-anchor" href="#换源"><span>换源</span></a></h2>
<p>一般是在 setting.txt 文件中 添加</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>nvm list available <span class="token comment">#查显示可以安装的所有node.js的版本</span>
nvm <span class="token function">install</span> <span class="token number">18.7</span>.0 <span class="token comment"># 安装指定的版本</span>
nvm <span class="token function">ls</span> <span class="token comment"># 列出所有已经安装的版本</span>
nvm use <span class="token number">18.7</span>.0 <span class="token comment"># 使用已经安装的版本</span>
nvm current <span class="token comment"># 显示当前的版本</span>
nvm uninstall <span class="token comment"># 卸载指定的版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


