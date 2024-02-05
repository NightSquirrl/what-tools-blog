<template><div><h1 id="universal-js" tabindex="-1"><a class="header-anchor" href="#universal-js"><span>Universal Js</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#%E6%8B%9F%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">拟解决的问题</a></li>
</ul>
<p><a href="#%E8%A7%A3%E5%86%B3%E7%9A%84%E6%96%B9%E5%BC%8F">解决的方式</a></p>
<p><a href="#webpack">webpack</a><br>
<a href="#babel">babel</a></p>
<p><a href="#%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95">项目目录</a></p>
<p><a href="#%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C">项目运行</a></p>
<p><a href="#%E6%A0%B8%E5%BF%83%E4%BE%9D%E8%B5%96">核心依赖</a></p>
<p><a href="#%E5%85%B7%E4%BD%93%E9%85%8D%E7%BD%AE">具体配置</a></p>
<p><a href="#webpackconfigjs">webpack.config.js</a></p>
<p><a href="#babelconfigjs">babel.config.js</a></p>
<p><a href="#babelpolyfill">@babel/polyfill</a></p>
<p><a href="#%E4%BD%BF%E7%94%A8">使用</a></p>
<p><a href="#%E7%BB%93%E6%9E%9C">结果</a></p>
<h2 id="拟解决的问题" tabindex="-1"><a class="header-anchor" href="#拟解决的问题"><span>拟解决的问题</span></a></h2>
<p>ES6语法在一定程度上丰富了JavaScript的语法，但是它所带来的兼容性问题也是之前程序员去思考和烦恼的事情。对于一些低版本、旧版本的浏览器是不支持类似ES6等的高级语法。就会造成当用户使用不支持该语法的浏览器的时候，项目的运行会产生各类的错误：程序卡死、项目无法打开，功能的丢失等。
目的：使js代码兼容ie8浏览器</p>
<h2 id="解决的方式" tabindex="-1"><a class="header-anchor" href="#解决的方式"><span>解决的方式</span></a></h2>
<h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>webpack</span></a></h3>
<p>webpack 是前端项目工程化的解决方案</p>
<p>它提供了前端模块化开发支持，以及代码压缩混淆、处理浏览器端 JavaScript 的兼容性、性能优化等功能</p>
<p>它让程序员把工作重心放在具体功能实现上，提高开发效率和项目可维护性</p>
<h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel"><span>babel</span></a></h3>
<p>Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。</p>
<h2 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录"><span>项目目录</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>
├── <span class="token punctuation">.</span><span class="token operator">/</span>babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js  <span class="token comment">//babel的配置文件夹</span>
├── <span class="token punctuation">.</span><span class="token operator">/</span>dist <span class="token comment">//打包后的生成目录</span>
│   ├── <span class="token punctuation">.</span><span class="token operator">/</span>dist<span class="token operator">/</span>index<span class="token punctuation">.</span>html
│   └── <span class="token punctuation">.</span><span class="token operator">/</span>dist<span class="token operator">/</span>index<span class="token punctuation">.</span>js
├── <span class="token punctuation">.</span><span class="token operator">/</span>index<span class="token punctuation">.</span>html  <span class="token comment">//前端引入js</span>
├── <span class="token punctuation">.</span><span class="token operator">/</span>index<span class="token punctuation">.</span>js    <span class="token comment">//打包的入口文件</span>
├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json
├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">package</span><span class="token punctuation">.</span>json
└── <span class="token punctuation">.</span><span class="token operator">/</span>webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js  <span class="token comment">//webpack的配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目运行" tabindex="-1"><a class="header-anchor" href="#项目运行"><span>项目运行</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token number">1</span><span class="token punctuation">.</span>npm i 安装依赖
<span class="token number">2</span><span class="token punctuation">.</span>webpack自动打包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="核心依赖" tabindex="-1"><a class="header-anchor" href="#核心依赖"><span>核心依赖</span></a></h2>
<table>
<thead>
<tr>
<th>依赖包名</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>webpack</td>
<td>webpack核心库</td>
</tr>
<tr>
<td>webpack-cli</td>
<td>webpack工具</td>
</tr>
<tr>
<td>uglifyjs-webpack-plugin</td>
<td>解决ie下的关键字default的问题</td>
</tr>
<tr>
<td>babel-loader</td>
<td>babel加载依赖</td>
</tr>
<tr>
<td>@babel/preset-env</td>
<td>智能预设</td>
</tr>
<tr>
<td>@babel/polyfill</td>
<td>补充实现api的转换</td>
</tr>
<tr>
<td>@babel/plugin-transform-modules-commonjs</td>
<td>将 ECMAScript 模块转换为CommonJ</td>
</tr>
<tr>
<td>@babel/core</td>
<td>在编译代码过程中核心的库</td>
</tr>
</tbody>
</table>
<h2 id="具体配置" tabindex="-1"><a class="header-anchor" href="#具体配置"><span>具体配置</span></a></h2>
<h3 id="webpack-config-js" tabindex="-1"><a class="header-anchor" href="#webpack-config-js"><span>webpack.config.js</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入html-webpack-plugin"插件</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入uglifyjs-webpack-plugin插件</span>
<span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"uglifyjs-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span> <span class="token comment">// "production" | "development" | "none"  </span>
  <span class="token comment">// Chosen mode tells webpack to use its built-in optimizations accordingly.</span>

  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">uglifyOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">ie8</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 解决ie下的关键字default的问题</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// webpack 开始打包</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./index.js"</span><span class="token punctuation">,</span> <span class="token comment">// string | object | array  // 这里应用程序开始执行</span>

  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// webpack 如何输出结果的相关选项</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
    <span class="token comment">// 所有输出文件的目标路径</span>
    <span class="token comment">// 必须是绝对路径（使用 Node.js 的 path 模块）</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span> <span class="token comment">// string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 关于模块配置</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 模块规则（配置 loader、解析器等选项）</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">//排除node_modoules</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 相对于此目录解析</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">"web"</span><span class="token punctuation">,</span> <span class="token comment">// 枚举  // 包(bundle)应该运行的环境</span>
  <span class="token comment">// 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span>
   <span class="token punctuation">{</span>
      <span class="token comment">// 复制一个模板 html 文件， 并且自动引入打包输出的所有资源</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./index.html'</span><span class="token punctuation">,</span>
      <span class="token comment">/*
      压缩html代码 production环境使用
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComment: true
      }*      
/
    }
  )],
};

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="babel-config-js" tabindex="-1"><a class="header-anchor" href="#babel-config-js"><span>babel.config.js</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
    <span class="token comment">//@babel/preset-env是一个智能预设，它可以将我们的高版本JavaScript代码进行转译根据内置的规则转译</span>
    <span class="token comment">//成为低版本的javascript代码。preset-env内部集成了绝大多数plugin（State > 3）的转译插件，</span>
    <span class="token comment">//它会根据对应的参数进行代码转译。</span>
      <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">//加载babel的插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">"@babel/plugin-transform-modules-commonjs"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>@babel/preset-env不会包含任何低于 Stage 3 的 JavaScript 语法提案。如果需要兼容低于Stage 3阶段的语法则需要额外引入对应的Plugin进行兼容。
需要额外注意的是babel-preset-env仅仅针对语法阶段的转译，比如转译箭头函数，const/let语法。针对一些Api或者Es 6内置模块的polyfill，preset-env是无法进行转译的。</p>
</blockquote>
<h3 id="babel-polyfill" tabindex="-1"><a class="header-anchor" href="#babel-polyfill"><span>@babel/polyfill</span></a></h3>
<blockquote>
<p><code v-pre>babel-prest-env</code>仅仅只会转化最新的<code v-pre>es</code>语法，并不会转化对应的<code v-pre>Api</code>和实例方法,比如说<code v-pre>ES 6</code>中的<code v-pre>Array.from</code>静态方法。<code v-pre>babel</code>是不会转译这个方法的，如果想在低版本浏览器中识别并且运行<code v-pre>Array.from</code>方法达到我们的预期就需要额外引入<code v-pre>polyfill</code>进行在<code v-pre>Array</code>上添加实现这个方法。
 语法层面的转化****<em><strong>完全可以胜任。但是一些内置方法模块，仅仅通过</strong></em> \ <em>的语法转化是无法进行识别转化的，所以就需要一系列类似”垫片“的工具进行补充实现这部分内容的低版本代码实现。这就是所谓的</em> \ <strong>的作用</strong></p>
</blockquote>
<h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4>
<p>index.js的入口文件中引入<code v-pre> import &quot;@babel/polyfill&quot;;</code></p>
<h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果"><span>结果</span></a></h2>
<p>运行<code v-pre>webpack</code>命令</p>
<p>在dist文件夹中就可以看到转换完成之后的代码</p>
</div></template>


