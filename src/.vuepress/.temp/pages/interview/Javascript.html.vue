<template><div><h2 id="_1-根据下面-es6-构造函数的书写方式-要求写出-es5-的" tabindex="-1"><a class="header-anchor" href="#_1-根据下面-es6-构造函数的书写方式-要求写出-es5-的"><span>1. 根据下面 ES6 构造函数的书写方式，要求写出 ES5 的</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span> 
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Example</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
e<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>参考</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">'use strict'</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">'Class constructor cannot be invoked without new'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Example</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">'init'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token string">'use strict'</span><span class="token punctuation">;</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">'init is not a constructor'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">var</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-数组去重有哪些方法-美团-19-年" tabindex="-1"><a class="header-anchor" href="#_2-数组去重有哪些方法-美团-19-年"><span>2. 数组去重有哪些方法？（美团 19 年）</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数字或字符串数组去重，效率高</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 利用对象属性名的唯一性来保证不重复</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               result<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取对象所有属性名的数组</span>
<span class="token punctuation">}</span>

<span class="token comment">// 任意数组去重，适配范围广，效率低</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 结果数组</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 利用ES6的Set去重，适配范围广，效率一般，书写简单</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-描述下列代码的执行结果" tabindex="-1"><a class="header-anchor" href="#_3-描述下列代码的执行结果"><span>3. 描述下列代码的执行结果</span></a></h2>
<blockquote>
<p>示例代码</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">foo</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">bar</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>参考结果
foo1
foo2
bar1
bar2
foo3
bar3
这个完全是考察的异步的知识。调用 f(1)  的时候，会执行同步代码，打印出 foo1，然后 03 行的 setTimeout 被放入到异步执行队列，接下来调用 f(2)  的时候，打印出 foo2，后面 03 行的 setTimeout 又被放入到异步执行队列。然后执行 07 行的语句，被放入到异步执行队列。至此，所有同步代码就都执行完毕了。
接下来开始执行异步代码，那么大家时间没写，就都是相同的，所以谁先被放入到异步队列，谁就先执行，所以先打印出 bar1、然后是 bar2，接下来执行之前 07 行放入到异步队列里面的 setTimeout，先执行 f 函数里面的同步代码，打印出 foo3，然后是最后一个异步，打印出 bar3</p>
</blockquote>
<h2 id="_4-箭头函数有哪些特点" tabindex="-1"><a class="header-anchor" href="#_4-箭头函数有哪些特点"><span>4. 箭头函数有哪些特点</span></a></h2>
<blockquote>
<p>更简洁的语法，例如</p>
<ul>
<li>只有一个形参就不需要用括号括起来</li>
<li>如果函数体只有一行，就不需要放到一个块中</li>
<li>如果 <em>return</em> 语句是函数体内唯一的语句，就不需要 <em>return</em> 关键字</li>
</ul>
<p>箭头函数没有自己的 <em>this</em>，<em>arguments</em>，<em>super</em></p>
<p>箭头函数 <em>this</em> 只会从自己的作用域链的上一层继承 <em>this</em>。</p>
</blockquote>
<h2 id="_5-说一说类的继承" tabindex="-1"><a class="header-anchor" href="#_5-说一说类的继承"><span>5. 说一说类的继承</span></a></h2>
<blockquote>
<p>继承是面向对象编程中的三大特性之一。</p>
<p><em>JavaScript</em> 中的继承经过不断的发展，从最初的对象冒充慢慢发展到了今天的圣杯模式继承。</p>
<p>其中最需要掌握的就是<strong>伪经典继承</strong>和<strong>圣杯模式</strong>的继承。</p>
<p>很长一段时间，JS 继承使用的都是<strong>组合继承</strong>。这种继承也被称之为伪经典继承，该继承方式综合了原型链和盗用构造函数的方式，将两者的优点集中了起来。</p>
<p>组合继承弥补了之前原型链和盗用构造函数这两种方式各自的不足，是 <em>JavaScript</em> 中使用最多的继承方式。</p>
<p>组合继承最大的问题就是效率问题。最主要就是父类的构造函数始终会被调用两次：一次是在创建子类原型时调用，另一次是在子类构造函数中调用。</p>
<p>本质上，子类原型最终是要包含超类对象的所有实例属性，子类构造函数只要在执行时重写自己的原型就行了。</p>
<p>圣杯模式的继承解决了这一问题，其基本思路就是不通过调用父类构造函数来给子类原型赋值，而是取得父类原型的一个副本，然后将返回的新对象赋值给子类原型。</p>
</blockquote>
<p><a href="/web/Javascript/apply-bind-call">apply call bind 说明</a></p>
<h3 id="_5-1-组合继承" tabindex="-1"><a class="header-anchor" href="#_5-1-组合继承"><span>5.1 组合继承</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 基类</span>
<span class="token keyword">var</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token string">"this is a test"</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">testFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this is a testFunc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类</span>
<span class="token keyword">var</span> <span class="token function-variable function">Student</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> age<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 盗用构造函数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 改变 Student 构造函数的原型对象</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">testStuFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this is a testStuFunc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
<span class="token keyword">var</span> zhangsan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 张三</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 男</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is a test</span>
zhangsan<span class="token punctuation">.</span><span class="token function">testFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is a testFunc</span>
zhangsan<span class="token punctuation">.</span><span class="token function">testStuFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is a testStuFunc</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在上面的例子中，我们使用了组合继承的方式来实现继承，可以看到无论是基类上面的属性和方法，还是子类自己的属性和方法，都得到了很好的实现。</p>
<p>但是在组合继承中存在效率问题，比如在上面的代码中，我们其实调用了两次 <em>Person</em>，产生了两组 <em>name</em> 和 <em>age</em> 属性，一组在原型上，一组在实例上。</p>
<p>也就是说，我们在执行 <em>Student.prototype = new Person( )</em>  的时候，我们是想要 <em>Person</em> 原型上面的方法，属性是不需要的，因为属性之后可以通过 <em>Person.apply(this, [name, age])</em>  拿到，但是当你 <em>new Person( )</em>  的时候，会实例化一个 <em>Person</em> 对象出来，这个对象上面，属性和方法都有。</p>
<p>圣杯模式的继承解决了这一问题，其基本思路就是不通过调用父类构造函数来给子类原型赋值，而是取得父类原型的一个副本，然后将返回的新对象赋值给子类原型。</p>
</blockquote>
<h3 id="_5-2-原型链继承" tabindex="-1"><a class="header-anchor" href="#_5-2-原型链继承"><span>5.2 原型链继承</span></a></h3>
<blockquote>
<p>原型链继承是通过将子对象的原型设置为父对象的实例来实现的。这样，子对象就可以访问父对象原型上的属性和方法。例如：</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Parent'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, I am '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Child'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, I am Child</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-构造函数继承-借用构造函数" tabindex="-1"><a class="header-anchor" href="#_5-3-构造函数继承-借用构造函数"><span>5.3 构造函数继承（借用构造函数）</span></a></h3>
<blockquote>
<p>这种继承方式是通过在子对象的构造函数中调用父对象的构造函数来实现的。这样，子对象就可以获得父对象的属性。例如：</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Parent'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, I am '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父对象的构造函数</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Child'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, I am Child</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-圣杯模式" tabindex="-1"><a class="header-anchor" href="#_5-4-圣杯模式"><span>5.4 圣杯模式</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// target 是子类，origin 是基类</span>
<span class="token comment">// target ---> Student, origin ---> Person</span>
<span class="token keyword">function</span> <span class="token function">inherit</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> origin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 没有任何多余的属性</span>

    <span class="token comment">// origin.prototype === Person.prototype, origin.prototype.constructor === Person 构造函数</span>
    <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> origin<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>

    <span class="token comment">// 假设 new F() 出来的对象叫小 f</span>
    <span class="token comment">// 那么这个 f 的原型对象 === F.prototype === Person.prototype</span>
    <span class="token comment">// 那么 f.constructor === Person.prototype.constructor === Person 的构造函数</span>
    target<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 而 f 这个对象又是 target 对象的原型对象</span>
    <span class="token comment">// 这意味着 target.prototype.constructor === f.constructor</span>
    <span class="token comment">// 所以 target 的 constructor 会指向 Person 构造函数</span>

    <span class="token comment">// 我们要让子类的 constructor 重新指向自己</span>
    <span class="token comment">// 若不修改则会发现 constructor 指向的是父类的构造函数</span>
    target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> target<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 基类</span>
