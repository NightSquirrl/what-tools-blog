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
<h2 id="_2-window-版本的安装" tabindex="-1"><a class="header-anchor" href="#_2-window-版本的安装"><span>2. Window 版本的安装</span></a></h2>
<p><a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a></p>
<blockquote>
<p>此处以下载压缩版本为例</p>
</blockquote>
<h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3>
<p>将加压之后的文件 bin 目录的路径添加到 path 环境变量中</p>
<h3 id="配置-my-ini" tabindex="-1"><a class="header-anchor" href="#配置-my-ini"><span>配置 my.ini</span></a></h3>
<p>在加压的根目录中新建文件夹 my.ini</p>
<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre v-pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token comment">; 设置3306端口</span>
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">3306</span>
<span class="token comment">; 设置mysql的安装目录</span>
<span class="token key attr-name">basedir</span><span class="token punctuation">=</span><span class="token value attr-value">C:\\gl\\SQL\\mysql-8.0.18-winx64</span>
<span class="token comment">; 设置mysql数据库的数据的存放目录</span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">C:\\gl\\SQL\\mysql-data</span>
<span class="token comment">; 允许最大连接数</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token comment">; 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统</span>
<span class="token key attr-name">max_connect_errors</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token comment">; 服务端使用的字符集默认为UTF8</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token comment">; 创建新表时将使用的默认存储引擎</span>
<span class="token key attr-name">default-storage-engine</span><span class="token punctuation">=</span><span class="token value attr-value">INNODB</span>
<span class="token comment">; 默认使用“mysql_native_password”插件认证</span>
<span class="token key attr-name">default_authentication_plugin</span><span class="token punctuation">=</span><span class="token value attr-value">mysql_native_password</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysql</span><span class="token punctuation">]</span></span>
<span class="token comment">; 设置mysql客户端默认字符集</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token comment">; 设置mysql客户端连接服务端时默认使用的端口</span>
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">3306</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：basedir 和 datadir 要改成你自己的目录。</p>
<p><mark>陷阱:</mark></p>
<p><code v-pre>default_authentication_plugin=mysql_native_password</code> 这一句必须要加上，否则可能导致 root 的初始密码无法登陆。</p>
</blockquote>
<h3 id="初始化数据库" tabindex="-1"><a class="header-anchor" href="#初始化数据库"><span>初始化数据库</span></a></h3>
<p><strong>以管理员身份</strong> 运行 <strong>cmd</strong>，切换至安装目录的 <strong>bin</strong> 目录下，输入如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--console</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认的服务名就是 <code v-pre>mysql</code>，也可以指定服务名</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--console</span> 服务名

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>执行成功后，会显示 <code v-pre>root</code> 的初始密码，如下图，这个密码需要保存下来。</mark></p>
<p>!!!!!</p>
<h3 id="安装服务" tabindex="-1"><a class="header-anchor" href="#安装服务"><span>安装服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>mysqld <span class="token parameter variable">-install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>net start mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录数据库" tabindex="-1"><a class="header-anchor" href="#登录数据库"><span>登录数据库</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码"><span>修改密码</span></a></h3>
<p>执行以下语句，即可将密码改为 <strong>root</strong>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>ALTER <span class="token environment constant">USER</span> <span class="token string">'root'</span>@<span class="token string">'localhost'</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">'root'</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


