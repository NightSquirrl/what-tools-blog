<template><div><h2 id="连接命令" tabindex="-1"><a class="header-anchor" href="#连接命令"><span>连接命令</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> root@ip
<span class="token comment"># 然后会让你输入密码</span>
xxxxx  
<span class="token comment"># 成功进入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>细节</p>
<p>​	如果此时你已经连接过了,然后你又重装了服务器的系统</p>
<p>​	当你再次连接的时候是无法连接上的</p>
<p>​	基本的错误如下</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED<span class="token operator">!</span>     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY<span class="token operator">!</span>
Someone could be eavesdropping on you right now <span class="token punctuation">(</span>man-in-the-middle attack<span class="token punctuation">)</span><span class="token operator">!</span>
It is also possible that a <span class="token function">host</span> key has just been changed.
The fingerprint <span class="token keyword">for</span> the ED25519 key sent by the remote <span class="token function">host</span> is
SHA256:h5Yb3lGyD8c4tOpZQsw0hyq2bAELOG17aAczQ1CrTgc.
Please contact your system administrator.
Add correct <span class="token function">host</span> key <span class="token keyword">in</span> /Users/zeroeldath/.ssh/known_hosts to get rid of this message.
Offending ECDSA key <span class="token keyword">in</span> /Users/zeroeldath/.ssh/known_hosts:3
Host key <span class="token keyword">for</span> <span class="token number">1.94</span>.2.139 has changed and you have requested strict checking.
Host key verification failed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>解释:</p>
<p>​	这个警告消息表明指定IP地址（1.94.2.139）的主机密钥自上次保存在你的<code v-pre>known_hosts</code>文件之后已经更改。这可能是一个合法的变化，比如服务器的升级或配置更改.</p>
<p>​	当你第一次连接的时候,你的电脑会记录服务器的信息,但是当你重新安装系统之后信息发生了变化,导致本地认为不安全所以无法连接.</p>
<p>解决:</p>
<p>​	打开 /Users/zeroeldath/.ssh/known_hosts  该文件(将路径中 zeroeldath 替换为你的 mac 名称)</p>
<p>​	将与服务器相关的信息全部删除  本次案例为 1.94.2.139 (2023 年 11 月 11 日 03:30 华为云服务器)</p>
</blockquote>
<blockquote>
<p>上述连接的方式每次都需要输入密码而且不安全,可以使用暴力密码破解掉</p>
</blockquote>
<h2 id="_2-ssh-秘钥连接" tabindex="-1"><a class="header-anchor" href="#_2-ssh-秘钥连接"><span>2. SSH 秘钥连接</span></a></h2>
<h3 id="_2-1-制作密钥对" tabindex="-1"><a class="header-anchor" href="#_2-1-制作密钥对"><span>2.1 制作密钥对</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@host ~<span class="token punctuation">]</span>$ ssh-keygen  <span class="token operator">&lt;=</span><span class="token operator">=</span> 建立密钥对
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/root/.ssh/id_rsa<span class="token punctuation">)</span>: <span class="token operator">&lt;=</span><span class="token operator">=</span> 按 Enter
Created directory <span class="token string">'/root/.ssh'</span><span class="token builtin class-name">.</span>
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>: <span class="token operator">&lt;=</span><span class="token operator">=</span> 输入密钥锁码，或直接按 Enter 留空
Enter same passphrase again: <span class="token operator">&lt;=</span><span class="token operator">=</span> 再输入一遍密钥锁码
Your identification has been saved <span class="token keyword">in</span> /root/.ssh/id_rsa. <span class="token operator">&lt;=</span><span class="token operator">=</span> 私钥
Your public key has been saved <span class="token keyword">in</span> /root/.ssh/id_rsa.pub. <span class="token operator">&lt;=</span><span class="token operator">=</span> 公钥
The key fingerprint is:
0f:d3:e7:1a:1c:bd:5c:03:f1:19:f1:22:df:9b:cc:08 root@host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-在服务器上安装公钥" tabindex="-1"><a class="header-anchor" href="#_2-2-在服务器上安装公钥"><span>2.2 在服务器上安装公钥</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@host ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> .ssh
<span class="token punctuation">[</span>root@host .ssh<span class="token punctuation">]</span>$ <span class="token function">cat</span> id_rsa.pub <span class="token operator">>></span> authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>授权</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@host .ssh<span class="token punctuation">]</span>$ <span class="token function">chmod</span> <span class="token number">600</span> authorized_keys
<span class="token punctuation">[</span>root@host .ssh<span class="token punctuation">]</span>$ <span class="token function">chmod</span> <span class="token number">700</span> ~/.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-设置-ssh-打开密钥登录功能" tabindex="-1"><a class="header-anchor" href="#_2-3-设置-ssh-打开密钥登录功能"><span>2.3. 设置 SSH，打开密钥登录功能</span></a></h3>
<p>编辑 /etc/ssh/sshd_config 文件，进行如下设置：</p>
<blockquote>
<p>如果没有权限就修改 include 中的 conf</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>RSAAuthentication <span class="token function">yes</span>
PubkeyAuthentication <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，请留意 root 用户能否通过 SSH 登录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>PermitRootLogin <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你完成全部设置，并以密钥方式登录成功后，再禁用密码登录：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>PasswordAuthentication no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，重启 SSH 服务：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@host .ssh<span class="token punctuation">]</span>$ <span class="token function">service</span> sshd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-本地秘钥配置" tabindex="-1"><a class="header-anchor" href="#_2-4-本地秘钥配置"><span>2.4 本地秘钥配置</span></a></h3>
<h4 id="生成秘钥" tabindex="-1"><a class="header-anchor" href="#生成秘钥"><span>生成秘钥</span></a></h4>
<ul>
<li>基于<code v-pre>ED25519</code>算法，生成密钥对命令如下：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">"&lt;注释内容>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>基于RSA算法，生成密钥对命令如下：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"&lt;注释内容>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="复制" tabindex="-1"><a class="header-anchor" href="#复制"><span>复制</span></a></h4>
<p>Windows（在WSL或Git Bash下）:</p>
<h5 id="window" tabindex="-1"><a class="header-anchor" href="#window"><span>window</span></a></h5>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_ed25519.pub <span class="token operator">|</span> clip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="mac" tabindex="-1"><a class="header-anchor" href="#mac"><span>mac</span></a></h5>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">'\n'</span> <span class="token operator">&lt;</span> ~/.ssh/id_ed25519.pub <span class="token operator">|</span> pbcopy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="gnu-linux-requires-xclip" tabindex="-1"><a class="header-anchor" href="#gnu-linux-requires-xclip"><span>GNU/Linux (requires xclip):</span></a></h5>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>xclip <span class="token parameter variable">-sel</span> clip <span class="token operator">&lt;</span> ~/.ssh/id_ed25519.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-上传自己的秘钥" tabindex="-1"><a class="header-anchor" href="#_2-5-上传自己的秘钥"><span>2.5 上传自己的秘钥</span></a></h3>
<blockquote>
<p>将 2.5 复制的秘钥粘贴到 ~/.ssh/authorized_keys 服务器的文件夹中</p>
</blockquote>
</div></template>


