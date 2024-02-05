<template><div><h1 id="gulp" tabindex="-1"><a class="header-anchor" href="#gulp"><span>gulp</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#%E5%88%9D%E5%A7%8B%E5%8C%96">初始化</a></li>
</ul>
<p><a href="#gulp%E4%B8%AD%E6%8F%90%E4%BE%9B%E7%9A%84%E6%96%B9%E6%B3%95">gulp中提供的方法</a></p>
<p><a href="#%E9%85%8D%E7%BD%AE">配置</a></p>
<p><a href="#task%E5%8F%82%E6%95%B0%E8%A7%A3%E9%87%8A">task参数解释</a></p>
<p><a href="#html%E6%96%87%E4%BB%B6%E5%8E%8B%E7%BC%A9">html文件压缩</a></p>
<p><a href="#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85">插件安装</a></p>
<p><a href="#%E6%96%87%E4%BB%B6%E6%8A%BD%E7%A6%BB">文件抽离</a></p>
<p><a href="#%E9%A2%84%E5%85%88%E6%93%8D%E4%BD%9C">预先操作</a><br>
<a href="#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85-1">插件安装</a></p>
<p><a href="#css%E6%96%87%E4%BB%B6%E5%8E%8B%E7%BC%A9">CSS文件压缩</a></p>
<p><a href="#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85-2">插件安装</a></p>
<p><a href="#js%E5%8E%8B%E7%BC%A9">JS压缩</a></p>
<p><a href="#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85-3">插件安装</a></p>
<p><a href="#%E6%97%A0%E9%9C%80%E5%8E%8B%E7%BC%A9%E7%9A%84%E6%96%87%E4%BB%B6%E5%A4%84%E7%90%86">无需压缩的文件处理</a></p>
<p><a href="#%E7%A8%8B%E5%BA%8F%E6%89%A7%E8%A1%8C">程序执行</a></p>
<p><a href="#%E5%8D%95%E4%BB%BB%E5%8A%A1%E6%89%A7%E8%A1%8C">单任务执行</a></p>
<p><a href="#%E5%A4%9A%E4%BB%BB%E5%8A%A1">多任务</a></p>
<p><a href="#%E9%85%8D%E7%BD%AE-1">配置</a></p>
<p><a href="#am5%E5%85%B7%E4%BD%93%E6%96%B9%E6%A1%88">Am5具体方案</a></p>
<p><a href="#%E4%BE%9D%E8%B5%96%E5%8C%85">依赖包</a><br>
<a href="#gulpfilejs%E9%85%8D%E7%BD%AE">gulpfile.js配置</a><br>
<a href="#beetl%E8%AF%AD%E6%B3%95%E4%BF%AE%E6%94%B9">beetl语法修改</a></p>
<h1 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h1>
<ol>
<li>
<p>初始化包管理工具</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>npm init <span class="token operator">-</span>y 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>下载gulp库文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>npm i gulp <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>在项目根目录新建gulpfile.js文件，进行任务的编写</p>
</li>
<li>
<p>在命令行使用gulp命令执行任务</p>
</li>
<li>
<p>安装gulp命令行工具</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>npm i gulp<span class="token operator">-</span>cli <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>建议进行全局安装，方便在其他项目中直接运行</p>
</blockquote>
</li>
<li>
<p>运行命令</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>gupl 任务名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h1 id="gulp中提供的方法" tabindex="-1"><a class="header-anchor" href="#gulp中提供的方法"><span>gulp中提供的方法</span></a></h1>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//建立gulp任务</span>
gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//获取任务要处理的文件</span>
gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//任务结束后要输出的文件位置</span>
gulp<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//监听文件的变化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1>
<h2 id="task参数解释" tabindex="-1"><a class="header-anchor" href="#task参数解释"><span>task参数解释</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//htmlmin为任务名，在执行命令行压缩的时候会用到</span>
<span class="token comment">//后面的函数为执行任务的回调函数</span>
gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'htmlmin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">//处理文件的路径</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"./templates/index.html"</span><span class="token punctuation">)</span>
<span class="token comment">//使用html压缩插件的使用</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">htmlmin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//文件结果输出位置</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'dist/templates'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html文件压缩" tabindex="-1"><a class="header-anchor" href="#html文件压缩"><span>html文件压缩</span></a></h2>
<h3 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装"><span>插件安装</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>npm i gulp<span class="token operator">-</span>htmlmin <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//在gulpfile.js的文件中进行配置</span>
<span class="token comment">// 引入gulp模块</span>
<span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入html压缩模块</span>
<span class="token keyword">const</span> htmlmin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-htmlmin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'htmlmin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">//处理文件的路径</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"./templates/index.html"</span><span class="token punctuation">)</span>
<span class="token comment">//使用html压缩插件的使用</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">htmlmin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//文件结果输出位置</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'dist/templates'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件抽离" tabindex="-1"><a class="header-anchor" href="#文件抽离"><span>文件抽离</span></a></h2>
<h3 id="预先操作" tabindex="-1"><a class="header-anchor" href="#预先操作"><span>预先操作</span></a></h3>
<p>一般使用</p>
<pre><code>比如所有的html页面都会有header的头部导航，输入重复的代码，可以新建一个common 的文件夹，然后新建header.html将所有页面的header代码复制到此处，并删除其他文件夹中的header导航，替换成@@include('./文件/header.html')*
</code></pre>
<p>升级版本</p>
<pre><code>因为am5中的js是写在html文件中的，但是在html压缩的时候并不会压缩js代码，所以首先将html内部的代码全部抽离到commonJs的文件夹中，并命名不同的js文件，接着在gulpfile.js的文件中进行配置，先对js进行babel的编译，然后将编译之后的js进行压缩并存储在一个文件夹中，然后将每一个html中原本是js代码的位置全部使用@@include('./temp/转换后的js.js')，然后在执行html压缩的任务，就会将压缩之后的js代码，放入压缩后的html文件中。
</code></pre>
<h3 id="插件安装-1" tabindex="-1"><a class="header-anchor" href="#插件安装-1"><span>插件安装</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>npm i gulp<span class="token operator">-</span>file<span class="token operator">-</span>include <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//在gulpfile.js的文件中进行配置</span>
<span class="token comment">// 引入gulp模块</span>
<span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入html压缩模块</span>
<span class="token keyword">const</span> htmlmin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-htmlmin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入公共文件抽离模块</span>
<span class="token keyword">const</span> fileinclude <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-file-include'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'htmlmin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">//处理文件的路径</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"./templates/index.html"</span><span class="token punctuation">)</span>
<span class="token comment">//将抽离的代码放入</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">fileinclude</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">htmlmin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'dist/templates'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css文件压缩" tabindex="-1"><a class="header-anchor" href="#css文件压缩"><span>CSS文件压缩</span></a></h2>
<h3 id="插件安装-2" tabindex="-1"><a class="header-anchor" href="#插件安装-2"><span>插件安装</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>npm i gulp<span class="token operator">-</span>csso <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//在gulpfile.js的文件中进行配置</span>
<span class="token comment">// 引入gulp模块</span>
<span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//引入css压缩模块</span>
<span class="token keyword">const</span> csso <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-csso'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'cssmin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">//*.css匹配所有的css文件</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">'./static/css/ *.css'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">csso</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'./dist/static/css'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js压缩" tabindex="-1"><a class="header-anchor" href="#js压缩"><span>JS压缩</span></a></h2>
<h3 id="插件安装-3" tabindex="-1"><a class="header-anchor" href="#插件安装-3"><span>插件安装</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//安装语法转换babel</span>
npm i gulp<span class="token operator">-</span>babel @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">//安装js压缩模块</span>
npm i gulp<span class="token operator">-</span>uglify <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//在gulpfile.js的文件中进行配置</span>
<span class="token comment">// 引入gulp模块</span>
<span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入babel编译模块</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-babel'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入js混淆压缩模块</span>
<span class="token keyword">const</span> uglify <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-uglify'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'jsmin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"./templates/common/index.js"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/env'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">uglify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'./templates/temp'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="无需压缩的文件处理" tabindex="-1"><a class="header-anchor" href="#无需压缩的文件处理"><span>无需压缩的文件处理</span></a></h1>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//例如图片的资源无需压缩，则将文件拷贝到dist目录即可</span>
gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'copy'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">'./static/images/*'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'./dist/static/images'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="程序执行" tabindex="-1"><a class="header-anchor" href="#程序执行"><span>程序执行</span></a></h1>
<h2 id="单任务执行" tabindex="-1"><a class="header-anchor" href="#单任务执行"><span>单任务执行</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>gulp htmlmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="多任务" tabindex="-1"><a class="header-anchor" href="#多任务"><span>多任务</span></a></h2>
<h3 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1"><span>配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">"default"</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'jsmin'</span><span class="token punctuation">,</span><span class="token string">'cssmin'</span><span class="token punctuation">,</span><span class="token string">'htmlmin'</span><span class="token punctuation">,</span><span class="token string">'copy'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>执行gulp <span class="token keyword">default</span> 或者gulp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="am5具体方案" tabindex="-1"><a class="header-anchor" href="#am5具体方案"><span>Am5具体方案</span></a></h1>
<h2 id="依赖包" tabindex="-1"><a class="header-anchor" href="#依赖包"><span>依赖包</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>    <span class="token string-property property">"@babel/core"</span><span class="token operator">:</span> <span class="token string">"^7.18.5"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@babel/preset-env"</span><span class="token operator">:</span> <span class="token string">"^7.18.2"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"gulp"</span><span class="token operator">:</span> <span class="token string">"^4.0.2"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"gulp-babel"</span><span class="token operator">:</span> <span class="token string">"^8.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"gulp-csso"</span><span class="token operator">:</span> <span class="token string">"^4.0.1"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"gulp-file-include"</span><span class="token operator">:</span> <span class="token string">"^2.3.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"gulp-htmlmin"</span><span class="token operator">:</span> <span class="token string">"^5.0.1"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"gulp-uglify"</span><span class="token operator">:</span> <span class="token string">"^3.0.2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gulpfile-js配置" tabindex="-1"><a class="header-anchor" href="#gulpfile-js配置"><span>gulpfile.js配置</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//在gulpfile.js的文件中进行配置</span>
<span class="token comment">// 引入gulp模块</span>
<span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入html压缩模块</span>
<span class="token keyword">const</span> htmlmin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-htmlmin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入公共文件抽离模块</span>
<span class="token keyword">const</span> fileinclude <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-file-include'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入css压缩模块</span>
<span class="token keyword">const</span> csso <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-csso'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入babel编译模块</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-babel'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入js混淆压缩模块</span>
<span class="token keyword">const</span> uglify <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp-uglify'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//首先将js文件从html中抽离出来，并且使用@@include（‘js转换之后的位置’）占位</span>
gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'jsmin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"./templates/common/index.js"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/env'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">uglify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'./templates/temp'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'cssmin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">'./static/css/ *.css'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">csso</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'./dist/static/css'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'htmlmin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"./templates/index.html"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">fileinclude</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">htmlmin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'dist/templates'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'copy'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">'./static/images/*'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'./dist/static/images'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">'./static/swiper/ *'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'./dist/static/swiper'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">'./static/test/*'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">'./dist/static/test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">"default"</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'jsmin'</span><span class="token punctuation">,</span><span class="token string">'cssmin'</span><span class="token punctuation">,</span><span class="token string">'htmlmin'</span><span class="token punctuation">,</span><span class="token string">'copy'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>一定要先执行gulp jsmin或者要有最后的default配置</p>
</blockquote>
<h2 id="beetl语法修改" tabindex="-1"><a class="header-anchor" href="#beetl语法修改"><span>beetl语法修改</span></a></h2>
<p>gulp对html的压缩无法识别beelt在html标签中的js语句</p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"ad-box-mobile-1"</span> $<span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>isShowAd<span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>isShowAd<span class="token punctuation">)</span><span class="token operator">?</span><span class="token string">''</span>
  <span class="token operator">:</span><span class="token string">'style="display:none;"'</span><span class="token punctuation">}</span><span class="token operator">></span>
        Advertisements
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"ad-mobile-1"</span><span class="token operator">></span>

        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将其转换为if else的语句</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">%</span> 
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>isShowAd<span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>isShowAd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">%</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"ad-box-mobile-1"</span><span class="token operator">></span>
        Advertisements
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"ad-mobile-1"</span><span class="token operator">></span>

        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token operator">%</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token punctuation">}</span> <span class="token operator">%</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


