<template><div><blockquote>
<p>git 无法检测到 文件夹命名大小写的变化如何解决</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config core.ignorecase <span class="token comment"># 查看本地仓库git忽略大小写是打开还是关闭</span>
<span class="token function">git</span> config core.ignorecase <span class="token boolean">false</span> <span class="token comment"># 关闭忽略大小写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>修改上次提交</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-branch_name</span> <span class="token string">'新的描述'</span> <span class="token comment"># 修改上次提交</span>

<span class="token comment"># 如果上次的commit还没有推送到远程仓库</span>
<span class="token function">git</span> push origin branch_name <span class="token comment"># 推送到远程仓库</span>
<span class="token comment"># 如果上次的commit已经推送到远程仓库</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin branch_name <span class="token comment"># 强制推送到远程仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>撤销提交</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 已提交但是没有push</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^ <span class="token comment"># 撤销提交</span>
<span class="token function">git</span> reset <span class="token parameter variable">--mixed</span> HEAD^ <span class="token comment"># 撤销提交并保留修改也就是撤销commit add</span>
<span class="token comment"># 已提交并且已经push</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^ <span class="token comment"># 撤销提交并删除修改 会丢掉所有的代码包括git commit的记录</span>
<span class="token function">git</span> revert HEAD^ <span class="token comment"># 撤销提交并保留修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