<span class="token keyword">var</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token string">"this is a test"</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">testFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this is a testFunc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 子类</span>
<span class="token keyword">var</span> <span class="token function-variable function">Student</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> age<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">inherit</span><span class="token punctuation">(</span>Student<span class="token punctuation">,</span> Person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用圣杯模式实现继承</span>
<span class="token comment">// 在子类上面添加方法</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">testStuFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this is a testStuFunc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
<span class="token keyword">var</span> zhangsan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 张三</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 男</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">.</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is a test</span>
zhangsan<span class="token punctuation">.</span><span class="token function">testFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is a testFunc</span>
zhangsan<span class="token punctuation">.</span><span class="token function">testStuFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is a testStuFunc</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-new-操作符都做了哪些事" tabindex="-1"><a class="header-anchor" href="#_6-new-操作符都做了哪些事"><span>6. <em>new</em> 操作符都做了哪些事？</span></a></h2>
<blockquote>
<p><em>new</em> 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。</p>
<p><em>new</em> 关键字会进行如下的操作：
步骤 <em>1</em>：创建一个空的简单 <em>JavaScript</em> 对象，即 { } ;
步骤 <em>2</em>：链接该对象到另一个对象（即设置该对象的原型对象）；
步骤 <em>3</em>：将步骤 <em>1</em> 新创建的对象作为 <em>this</em> 的上下文；
步骤 <em>4</em>：如果该函数没有返回对象，则返回 <em>this</em>。</p>
</blockquote>
<h2 id="_7-🤬call、apply、bind-的区别" tabindex="-1"><a class="header-anchor" href="#_7-🤬call、apply、bind-的区别"><span>7. 🤬<em>call、apply、bind</em> 的区别 ？</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>call 和 apply 的功能相同，区别在于传参的方式不一样<span class="token operator">:</span>

