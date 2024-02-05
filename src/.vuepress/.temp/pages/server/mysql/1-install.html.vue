<template><div><h2 id="_1-macos-版本的安装" tabindex="-1"><a class="header-anchor" href="#_1-macos-版本的安装"><span>1. MacOS 版本的安装</span></a></h2>
<h3 id="_1-1-下载地址" tabindex="-1"><a class="header-anchor" href="#_1-1-下载地址"><span>1.1 下载地址</span></a></h3>
<blockquote>
<p>选择对应的版本下载即可</p>
</blockquote>
<p><a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">MacOS 下载地址<ExternalLinkIcon/></a></p>
<h3 id="_1-2-解决无法启动mysql问题" tabindex="-1"><a class="header-anchor" href="#_1-2-解决无法启动mysql问题"><span>1.2 解决无法启动MySQL问题</span></a></h3>
<ol>
<li>
<p>打开设置中的mysql图标，发现红点，点击&quot;Start MySQL Server&quot;后，变绿后秒变红，无法启动。</p>
</li>
<li>
<p>![image-20231111030503079](/Users/zeroeldath/Library/Application Support/typora-user-images/image-20231111030503079.png)</p>
</li>
<li>
<p>进入configuration，找到Error log的位置，尝试打开。</p>
</li>
<li>
<p>报错：无法打开data文件夹，权限不够。重新授权：</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql /usr/local/mysql/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>打开error文件，报错为：<code v-pre>Could not create unix socket lock file /usr/local/mysql/mysql.sock.lock.</code></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/mysql/ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6">
<li>然后可以设置目录权限</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /usr/local/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3配置mysql环境变量" tabindex="-1"><a class="header-anchor" href="#_1-3配置mysql环境变量"><span>1.3配置MySQL环境变量</span></a></h3>
<p>如果需要在终端里面输入Mysql命令，那么就需要进行如下的配置。</p>
<ol>
<li>打开文件：<code v-pre>open ~/.bash_profile</code></li>
<li>加入语句：<code v-pre>PATH=$PATH:/usr/local/mysql/bin</code></li>
<li>使配置的语句生效：<code v-pre>source ~/.bash_profile</code></li>
<li>如果配置成功，那么输入命令：<code v-pre>mysql -uroot -p</code> 输入密码后成功登录</li>
</ol>
</div></template>


