<template><div><h2 id="_1-typescript-中-const-和-readonly-的区别-枚举和常量枚举的区别-接口和类型别名的区别" tabindex="-1"><a class="header-anchor" href="#_1-typescript-中-const-和-readonly-的区别-枚举和常量枚举的区别-接口和类型别名的区别"><span>1. <strong>TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？</strong></span></a></h2>
<p><code v-pre>const 和 readonly</code>: const可以防止变量的值被修改，readonly可以防止<mark>变量的属性</mark>被修改。</p>
<p><code v-pre>普通枚举</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>

<span class="token keyword">let</span> direction<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Up"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>常量枚举</code></p>
<blockquote>
<p>常量枚举与普通枚举的主要区别在于它们的成员在编译时会被内联到使用它们的地方，而不是创建一个包含所有成员的对象。这可以使得生成的 JavaScript 代码更小，运行速度更快。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>

<span class="token keyword">let</span> direction<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错，因为常量枚举不能被赋值给变量</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>interface 和 type 的区别</code></p>
<blockquote>
<p>区别</p>
</blockquote>
<ul>
<li>
<p>接口可以使用 <code v-pre>extends</code> 关键字来继承其他接口，而类型别名不支持继承。</p>
</li>
<li>
<p>可以进行声明合并</p>
<ul>
<li>
<p>当两个或多个同名接口存在于全局作用域时，它们也会被合并为一个接口</p>
</li>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
    property1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
    property2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 合并后的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
    property1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    property2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>当两个或多个同名接口存在于不同的命名空间时，它们会被合并为一个接口</p>
</li>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
    property1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> MyNamespace <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
        property2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 合并后的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
    property1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    property2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li></li>
</ul>
</li>
</ul>
<blockquote>
<p>使用案例</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> employee<span class="token operator">:</span> Employee <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    id<span class="token operator">:</span> <span class="token number">12345</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "{ name: 'John', age: 30, id: 12345 }"</span>


<span class="token comment">// type</span>