<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>  调用一个函数<span class="token punctuation">,</span> 具有一个指定的 <span class="token keyword">this</span> <span class="token function">值和分别地提供的参数</span><span class="token punctuation">(</span>参数的列表<span class="token punctuation">)</span>。
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span>argsArray<span class="token punctuation">]</span><span class="token punctuation">)</span>  调用一个函数，具有一个指定的 <span class="token keyword">this</span> 值，以及作为一个数组（或类数组对象）提供的参数。

bind 和 call<span class="token operator">/</span>apply 有一个很重要的区别，一个函数被 call<span class="token operator">/</span>apply 的时候，会直接调用，但是 bind <span class="token function">会创建一个新函数。当这个新函数被调用时，bind</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>  的第一个参数将作为它运行时的 <span class="token keyword">this</span>，之后的一序列参数将会在传递的实参前传入作为它的参数。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-什么是函数柯里化" tabindex="-1"><a class="header-anchor" href="#_8-什么是函数柯里化"><span>8. 什么是函数柯里化？</span></a></h2>
<p>柯里化（<em>currying</em>）又称部分求值。一个柯里化的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。</p>
<p>举个例子，就是把原本：</p>
<p><em>function(arg1,arg2)</em>  变成 <em>function(arg1)(arg2)</em>
<em>function(arg1,arg2,arg3)</em>  变成 <em>function(arg1)(arg2)(arg3)</em>
<em>function(arg1,arg2,arg3,arg4)</em>  变成 <em>function(arg1)(arg2)(arg3)(arg4)</em></p>
<p>总而言之，就是将：</p>
<p><em>function(arg1,arg2,…,argn)</em>  变成 <em>function(arg1)(arg2)…(argn)</em></p>
<h2 id="_9-promise-all-方法的使用场景-数组中必须每一项都是-promise-对象吗-不是-promise-对象会如何处理" tabindex="-1"><a class="header-anchor" href="#_9-promise-all-方法的使用场景-数组中必须每一项都是-promise-对象吗-不是-promise-对象会如何处理"><span>9.  <em>promise.all</em> 方法的使用场景？数组中必须每一项都是 <em>promise</em> 对象吗？不是 <em>promise</em> 对象会如何处理 ？</span></a></h2>
<p>promise.all(promiseArray）  方法是 <em>promise</em> 对象上的静态方法，该方法的作用是将多个 <em>promise</em> 对象实例包装，生成并返回一个新的 <em>promise</em> 实例。</p>
<p>此方法在集合多个 <em>promise</em> 的返回结果时很有用。</p>
<p>返回值将会按照参数内的 <em>promise</em> 顺序排列，而不是由调用 <em>promise</em> 的完成顺序决定。</p>
<p>promise.all 的特点</p>
<p>接收一个<em>Promise</em>实例的数组或具有<em>Iterator</em>接口的对象</p>
<p>如果元素不是<em>Promise</em>对象，则使用<em>Promise.resolve</em>转成<em>Promise</em>对象</p>
<p>如果全部成功，状态变为<em>resolved</em>，返回值将组成一个数组传给回调</p>
<p>只有有一个失败，状态就变为 <em>rejected</em>，返回值将直接传递给回调 *all( )*的返回值，也是新的 <em>promise</em> 对象</p>
<blockquote>
<p>Demo</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'axios'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> request1 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> request2 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> request3 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>request1<span class="token punctuation">,</span> request2<span class="token punctuation">,</span> request3<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">responses</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data1 <span class="token operator">=</span> responses<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">const</span> data2 <span class="token operator">=</span> responses<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">const</span> data3 <span class="token operator">=</span> responses<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> data3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-🤬this-的指向哪几种" tabindex="-1"><a class="header-anchor" href="#_10-🤬this-的指向哪几种"><span>10. 🤬<em>this</em> 的指向哪几种 ？</span></a></h2>
<p>总结起来，<em>this</em> 的指向规律有如下几条：</p>
<ul>
<li>在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的 <em>this</em> 会被绑定到 <em>undefined</em> 上，在非严格模式下则会被绑定到全局对象 <em>window/global</em> 上。</li>
<li>一般使用 <em>new</em> 方法调用构造函数时，构造函数内的 <em>this</em> 会被绑定到新创建的对象上。</li>
<li>一般通过 <em>call/apply/bind</em> 方法显式调用函数时，函数体内的 <em>this</em> 会被绑定到指定参数的对象上。</li>
<li>一般通过上下文对象调用函数时，函数体内的 <em>this</em> 会被绑定到该对象上。</li>
<li>在箭头函数中，<em>this</em> 的指向是由外层（函数或全局）作用域来决定的。</li>
</ul>
<h2 id="_11-什么是事件监听" tabindex="-1"><a class="header-anchor" href="#_11-什么是事件监听"><span>11. 什么是事件监听</span></a></h2>
<p>关于事件监听，<em>W3C</em> 规范中定义了 <em>3</em> 个事件阶段，依次是捕获阶段、目标阶段、冒泡阶段。</p>
<p><strong>捕获</strong>阶段：在事件对象到达事件目标之前，事件对象必须从 <em>window</em> 经过目标的祖先节点传播到事件目标。 这个阶段被我们称之为捕获阶段。在这个阶段注册的事件监听器在事件到达其目标前必须先处理事件。</p>
<p><strong>目标</strong> 阶段：事件对象到达其事件目标。 这个阶段被我们称为目标阶段。一旦事件对象到达事件目标，该阶段的事件监听器就要对它进行处理。如果一个事件对象类型被标志为不能冒泡。那么对应的事件对象在到达此阶段时就会终止传播。</p>
<p><strong>冒泡</strong> 阶段：事件对象以一个与捕获阶段相反的方向从事件目标传播经过其祖先节点传播到 <em>window</em>。这个阶段被称之为冒泡阶段。在此阶段注册的事件监听器会对相应的冒泡事件进行处理。</p>
<h2 id="_12-let-const-var-的区别-什么是块级作用域-如何用" tabindex="-1"><a class="header-anchor" href="#_12-let-const-var-的区别-什么是块级作用域-如何用"><span>12. <em>let const var</em> 的区别？什么是块级作用域？如何用？</span></a></h2>
<ol>
<li><em>var</em> 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问，有变量提升。</li>
<li><em>let</em> 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明。</li>
<li><em>const</em> 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改，无变量提升，不可以重复声明。</li>
</ol>
<p>最初在 <em>JS</em> 中作用域有：全局作用域、函数作用域。没有块作用域的概念。</p>
<p><em>ES6</em> 中新增了块级作用域。<mark>块作用</mark>域由 { } 包括，<em>if</em> 语句和 <em>for</em> 语句里面的 { } 也属于块作用域。</p>
<p>在以前没有块作用域的时候，在 if 或者 for 循环中声明的变量会泄露成全局变量，其次就是 { } 中的内层变量可能会覆盖外层变量。块级作用域的出现解决了这些问题。</p>
<h2 id="_13-数据类型" tabindex="-1"><a class="header-anchor" href="#_13-数据类型"><span>13. 数据类型</span></a></h2>
<p><strong>基本类型</strong>和<strong>引用数据类型</strong></p>
<p><strong>栈区</strong></p>
<blockquote>
<p><em>NaN</em> 的全称为 <em>Not a Number</em>，表示非数，或者说不是一个数。虽然 NaN 表示非数，但是它却属于 <em>number</em> 类型。</p>
<p><em>NaN</em> 有两个特点：</p>
<ol>
<li>任何涉及 <em>NaN</em> 的操作都会返回 <em>NaN</em></li>
<li><em>NaN</em> 和任何值都不相等，包括它自己本身</li>
</ol>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>string，symbol，number，boolean，<span class="token keyword">undefined</span>，<span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <em>symbol</em> 类型是在 <em>ES6</em> 里面新添加的基本数据类型。</p>
<p>引用数据类型，就只有 <em>1</em> 种：</p>
<p><strong>堆区</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>
object

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-js-的作用域类型" tabindex="-1"><a class="header-anchor" href="#_14-js-的作用域类型"><span>14.  <em>JS</em> 的作用域类型</span></a></h2>
<p>在 <em>JavaScript</em> 里面，作用域一共有 4 种：全局作用域，局部作用域、函数作用域以及 <em>eval</em> 作用域。</p>
<p>**全局作用域：**这个是默认的代码运行环境，一旦代码被载入，引擎最先进入的就是这个环境。</p>
<p>**局部作用域：**当使用 <em>let</em> 或者 <em>const</em> 声明变量时，这些变量在一对花括号中存在局部作用域，只能够在花括号内部进行访问使用。</p>
<p>**函数作用域：**当进入到一个函数的时候，就会产生一个函数作用域。函数作用域里面所声明的变量只在函数中提供访问使用。</p>
<p>**<em>eval</em> 作用域：**当调用 <em>eval( )</em>  函数的时候，就会产生一个 <em>eval</em> 作用域。</p>
<h2 id="_15-判断变量类型" tabindex="-1"><a class="header-anchor" href="#_15-判断变量类型"><span>15. 判断变量类型</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> data<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">"object"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> type
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[object (\S+)]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">'$1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// boolean</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Array</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abc</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// RegExp</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Date</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-defer-与-async-的区别" tabindex="-1"><a class="header-anchor" href="#_16-defer-与-async-的区别"><span>16. <em>defer</em> 与 <em>async</em> 的区别</span></a></h2>
<p><strong>defer （延迟脚本）</strong></p>
<p>告诉浏览器立即下载，但延迟执行。</p>
<p><strong>async（异步脚本）</strong></p>
<p>告诉浏览器立即下载文件。</p>
<p>async 的脚本并不保证按照指定它们的先后顺序执行。</p>
<p><em>async</em> 是立即下载并执行，加载和渲染后续文档元素的过程将和 <em>js</em> 脚本的加载与执行并行进行（异步）</p>
<h2 id="_17-原型与原型链" tabindex="-1"><a class="header-anchor" href="#_17-原型与原型链"><span>17. 原型与原型链</span></a></h2>
<ul>
<li>每个对象都有一个 <code v-pre>__proto__</code> 属性，该属性指向自己的原型对象</li>
<li>每个构造函数都有一个 <code v-pre>prototype</code> 属性，该属性指向实例对象的原型对象</li>
<li>原型对象里的 <code v-pre>constructor</code> 指向构造函数本身</li>
</ul>
<figure><img src="https://www.z4a.net/images/2024/02/21/image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="_18-闭包及应用场景以及闭包缺点" tabindex="-1"><a class="header-anchor" href="#_18-闭包及应用场景以及闭包缺点"><span>18. 闭包及应用场景以及闭包缺点</span></a></h2>
<p>闭包的应用场景：</p>
<ol>
<li>匿名自执行函数</li>
<li>结果缓存</li>
<li>封装</li>
<li>实现类和继承</li>
</ol>
<p>闭包的缺点：</p>
<p>因为闭包的作用域链会引用包含它的函数的活动对象，导致这些活动对象不会被销毁，因此会占用更多的内存。</p>
<h2 id="_19-对象深拷贝与浅拷贝-单独问了-object-assign" tabindex="-1"><a class="header-anchor" href="#_19-对象深拷贝与浅拷贝-单独问了-object-assign"><span>19. 对象深拷贝与浅拷贝，单独问了 <em>Object.assign</em></span></a></h2>
<ul>
<li>
<p><strong>浅拷贝</strong>：只是拷贝了基本类型的数据，而引用类型数据，复制后也是会发生引用，我们把这种拷贝叫做浅拷贝（浅复制）</p>
<p>浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。</p>
</li>
<li>
<p><strong>深拷贝</strong>：在堆中重新分配内存，并且把源对象所有属性都进行新建拷贝，以保证深拷贝的对象的引用图不包含任何原有对象或对象图上的任何对象，拷贝后的对象与原来的对象是完全隔离，互不影响。</p>
</li>
</ul>
<p><em>Object.assign</em> 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。但是 <em>Object.assign</em> 方法进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。</p>
<h2 id="_20-es6-新增哪些东西" tabindex="-1"><a class="header-anchor" href="#_20-es6-新增哪些东西"><span>20. <em>ES6</em> 新增哪些东西？</span></a></h2>
<p>箭头函数</p>
<p>字符串模板</p>
<p>支持模块化（<em>import、export</em>）</p>
<p>类（<em>class、constructor、extends</em>）</p>
<p><em>let、const</em> 关键字</p>
<p>新增一些数组、字符串等内置构造函数方法，例如 <em>Array.from</em>、<em>Array.of</em> 、<em>Math.sign</em>、<em>Math.trunc</em> 等</p>
<p>新增一些语法，例如扩展操作符、解构、函数默认参数等</p>
<p>新增一种基本数据类型 <em>Symbol</em></p>
<p>新增元编程相关，例如 <em>proxy</em>、<em>Reflect</em></p>
<p><em>Set</em> 和 <em>Map</em> 数据结构</p>
<p><em>Promise</em></p>
<p><em>Generator</em> 生成器</p>
<h2 id="_21-weakmap、weakset" tabindex="-1"><a class="header-anchor" href="#_21-weakmap、weakset"><span>21. <em>weakmap、weakset</em></span></a></h2>
<p><em>WeakSet</em> 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。在 <em>WeakSet</em> 的集合中是唯一的</p>
<p>它和 <em>Set</em> 对象的区别有两点:</p>
<ul>
<li>与 <em>Set</em> 相比，<em>WeakSet</em> 只能是<strong>对象的集合</strong>，而不能是任何类型的任意值。</li>
<li><em>WeakSet</em> 持弱引用：集合中对象的引用为弱引用。 如果没有其他的对 <em>WeakSet</em> 中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着 <em>WeakSet</em> 中没有存储当前对象的列表。 正因为这样，<em>WeakSet</em> 是不可枚举的。</li>
</ul>
<p><em>WeakMap</em> 对象也是键值对的集合。它的<strong>键必须是对象类型</strong>，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被 <em>GC</em> 回收掉。<em>WeakMap</em> 提供的接口与 <em>Map</em> 相同。</p>
<p>与 <em>Map</em> 对象不同的是，<em>WeakMap</em> 的键是不可枚举的。不提供列出其键的方法。列表是否存在取决于垃圾回收器的状态，是不可预知的。</p>
<h2 id="_22-数据类型转换" tabindex="-1"><a class="header-anchor" href="#_22-数据类型转换"><span>22. 数据类型转换</span></a></h2>
<p>在 JavaScript 中，可以使用一些内置函数或操作符来进行数据类型的转换。下面是一些常见的数据类型转换方式：</p>
<ol>
<li>
<p>转换为字符串：</p>
<ul>
<li>
<p>使用 <code v-pre>String()</code> 函数将其他数据类型转换为字符串：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为字符串 "123"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 <code v-pre>toString()</code> 方法将数字转换为字符串：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为字符串 "456"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>转换为数值：</p>
<ul>
<li>
<p>使用 <code v-pre>Number()</code> 函数将其他数据类型转换为数值：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为数值 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 <code v-pre>parseInt()</code> 函数将字符串转换为整数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"456"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为整数 456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 <code v-pre>parseFloat()</code> 函数将字符串转换为浮点数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"3.14"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为浮点数 3.14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>转换为布尔值：</p>
<ul>
<li>
<p>使用 <code v-pre>Boolean()</code> 函数将其他数据类型转换为布尔值：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bool <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为布尔值 false</span>

<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bool <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为布尔值 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用逻辑非操作符 <code v-pre>!</code> 进行隐式的布尔转换：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bool <span class="token operator">=</span> <span class="token operator">!</span>num<span class="token punctuation">;</span> <span class="token comment">// 转换为布尔值 true</span>

<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bool <span class="token operator">=</span> <span class="token operator">!</span>str<span class="token punctuation">;</span> <span class="token comment">// 转换为布尔值 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>转换为数组：</p>
<ul>
<li>
<p>使用 <code v-pre>Array.from()</code> 函数将类数组对象或可迭代对象转换为数组：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为数组 ["h", "e", "l", "l", "o"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用拓展运算符 <code v-pre>...</code> 将可迭代对象转换为数组：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 转换为数组 ["w", "o", "r", "l", "d"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
</div></template>


