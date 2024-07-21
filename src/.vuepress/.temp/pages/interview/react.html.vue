<template><div><h2 id="_1-hook" tabindex="-1"><a class="header-anchor" href="#_1-hook"><span>1. Hook</span></a></h2>
<h3 id="state-hook" tabindex="-1"><a class="header-anchor" href="#state-hook"><span>State Hook</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ImageGallery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> setIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="context-hook" tabindex="-1"><a class="header-anchor" href="#context-hook"><span>Context Hook</span></a></h3>
<p>全局封装</p>
<p>新建文件GlobalContext.jsx</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 Context 对象</span>
<span class="token keyword">const</span> GlobalContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Mian</span>
<span class="token keyword">function</span> <span class="token function">GlobalContextProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>test<span class="token punctuation">,</span>useTest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> globalState <span class="token operator">=</span> <span class="token punctuation">{</span>
         test
    <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
     <span class="token operator">&lt;</span>GlobalContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>globalState<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>GlobalContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> GlobalContext<span class="token punctuation">,</span> GlobalContextProvider <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在入口文件添加</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 入口文件</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>
<span class="token comment">// 全局状态管理, GlobalContextProvider全局状态发布组件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GlobalContextProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"**/store/GlobalContext"</span><span class="token punctuation">;</span>

<span class="token comment">// 全局路由</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">"xx/route"</span><span class="token punctuation">;</span>
<span class="token comment">// 全局主题组件</span>
<span class="token keyword">import</span> GlobalTheme <span class="token keyword">from</span> <span class="token string">"xx/theme/globalTheme"</span><span class="token punctuation">;</span>


<span class="token comment">// MAIN</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>GlobalContextProvider<span class="token operator">></span>
    <span class="token operator">&lt;</span>GlobalTheme<span class="token operator">></span>
      <span class="token operator">&lt;</span>Router <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>GlobalTheme<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>GlobalContextProvider<span class="token operator">></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用数据</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GlobalContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"**/store/globalContext"</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">TestUseContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span>test<span class="token punctuation">,</span>useTest <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>GlobalContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-hook" tabindex="-1"><a class="header-anchor" href="#ref-hook"><span>Ref Hook</span></a></h3>
<blockquote>
<p>ref 允许组件保存一些不用于渲染的信息，比如 DOM 节点或 timeout ID。与状态不同，更新 ref <mark>不会重新渲染组件</mark>。ref 是从 React 范例中的“脱围机制”。当需要与非 React 系统如浏览器内置 API 一同工作时，ref 将会非常有用。</p>
</blockquote>
<h3 id="effect-hook" tabindex="-1"><a class="header-anchor" href="#effect-hook"><span>Effect Hook</span></a></h3>
<blockquote>
<p>Demo React 18</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[ son1 ] >"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[ son1 no] >"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Son1<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>ctrSon<span class="token punctuation">,</span> setCtrSon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[ Main ] >"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[ Main no] >"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      App
      <span class="token operator">&lt;</span>button
        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setCtrSon</span><span class="token punctuation">(</span><span class="token operator">!</span>ctrSon<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">></span>
        hidden son
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token punctuation">{</span>ctrSon <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>Son1 <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>结果:</p>
<p>首次运行：</p>
<p>Son1</p>
<p>Main</p>
<p>Son1 no</p>
<p>Main no</p>
<ul>
<li></li>
</ul>
<p>隐藏son</p>
<p>son1 no</p>
<p>显示son</p>
<p>son1</p>
</blockquote>
<p>useLayoutEffect</p>
<p>执行时机是在React的提交阶段之后，但在浏览器实际绘制屏幕之前。这使得你可以同步地读取或更改DOM，然后让浏览器在下一次绘制时立即体现这些更改，从而避免不必要的闪烁或布局跳动。</p>
<h3 id="性能-hook" tabindex="-1"><a class="header-anchor" href="#性能-hook"><span>性能 Hook</span></a></h3>
<h4 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo"><span>useMemo</span></a></h4>
<ol>
<li>需要执行的一些计算处理工作，包裹在一个函数中</li>
<li>一个依赖数组</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> allPrimes <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> counter <span class="token operator">&lt;</span> selectedNum<span class="token punctuation">;</span> counter<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPrime</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>selectedNum<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当这个组件第一次被渲染时，React 都会调用这个函数来执行这段计算逻辑，计算所有的质数。无论我们从这个函数中返回什么值，都会分配给 <code v-pre>allPrimes</code> 变量。</p>
<blockquote>
<p>React 会判断你传入的依赖数组，这个数组中的每个变量是否在两次渲染间 <strong>值是否改变了</strong> ，如果发生了改变，就重新执行计算的逻辑去获取一个新的值，否则不重新计算，直接返回上一次计算的值。</p>
<p><strong><code v-pre>useMemo</code> 本质上就像一个小的缓存，而依赖数组就是缓存的失效策略。</strong></p>
</blockquote>
<h4 id="react-memo" tabindex="-1"><a class="header-anchor" href="#react-memo"><span><strong>React.memo</strong></span></a></h4>
<p>包裹着组件保护它不受到无关状态更新的影响</p>
<p>只会在收到新数据或内部状态发生变化时重新渲染</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> TestMemo <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>Test<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback"><span>useCallback</span></a></h4>
<p><code v-pre>useMemo</code> 和 <code v-pre>useCallback</code> 是一个东西，只是将返回值从 <strong>数组/对象</strong> 替换为了 <strong>函数</strong>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...功能相当于:</span>
React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">function</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-非受控组件" tabindex="-1"><a class="header-anchor" href="#_2-非受控组件"><span>2. 非受控组件</span></a></h2>
<blockquote>
<p>可以简单的理解为没有使用react 进行数据的管理，而是直接操作DOM实现数据的更新。</p>
</blockquote>
<h2 id="_3-生命周期" tabindex="-1"><a class="header-anchor" href="#_3-生命周期"><span>3. 生命周期</span></a></h2>
<ul>
<li><strong>组件挂载阶段</strong>：
<ul>
<li><code v-pre>constructor</code> 方法在组件创建时只调用一次，用于设置初始状态。</li>
<li>然后是 <code v-pre>getDerivedStateFromProps</code>，它用于根据当前属性（props）派生出新的 state。</li>
<li>接下来是 <code v-pre>render</code> 方法，它负责输出组件的虚拟DOM结构。</li>
<li>最后，<code v-pre>componentDidMount</code> 方法在组件被插入到DOM后立即调用，这是发起网络请求等操作的理想时机。</li>
</ul>
</li>
<li><strong>组件更新阶段</strong>：
<ul>
<li>当组件的props或state发生改变时进入更新阶段。<code v-pre>getDerivedStateFromProps</code> 再次被调用，如果返回一个新的state，那么将触发更新。</li>
<li><code v-pre>shouldComponentUpdate</code> 可以用来阻止不必要的渲染，通过比较新旧props和state来决定是否需要更新。</li>
<li><code v-pre>render</code> 方法再次运行生成新的虚拟DOM，之后 <code v-pre>getSnapshotBeforeUpdate</code> 可以在DOM更新前获取一些信息。</li>
<li>最后，<code v-pre>componentDidUpdate</code> 在组件完成更新后被调用，通常在这里进行DOM操作或者响应用户交互。</li>
</ul>
</li>
<li><strong>组件卸载阶段</strong>：</li>
<li>当组件从DOM中移除时，会触发 <code v-pre>componentWillUnmount</code> 方法，这是执行必要的清理工作，如取消网络请求、清除定时器等操作的最佳时机。</li>
</ul>
<h2 id="_4-redux" tabindex="-1"><a class="header-anchor" href="#_4-redux"><span>4. Redux</span></a></h2>
<blockquote>
<p>store</p>
<p>​	store.getState();</p>
<p>state</p>
<p>action</p>
<p>dispatch</p>
<p>reducer</p>
</blockquote>
<p>storage</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span>action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token comment">// 很重要</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>
                <span class="token operator">...</span>state
            <span class="token punctuation">]</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> sotre<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"xxx"</span>

<span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