<span class="token class-name"><span class="token keyword">type</span></span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token string">'red'</span> <span class="token operator">|</span> <span class="token string">'green'</span> <span class="token operator">|</span> <span class="token string">'blue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> point<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> color<span class="token operator">:</span> Color <span class="token operator">=</span> <span class="token string">'red'</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "{ x: 10, y: 20 }"</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "red"</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-typescript-中-any、never、unknown、null-undefined-和-void-有什么区别" tabindex="-1"><a class="header-anchor" href="#_2-typescript-中-any、never、unknown、null-undefined-和-void-有什么区别"><span>2. <strong>TypeScript 中 any、never、unknown、null &amp; undefined 和 void 有什么区别？</strong></span></a></h2>
<blockquote>
<p><code v-pre>any</code>: 动态的变量类型（失去了类型检查的作用）。
<code v-pre>never</code>: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
<code v-pre>unknown</code>: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型。
<code v-pre>null &amp; undefined</code>: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和  undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
<code v-pre>void</code>: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为void。</p>
</blockquote>
<h2 id="_3-typescript-中-interface-可以给-function-array-class-indexable-做声明吗" tabindex="-1"><a class="header-anchor" href="#_3-typescript-中-interface-可以给-function-array-class-indexable-做声明吗"><span>3. <strong>TypeScript 中 interface 可以给 Function / Array / Class（Indexable）做声明吗？</strong></span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">/* 可以 */</span>
<span class="token comment">// 函数声明</span>
<span class="token keyword">interface</span> <span class="token class-name">Say</span> <span class="token punctuation">{</span>
 <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> viod<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">say</span><span class="token operator">:</span> Say <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter">viod</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// Array 声明</span>
<span class="token keyword">interface</span> <span class="token class-name">NumberArray</span> <span class="token punctuation">{</span> 
 <span class="token punctuation">[</span>index<span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> number<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
<span class="token keyword">let</span> <span class="token literal-property property">fibonacci</span><span class="token operator">:</span> NumberArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// Class 声明</span>
<span class="token keyword">interface</span> <span class="token class-name">PersonalIntl</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> string
 <span class="token function">sayHi</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-声明数组的方法" tabindex="-1"><a class="header-anchor" href="#_4-声明数组的方法"><span>4. 声明数组的方法</span></a></h2>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用数字类型的数组</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用字符串类型的数组</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用布尔类型的数组</span>

<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用数字类型的数组</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用字符串类型的数组</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用布尔类型的数组</span>

<span class="token keyword">interface</span> <span class="token class-name">NumberArray</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> NumberArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用数字类型的数组</span>
<span class="token keyword">interface</span> <span class="token class-name">StringArray</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> StringArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用字符串类型的数组</span>
<span class="token keyword">interface</span> <span class="token class-name">BooleanArray</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> BooleanArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 使用布尔类型的数组</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-typescript-中的-this-和-javascript-中的-this-有什么差异" tabindex="-1"><a class="header-anchor" href="#_5-typescript-中的-this-和-javascript-中的-this-有什么差异"><span>5. <strong>TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？</strong></span></a></h2>
<blockquote>
<ol>
<li>TypeScript：noImplicitThis: true 的情况下，必须去声明 this 的类型，才能在函数或者对象中使用this。</li>
<li>Typescript 中箭头函数的 this 和 ES6 中箭头函数中的 this 是一致的</li>
</ol>
</blockquote>
<h2 id="_6-typescript-如何设计-class-的声明" tabindex="-1"><a class="header-anchor" href="#_6-typescript-如何设计-class-的声明"><span>6. <strong>TypeScript 如何设计 Class 的声明？</strong></span></a></h2>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
   greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
   <span class="token function">constructor</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>greeting <span class="token operator">=</span> message<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token string">"Hello, "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>greeting<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> greeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 在声明类的时候，一般类中都会包含，构造函数、对构造函数中的属性进行类型声明、类中的方法。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-typescript-中如何联合枚举类型的-key" tabindex="-1"><a class="header-anchor" href="#_7-typescript-中如何联合枚举类型的-key"><span>7. <strong>TypeScript 中如何联合枚举类型的 Key?</strong></span></a></h2>
<blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> str <span class="token punctuation">{</span>
   <span class="token constant">A</span><span class="token punctuation">,</span>
   <span class="token constant">B</span><span class="token punctuation">,</span>
   <span class="token constant">C</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">strUnion</span> <span class="token operator">=</span>  <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> str<span class="token punctuation">;</span> <span class="token comment">// 'A' | 'B' | 'C'</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="_8-typescript-中-、-、-、-、-、-等符号的含义" tabindex="-1"><a class="header-anchor" href="#_8-typescript-中-、-、-、-、-、-等符号的含义"><span>8. <em><em>TypeScript 中 ?.、??、!、!.、_、*</em> 等符号的含义？</em>*</span></a></h2>
<blockquote>
<p><code v-pre>?. 可选链</code> 遇到 null 和 undefined 可以立即停止表达式的运行。
<code v-pre>?? 空值合并运算符</code> 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数。
<code v-pre>! 非空断言运算符</code> x! 将从 x 值域中排除 null 和 undefined
<code v-pre>!. </code> 在变量名后添加，可以断言排除undefined和null类型
<code v-pre>_ 数字分割符</code> 分隔符不会改变数值字面量的值，使人更容易读懂数字 .e.g 1_101_324。
<code v-pre>** </code>求幂</p>
</blockquote>
<h2 id="_9-简单介绍一下-typescript-模块的加载机制" tabindex="-1"><a class="header-anchor" href="#_9-简单介绍一下-typescript-模块的加载机制"><span>9. <strong>简单介绍一下 TypeScript 模块的加载机制？</strong></span></a></h2>
<p>假设有一个导入语句 <code v-pre>import { a } from &quot;moduleA&quot;</code>;</p>
<ol>
<li>首先，编译器会尝试定位需要导入的模块文件，通过绝对或者相对的路径查找方式；
<ol>
<li>尝试寻找对应的模块</li>
</ol>
</li>
<li>如果上面的解析失败了，没有查找到对应的模块，编译器会尝试定位一个<code v-pre>外部模块声明</code>（.d.ts）；
<ol>
<li>解析失败 寻找 .d.ts</li>
</ol>
</li>
<li>最后，如果编译器还是不能解析这个模块，则会抛出一个错误 <code v-pre>error TS2307: Cannot find module 'moduleA'.</code></li>
</ol>
<h2 id="_10-简单聊聊你对-typescript-类型兼容性的理解" tabindex="-1"><a class="header-anchor" href="#_10-简单聊聊你对-typescript-类型兼容性的理解"><span>10. <strong>简单聊聊你对 TypeScript 类型兼容性的理解？</strong></span></a></h2>
<p><code v-pre>ts 类型兼容：</code> 当一个类型 Y 可以赋值给另一个类型 X 时， 我们就可以说类型 X 兼容类型 Y。也就是说两者在结构上是一致的，而不一定非得通过 extends 的方式继承而来</p>
<p><code v-pre>接口的兼容性：X = Y </code>只要目标类型 X 中声明的属性变量在源类型 Y 中都存在就是兼容的（ Y 中的类型可以比 X 中的多，但是不能少）</p>
<p><code v-pre>函数的兼容性：X = Y </code> Y 的每个参数必须能在 X 里找到对应类型的参数，参数的名字相同与否无所谓，只看它们的类型</p>
<h2 id="_11-类型的全局声明和局部声明" tabindex="-1"><a class="header-anchor" href="#_11-类型的全局声明和局部声明"><span>11. <strong>类型的全局声明和局部声明</strong></span></a></h2>
<p>如果声明文件内不包含<code v-pre>import、export</code>，那么这个文件声明的类型就会变成全局声明。反之，若是这个文件包含了<code v-pre>import、export</code>，那么这个文件包含的类型声明则会是局部声明，不会影响到全局声明。</p>
<h2 id="_12-declare-declare-global是什么" tabindex="-1"><a class="header-anchor" href="#_12-declare-declare-global是什么"><span>12. <strong>declare，declare global是什么？</strong></span></a></h2>
<blockquote>
<p><code v-pre>declare</code> 是用来定义全局变量、全局函数、全局命名空间、js modules、class等
<code v-pre>declare global</code> 为全局对象 <code v-pre>window</code> 增加新的属性</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> global <span class="token punctuation">{</span> 
   <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span> 
        csrf<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="_13-对-typescript-类中成员的-public、private、protected、readonly-修饰符的理解" tabindex="-1"><a class="header-anchor" href="#_13-对-typescript-类中成员的-public、private、protected、readonly-修饰符的理解"><span>13. <strong>对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解？</strong></span></a></h2>
<p><code v-pre>public</code>: 成员都默认为<code v-pre>public</code>，被此限定符修饰的成员是可以被外部访问；
<code v-pre>private</code>: 被此限定符修饰的成员是只可以被类的内部访问；
<code v-pre>protected</code>: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
<code v-pre>readonly</code>: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。</p>
<h2 id="_14-keyof-和-typeof-关键字的作用" tabindex="-1"><a class="header-anchor" href="#_14-keyof-和-typeof-关键字的作用"><span>14.  <strong>keyof 和 typeof 关键字的作用？</strong></span></a></h2>
<p><code v-pre>keyof 索引类型查询操作符</code> 获取索引类型的属性名，构成联合类型。
<code v-pre>typeof</code> 获取一个变量或对象的类型。</p>
<h2 id="_15-typescript数据类型" tabindex="-1"><a class="header-anchor" href="#_15-typescript数据类型"><span>15. TypeScript数据类型</span></a></h2>
<p><strong>基本类型</strong>：</p>
<blockquote>
<p>number</p>
<p>string</p>
<p>null undefined</p>
<p>symbol</p>
</blockquote>
<p><strong>复合类型</strong></p>
<blockquote>
<p>array</p>
<p>enum</p>
<p>tuple</p>
</blockquote>
<p><strong>对象类型</strong></p>
<blockquote>
<p>object</p>
</blockquote>
</div></template>


