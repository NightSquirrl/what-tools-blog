<template><div><h2 id="hyper" tabindex="-1"><a class="header-anchor" href="#hyper"><span>Hyper</span></a></h2>
<h2 id="安装linux子系统" tabindex="-1"><a class="header-anchor" href="#安装linux子系统"><span>安装Linux子系统</span></a></h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<p>window 搜索功打开虚拟和Linux</p>
<p>命令行终端安装Ubuntu</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>wsl --set-default-version <span class="token number">2</span>

wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-o</span>

wsl.exe <span class="token parameter variable">--install</span> Ubuntu-22.04

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="换源" tabindex="-1"><a class="header-anchor" href="#换源"><span>换源</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/apt
<span class="token function">sudo</span> <span class="token function">vim</span> sources.list

ggdG清空文本

<span class="token comment"># https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/</span>

<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> xfce4 --- 可视化面板
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装zsh" tabindex="-1"><a class="header-anchor" href="#安装zsh"><span>安装zsh</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">zsh</span>

chsh <span class="token parameter variable">-s</span> /bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#安装-oh-my-zsh"><span>安装 oh my zsh</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/Devkings/oh_my_zsh_install/raw/master/install.sh<span class="token variable">)</span></span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-powerlevel10k" tabindex="-1"><a class="header-anchor" href="#安装-powerlevel10k"><span>安装 powerlevel10k</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>https://github.com/romkatv/powerlevel10k?tab<span class="token operator">=</span>readme-ov-file<span class="token comment">#fonts</span>

重新进行配置
p10k configure

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可视化面板" tabindex="-1"><a class="header-anchor" href="#可视化面板"><span>可视化面板</span></a></h3>
<p><a href="https://sourceforge.net/projects/vcxsrv/" target="_blank" rel="noopener noreferrer">下载安装 vcxsrv<ExternalLinkIcon/></a>
-ac 参数
启动面板
sudo startxfce4</p>
</div></template>


