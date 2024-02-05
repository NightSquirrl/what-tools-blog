<template><div><h1 id="_1-可变参数" tabindex="-1"><a class="header-anchor" href="#_1-可变参数"><span>1. 可变参数</span></a></h1>
<p>在<strong>JDK1.5</strong>之后，如果我们定义一个方法需要接受多个参数，并且多个参数类型一致，我们可以对其简化.</p>
<p><strong>格式：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>修饰符 返回值类型 方法名(参数类型... 形参名){  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>底层：</strong></p>
<p>​	其实就是一个数组</p>
<p><strong>好处：</strong></p>
<p>​	在传递数据的时候，省的我们自己创建数组并添加元素了，JDK底层帮我们自动创建数组并添加元素了</p>
<p><strong>代码演示:</strong></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChangeArgs</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">2121</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   		<span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   	     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         sum <span class="token operator">+=</span> a<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
   		 <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<p>​	1.一个方法只能有一个可变参数</p>
<p>​	2.如果方法中有多个参数，可变参数要放到最后。</p>
<p><strong>应用场景: Collections</strong></p>
<p>​	在Collections中也提供了添加一些元素方法：</p>
<p>​	<code v-pre>public static &lt;T&gt; boolean addAll(Collection&lt;T&gt; c, T... elements)  </code>:往集合中添加一些元素。</p>
<p><strong>代码演示:</strong></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CollectionsDemo</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//原来写法</span>
      <span class="token comment">//list.add(12);</span>
      <span class="token comment">//list.add(14);</span>
      <span class="token comment">//list.add(15);</span>
      <span class="token comment">//list.add(1000);</span>
      <span class="token comment">//采用工具类 完成 往集合中添加元素  </span>
      <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">,</span> <span class="token number">1</span>，<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-collections类" tabindex="-1"><a class="header-anchor" href="#_2-collections类"><span>2. Collections类</span></a></h1>
<h2 id="_2-1-collections常用功能" tabindex="-1"><a class="header-anchor" href="#_2-1-collections常用功能"><span>2.1 Collections常用功能</span></a></h2>
<ul>
<li>
<p><code v-pre>java.utils.Collections</code>是集合工具类，用来对集合进行操作。</p>
<p>常用方法如下：</p>
</li>
<li>
<p><code v-pre>public static void shuffle(List&lt;?&gt; list) </code>:打乱集合顺序。</p>
</li>
<li>
<p><code v-pre>public static &lt;T&gt; void sort(List&lt;T&gt; list)</code>:将集合中元素按照默认规则排序。</p>
</li>
<li>
<p><code v-pre>public static &lt;T&gt; void sort(List&lt;T&gt; list，Comparator&lt;? super T&gt; )</code>:将集合中元素按照指定规则排序。</p>
</li>
</ul>
<p>代码演示：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CollectionsDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//排序方法 </span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果：
<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的集合按照默认的自然顺序进行了排列，如果想要指定顺序那该怎么办呢？</p>
<h2 id="_2-2-comparator比较器" tabindex="-1"><a class="header-anchor" href="#_2-2-comparator比较器"><span>2.2 Comparator比较器</span></a></h2>
<p>创建一个学生类，存储到ArrayList集合中完成指定排序操作。</p>
<p>Student 类</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token comment">//构造方法</span>
    <span class="token comment">//get/set</span>
 	<span class="token comment">//toString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建四个学生对象 存储到集合中</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"rose"</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"jack"</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  		  <span class="token annotation punctuation">@Override</span>
    		<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Student</span> o1<span class="token punctuation">,</span> <span class="token class-name">Student</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        	<span class="token keyword">return</span> o1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>o2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//以学生的年龄升序</span>
   		 <span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Student</span> student <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token char">'jack'</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token char">'rose'</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token char">'abc'</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-综合练习" tabindex="-1"><a class="header-anchor" href="#_3-综合练习"><span>3. 综合练习</span></a></h1>
<h3 id="练习1-随机点名器" tabindex="-1"><a class="header-anchor" href="#练习1-随机点名器"><span>练习1：随机点名器</span></a></h3>
<p>需求：班级里有N个学生，实现随机点名器</p>
<p>代码实现：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 班级里有N个学生，学生属性:姓名，年龄，性别。
        实现随机点名器。*/</span>


        <span class="token comment">//1.定义集合</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.添加数据</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token string">"范闲"</span><span class="token punctuation">,</span><span class="token string">"范建"</span><span class="token punctuation">,</span><span class="token string">"范统"</span><span class="token punctuation">,</span><span class="token string">"杜子腾"</span><span class="token punctuation">,</span><span class="token string">"杜琦燕"</span><span class="token punctuation">,</span><span class="token string">"宋合泛"</span><span class="token punctuation">,</span><span class="token string">"侯笼藤"</span><span class="token punctuation">,</span><span class="token string">"朱益群"</span><span class="token punctuation">,</span><span class="token string">"朱穆朗玛峰"</span><span class="token punctuation">,</span><span class="token string">"袁明媛"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.随机点名</span>
        <span class="token comment">/* Random r = new Random();
        int index = r.nextInt(list.size());
        String name = list.get(index);
        System.out.println(name);*/</span>

        <span class="token comment">//打乱</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> name <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习2-带概率的随机" tabindex="-1"><a class="header-anchor" href="#练习2-带概率的随机"><span>练习2：带概率的随机</span></a></h3>
<p>需求：</p>
<p>​	班级里有N个学生</p>
<p>​	要求在随机的时候，70%的概率随机到男生，30%的概率随机到女生</p>
<p>代码实现：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 班级里有N个学生
        要求：
        70%的概率随机到男生
        30%的概率随机到女生

        "范闲","范建","范统","杜子腾","宋合泛","侯笼藤","朱益群","朱穆朗玛峰",
        "杜琦燕","袁明媛","李猜","田蜜蜜",
        */</span>
        <span class="token comment">//1.创建集合</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.添加数据</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.打乱集合中的数据</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//4.从list集合中随机抽取0或者1</span>
        <span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//5.创建两个集合分别存储男生和女生的名字</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> boyList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> girlList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>boyList<span class="token punctuation">,</span><span class="token string">"范闲"</span><span class="token punctuation">,</span><span class="token string">"范建"</span><span class="token punctuation">,</span><span class="token string">"范统"</span><span class="token punctuation">,</span><span class="token string">"杜子腾"</span><span class="token punctuation">,</span><span class="token string">"宋合泛"</span><span class="token punctuation">,</span><span class="token string">"侯笼藤"</span><span class="token punctuation">,</span><span class="token string">"朱益群"</span><span class="token punctuation">,</span><span class="token string">"朱穆朗玛峰"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>girlList<span class="token punctuation">,</span><span class="token string">"杜琦燕"</span><span class="token punctuation">,</span><span class="token string">"袁明媛"</span><span class="token punctuation">,</span><span class="token string">"李猜"</span><span class="token punctuation">,</span><span class="token string">"田蜜蜜"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//6.判断此时是从boyList里面抽取还是从girlList里面抽取</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>number <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//boyList</span>
            <span class="token keyword">int</span> boyIndex <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>boyList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> boyList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>boyIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">//girlList</span>
            <span class="token keyword">int</span> girlIndex <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>girlList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> girlList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>girlIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习3-随机不重复" tabindex="-1"><a class="header-anchor" href="#练习3-随机不重复"><span>练习3：随机不重复</span></a></h3>
<p>需求：</p>
<p>​	班级里有N个学生，被点到的学生不会再被点到。但是如果班级中所有的学生都点完了， 需要重新开启第二轮点名。</p>
<p>代码实现：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">/* 班级里有5个学生
        要求：
        被点到的学生不会再被点到。
        但是如果班级中所有的学生都点完了，需要重新开启第二轮点名。*/</span>


        <span class="token comment">//1.定义集合</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.添加数据</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> <span class="token string">"范闲"</span><span class="token punctuation">,</span> <span class="token string">"范建"</span><span class="token punctuation">,</span> <span class="token string">"范统"</span><span class="token punctuation">,</span> <span class="token string">"杜子腾"</span><span class="token punctuation">,</span> <span class="token string">"杜琦燕"</span><span class="token punctuation">,</span> <span class="token string">"宋合泛"</span><span class="token punctuation">,</span> <span class="token string">"侯笼藤"</span><span class="token punctuation">,</span> <span class="token string">"朱益群"</span><span class="token punctuation">,</span> <span class="token string">"朱穆朗玛峰"</span><span class="token punctuation">,</span> <span class="token string">"袁明媛"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建一个临时的集合，用来存已经被点到学生的名字</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//外循环：表示轮数</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"=========第"</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">"轮点名开始了======================"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//3.获取集合的长度</span>
            <span class="token keyword">int</span> count <span class="token operator">=</span> list1<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//4.随机点名</span>
            <span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//内循环：每一轮中随机循环抽取的过程</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> index <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> name <span class="token operator">=</span> list1<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                list2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//此时表示一轮点名结束</span>
            <span class="token comment">//list1 空了 list2 10个学生的名字</span>
            list1<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list2<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="练习4-集合的嵌套" tabindex="-1"><a class="header-anchor" href="#练习4-集合的嵌套"><span>练习4：集合的嵌套</span></a></h2>
<p>需求：</p>
<p>​	定义一个Map集合，键用表示省份名称province，值表示市city，但是市会有多个。</p>
<p>添加完毕后，遍历结果格式如下：</p>
<p>​	江苏省 = 南京市，扬州市，苏州市，无锡市，常州市;</p>
<p><code v-pre>湖北省 = 武汉市，孝感市，十堰市，宜昌市，鄂州市</code></p>
<p><code v-pre>河北省 = 石家庄市，唐山市，邢台市，保定市，张家口市</code></p>
<p>代码实现：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test4</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 需求
        定义一个Map集合，键用表示省份名称province，值表示市city，但是市会有多个。
        添加完毕后，遍历结果格式如下：
                江苏省 = 南京市，扬州市，苏州市，无锡市，常州市
                湖北省 = 武汉市，孝感市，十堰市，宜昌市，鄂州市
                河北省 = 石家庄市，唐山市，邢台市，保定市，张家口市*/</span>


        <span class="token comment">//1.创建Map集合</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> hm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.创建单列集合存储市</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> city1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"南京市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"扬州市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"苏州市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"无锡市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"常州市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> city2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"武汉市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"孝感市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"十堰市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"宜昌市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"鄂州市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> city3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"石家庄市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"唐山市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"邢台市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"保定市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        city3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"张家口市"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3.把省份和多个市添加到map集合</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"江苏省"</span><span class="token punctuation">,</span>city1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"湖北省"</span><span class="token punctuation">,</span>city2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"河北省"</span><span class="token punctuation">,</span>city3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span><span class="token punctuation">></span></span> entries <span class="token operator">=</span> hm<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> entry <span class="token operator">:</span> entries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//entry依次表示每一个键值对对象</span>
            <span class="token class-name">String</span> key <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> value <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">StringJoiner</span> sj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringJoiner</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> city <span class="token operator">:</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">" = "</span> <span class="token operator">+</span> sj<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-斗地主发牌" tabindex="-1"><a class="header-anchor" href="#_4-斗地主发牌"><span>4. 斗地主发牌</span></a></h1>
<h2 id="_4-1-案例介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-案例介绍"><span>4.1 案例介绍</span></a></h2>
<p>按照斗地主的规则，完成洗牌发牌的动作。
具体规则：</p>
<p>使用54张牌打乱顺序,三个玩家参与游戏，三人交替摸牌，每人17张牌，最后三张留作底牌。</p>
<h2 id="_4-2-案例分析" tabindex="-1"><a class="header-anchor" href="#_4-2-案例分析"><span>4.2 案例分析</span></a></h2>
<ul>
<li>
<p>准备牌：</p>
<p><code v-pre>牌可以设计为一个ArrayList&lt;String&gt;,每个字符串为一张牌。</code>
每张牌由花色数字两部分组成，我们可以使用花色集合与数字集合嵌套迭代完成每张牌的组装。
牌由Collections类的shuffle方法进行随机排序。</p>
</li>
<li>
<p>发牌</p>
<p><code v-pre>将每个人以及底牌设计为ArrayList&lt;String&gt;,将最后3张牌直接存放于底牌，剩余牌通过对3取模依次发牌。</code></p>
</li>
<li>
<p>看牌</p>
<p>直接打印每个集合。</p>
</li>
</ul>
<h2 id="_4-3-代码实现" tabindex="-1"><a class="header-anchor" href="#_4-3-代码实现"><span>4.3 代码实现</span></a></h2>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*
        完成控制台版的三步：
          准备牌
          洗牌
          发牌
       */</span>
        <span class="token comment">//从程序的主入口开启斗地主游戏</span>
        <span class="token keyword">new</span> <span class="token class-name">PokerGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PokerGame</span> <span class="token punctuation">{</span>
    <span class="token comment">//牌盒</span>
    <span class="token comment">//♥3 ♣3</span>
    <span class="token keyword">static</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//静态代码块</span>
    <span class="token comment">//特点：随着类的加载而在加载的，而且只执行一次。</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">//准备牌</span>
        <span class="token comment">// "♦", "♣", "♥", "♠"</span>
        <span class="token comment">// "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> color <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"♦"</span><span class="token punctuation">,</span> <span class="token string">"♣"</span><span class="token punctuation">,</span> <span class="token string">"♥"</span><span class="token punctuation">,</span> <span class="token string">"♠"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> number <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"3"</span><span class="token punctuation">,</span> <span class="token string">"4"</span><span class="token punctuation">,</span> <span class="token string">"5"</span><span class="token punctuation">,</span> <span class="token string">"6"</span><span class="token punctuation">,</span> <span class="token string">"7"</span><span class="token punctuation">,</span> <span class="token string">"8"</span><span class="token punctuation">,</span> <span class="token string">"9"</span><span class="token punctuation">,</span> <span class="token string">"10"</span><span class="token punctuation">,</span> <span class="token string">"J"</span><span class="token punctuation">,</span> <span class="token string">"Q"</span><span class="token punctuation">,</span> <span class="token string">"K"</span><span class="token punctuation">,</span> <span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token string">"2"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> c <span class="token operator">:</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//c依次表示每一种花色</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> n <span class="token operator">:</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//n 依次表示每一个数字</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>c <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"小王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"大王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">PokerGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//洗牌</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//发牌</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> lord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> player1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> player2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> player3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//遍历牌盒得到每一张牌</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//i：索引</span>
            <span class="token class-name">String</span> poker <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                lord<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poker<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//给三个玩家轮流发牌</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                player1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poker<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                player2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poker<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                player3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poker<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//看牌</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"底牌"</span><span class="token punctuation">,</span>lord<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"钢脑壳"</span><span class="token punctuation">,</span>player1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"大帅比"</span><span class="token punctuation">,</span>player2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"蛋筒"</span><span class="token punctuation">,</span>player3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">/*
    * 参数一：玩家的名字
    * 参数二：每位玩家的牌
    * */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">": "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> poker <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>poker <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-排序-第一种排序方式" tabindex="-1"><a class="header-anchor" href="#_4-4-排序-第一种排序方式"><span>4.4 排序（第一种排序方式）</span></a></h2>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*
        完成控制台版的四步：
          准备牌
          洗牌
          发牌
          排序

       */</span>

		<span class="token comment">//从程序的主入口开启斗地主游戏</span>
        <span class="token keyword">new</span> <span class="token class-name">PokerGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PokerGame</span> <span class="token punctuation">{</span>
    <span class="token comment">//牌盒 Map</span>
    <span class="token comment">//此时我们只要把牌跟序号产生对应关系就可以了，不需要按照序号进行排序，所以只要HashMap就可以了</span>
    <span class="token keyword">static</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> hm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> color <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"♦"</span><span class="token punctuation">,</span> <span class="token string">"♣"</span><span class="token punctuation">,</span> <span class="token string">"♥"</span><span class="token punctuation">,</span> <span class="token string">"♠"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> number <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"3"</span><span class="token punctuation">,</span> <span class="token string">"4"</span><span class="token punctuation">,</span> <span class="token string">"5"</span><span class="token punctuation">,</span> <span class="token string">"6"</span><span class="token punctuation">,</span> <span class="token string">"7"</span><span class="token punctuation">,</span> <span class="token string">"8"</span><span class="token punctuation">,</span> <span class="token string">"9"</span><span class="token punctuation">,</span> <span class="token string">"10"</span><span class="token punctuation">,</span> <span class="token string">"J"</span><span class="token punctuation">,</span> <span class="token string">"Q"</span><span class="token punctuation">,</span> <span class="token string">"K"</span><span class="token punctuation">,</span> <span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token string">"2"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//序号</span>
        <span class="token keyword">int</span> serialNumber <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//细节</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> n <span class="token operator">:</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//依次表示每一个数字</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> c <span class="token operator">:</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//依次表示每一个花色</span>
                hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">,</span> c <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
                serialNumber<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">,</span> <span class="token string">"小王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
        serialNumber<span class="token operator">++</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">,</span> <span class="token string">"大王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">PokerGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//洗牌</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//发牌</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> lord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> player1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> player2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> player3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//i :依次表示集合中的每一个索引</span>
            <span class="token comment">//list.get(i)元素：牌的序号</span>
            <span class="token keyword">int</span> serialNumber <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                lord<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                player1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                player2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                player3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


        <span class="token comment">//看牌</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"底牌"</span><span class="token punctuation">,</span>lord<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"钢脑壳"</span><span class="token punctuation">,</span>player1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"大帅比"</span><span class="token punctuation">,</span>player2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"蛋筒"</span><span class="token punctuation">,</span>player3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">/*
    * 参数一：玩家的名字
    * 参数二：牌的序号
    * */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> ts<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">": "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历TreeSet集合得到每一个序号，再拿着序号到Map集合中去找真正的牌</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> serialNumber <span class="token operator">:</span> ts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> poker <span class="token operator">=</span> hm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>poker <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-排序-第二种排序方式" tabindex="-1"><a class="header-anchor" href="#_4-5-排序-第二种排序方式"><span>4.5 排序（第二种排序方式）</span></a></h2>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">PokerGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PokerGame</span> <span class="token punctuation">{</span>
    <span class="token comment">//牌盒</span>
    <span class="token keyword">static</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//创建一个集合，用来添加牌的价值</span>
    <span class="token keyword">static</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> hm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">//准备牌</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> color <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"♦"</span><span class="token punctuation">,</span> <span class="token string">"♣"</span><span class="token punctuation">,</span> <span class="token string">"♥"</span><span class="token punctuation">,</span> <span class="token string">"♠"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> number <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"3"</span><span class="token punctuation">,</span> <span class="token string">"4"</span><span class="token punctuation">,</span> <span class="token string">"5"</span><span class="token punctuation">,</span> <span class="token string">"6"</span><span class="token punctuation">,</span> <span class="token string">"7"</span><span class="token punctuation">,</span> <span class="token string">"8"</span><span class="token punctuation">,</span> <span class="token string">"9"</span><span class="token punctuation">,</span> <span class="token string">"10"</span><span class="token punctuation">,</span> <span class="token string">"J"</span><span class="token punctuation">,</span> <span class="token string">"Q"</span><span class="token punctuation">,</span> <span class="token string">"K"</span><span class="token punctuation">,</span> <span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token string">"2"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> c <span class="token operator">:</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> n <span class="token operator">:</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>c <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">" 小王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">" 大王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//指定牌的价值</span>
        <span class="token comment">//牌上的数字到Map集合中判断是否存在</span>
        <span class="token comment">//存在，获取价值</span>
        <span class="token comment">//不存在，本身的数字就是价值</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"J"</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Q"</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"K"</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"小王"</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hm<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"大王"</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">PokerGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//洗牌</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//发牌</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> lord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> player1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> player2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> player3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> poker <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//发底牌</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                lord<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poker<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//给三个玩家轮流发牌</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                player1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poker<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                player2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poker<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                player3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poker<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


        <span class="token comment">//排序</span>
        <span class="token function">order</span><span class="token punctuation">(</span>lord<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">order</span><span class="token punctuation">(</span>player1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">order</span><span class="token punctuation">(</span>player2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">order</span><span class="token punctuation">(</span>player3<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//看牌</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"底牌"</span><span class="token punctuation">,</span>lord<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"钢脑壳"</span><span class="token punctuation">,</span>player1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"大帅比"</span><span class="token punctuation">,</span>player2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token string">"蛋筒"</span><span class="token punctuation">,</span>player3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/*
     * 参数一：玩家的名字
     * 参数二：每位玩家的牌
     * */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lookPoker</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">": "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> poker <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>poker <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


    <span class="token comment">//利用牌的价值进行排序</span>
    <span class="token comment">//参数：集合</span>
    <span class="token comment">//♥5 ♥3 ♥6 ♥7 ♥9</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//Array.sort （插入排序 + 二分查找）</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">String</span> o1<span class="token punctuation">,</span> <span class="token class-name">String</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//o1：表示当前要插入到有序序列中的牌</span>
                <span class="token comment">//o2：表示已经在有序序列中存在的牌</span>

                <span class="token comment">//负数：o1小 插入到前面</span>
                <span class="token comment">//正数：o1大 插入到后面</span>
                <span class="token comment">//0：o1的数字跟o2的数字是一样的，需要按照花色再次排序</span>

                <span class="token comment">//1.计算o1的花色和价值   大王</span>
                <span class="token class-name">String</span> color1 <span class="token operator">=</span> o1<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> value1 <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//2.计算o2的花色和价值</span>
                <span class="token class-name">String</span> color2 <span class="token operator">=</span> o2<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> value2 <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//3.比较o1和o2的价值    ♥3  ♠3</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> value1 <span class="token operator">-</span> value2<span class="token punctuation">;</span>
                <span class="token keyword">return</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> color1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>color2<span class="token punctuation">)</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//计算牌的价值</span>
    <span class="token comment">//参数：牌</span>
    <span class="token comment">//返回值：价值</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">String</span> poker<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//♥3</span>
        <span class="token comment">//获取牌上的数字</span>
        <span class="token class-name">String</span> number <span class="token operator">=</span> poker<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//把这里截取出来的结果，让这个结果再Map集合中存在 “ 大王”</span>
        <span class="token comment">//拿着数字到map集合中判断是否存在</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>hm<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//存在，获取价值</span>
            <span class="token keyword">return</span> hm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">//不存在，类型转换</span>
            <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


