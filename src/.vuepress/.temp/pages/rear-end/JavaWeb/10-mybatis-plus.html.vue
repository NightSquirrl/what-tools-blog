<template><div><h2 id="_1-入门" tabindex="-1"><a class="header-anchor" href="#_1-入门"><span>1. 入门</span></a></h2>
<h3 id="_1-1-引入mybatisplus的起步依赖" tabindex="-1"><a class="header-anchor" href="#_1-1-引入mybatisplus的起步依赖"><span>1.1 引入MybatisPlus的起步依赖</span></a></h3>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--MybatisPlus--></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-定义mapper" tabindex="-1"><a class="header-anchor" href="#_1-2-定义mapper"><span>1.2 定义Mapper</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-常见注释" tabindex="-1"><a class="header-anchor" href="#_1-3-常见注释"><span>1.3 常见注释</span></a></h3>
<p>MybatisPlus中比较常用的几个注解如下：</p>
<p>@TableName：用来指定表名</p>
<p>@TableId：用来指定表中的主键字段信息</p>
<p>@TableField：用来指定表中的普通字段信息</p>
<blockquote>
<p>IdType枚举：</p>
<p>​	AUTO：数据库自增长</p>
<p>​	INPUT：通过set方法自行输入</p>
<p>​	ASSIGN_ID：分配 ID，接口IdentifierGenerator的方法nextId来生成id，默认实现类为DefaultIdentifierGenerator雪花算法</p>
<p>使用@TableField的常见场景：</p>
<p>​	成员变量名与数据库字段名不一致</p>
<p>​	成员变量名以is开头，且是布尔值</p>
<p>​	成员变量名与数据库关键字冲突</p>
<p>​	成员变量不是数据库字段</p>
</blockquote>
<figure><img src="https://img.picgo.net/2023/11/21/image-2023112117193919037ca944e29689139.png" alt="image-20231121171939190" tabindex="0" loading="lazy"><figcaption>image-20231121171939190</figcaption></figure>
<h3 id="_1-4-常见配置" tabindex="-1"><a class="header-anchor" href="#_1-4-常见配置"><span>1.4 常见配置</span></a></h3>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">mybatis-plus</span><span class="token punctuation">:</span>
<span class="token key attr-name">  type-aliases-package</span><span class="token punctuation">:</span> <span class="token value attr-value">com.itheima.mp.domain.po # 别名扫描包</span>
<span class="token key attr-name">  mapper-locations</span><span class="token punctuation">:</span> <span class="token value attr-value">"classpath*:/mapper/**/*.xml" # Mapper.xml文件地址，默认值</span>
<span class="token key attr-name">  configuration</span><span class="token punctuation">:</span>
<span class="token comment">      # 这个配置会将执行的sql打印出来，在开发或测试的时候可以用</span>
<span class="token key attr-name">     log-impl</span><span class="token punctuation">:</span> <span class="token value attr-value">org.apache.ibatis.logging.stdout.StdOutImpl</span>
<span class="token key attr-name">      map-underscore-to-camel-case</span><span class="token punctuation">:</span> <span class="token value attr-value">true # 是否开启下划线和驼峰的映射 默认是开启的</span>
<span class="token key attr-name">      cache-enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">false # 是否开启二级缓存</span>
<span class="token key attr-name">  global-config</span><span class="token punctuation">:</span>
<span class="token key attr-name">      db-config</span><span class="token punctuation">:</span>
<span class="token key attr-name">        id-type</span><span class="token punctuation">:</span> <span class="token value attr-value">assign_id # id为雪花算法生成</span>
<span class="token key attr-name">        update-strategy</span><span class="token punctuation">:</span> <span class="token value attr-value">not_null # 更新策略：只更新非空字段</span>
<span class="token key attr-name">        logic-delete-field</span><span class="token punctuation">:</span> <span class="token value attr-value">isDelete # 全局逻辑删除的实体字段名(since 3.3.0,配置后可以忽略不配置步骤2)</span>
<span class="token key attr-name">        logic-delete-value</span><span class="token punctuation">:</span> <span class="token value attr-value">1 # 逻辑已删除值(默认为 1)</span>
<span class="token key attr-name">        logic-not-delete-value</span><span class="token punctuation">:</span> <span class="token value attr-value">0 # 逻辑未删除值(默认为 0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-核心" tabindex="-1"><a class="header-anchor" href="#_2-核心"><span>2. 核心</span></a></h2>
<h3 id="_2-1-条件构造器" tabindex="-1"><a class="header-anchor" href="#_2-1-条件构造器"><span>2.1 条件构造器</span></a></h3>
<figure><img src="https://img.picgo.net/2023/11/21/image-20231121173009354456ab5bd720f571b.png" alt="image-20231121173009354" tabindex="0" loading="lazy"><figcaption>image-20231121173009354</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> wrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  	<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">,</span><span class="token string">"username"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span><span class="token string">"o"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">ge</span><span class="token punctuation">(</span><span class="token string">"balance"</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-自定义-sql" tabindex="-1"><a class="header-anchor" href="#_2-2-自定义-sql"><span>2.2 自定义 sql</span></a></h3>
<blockquote>
<p>将id在指定范围的用户（例如1、2、4 ）的余额扣减指定值</p>
</blockquote>
<ol>
<li>基于 Wrapper构建 where 条件</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">></span></span> ids <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">4L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> amount <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token comment">// 1.构建条件</span>
<span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> wrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">in</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.自定义SQL方法调用</span>
userMapper<span class="token punctuation">.</span><span class="token function">updateBalanceByIds</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在mapper方法参数中用Param注解声明wrapper变量名称，必须是ew</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">updateBalanceByIds</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"ew"</span><span class="token punctuation">)</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> wrapper<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"amount"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>自定义SQL，并使用Wrapper条件</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateBalanceByIds<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  UPDATE tb_user SET balance = balance - #{amount} ${ew.customSqlSegment}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_2-3-iservice" tabindex="-1"><a class="header-anchor" href="#_2-3-iservice"><span>2.3 IService</span></a></h3>
<blockquote>
<p>保存</p>
<p>save()</p>
<p>删除</p>
<p>remove()</p>
<p>更新</p>
<p>update()</p>
<p>查</p>
<p>一个</p>
<p>get()</p>
<p>多个</p>
<p>list</p>
<p>数量</p>
<p>count</p>
<p>分页 page</p>
<p>lambda</p>
</blockquote>
<p>使用</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">//接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IUserService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 实现类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserMappler</span><span class="token punctuation">,</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">IUserService</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-自动重填" tabindex="-1"><a class="header-anchor" href="#_2-4-自动重填"><span>2.4 自动重填</span></a></h3>
<blockquote>
<p>实现时间的自动更新:</p>
<p>@TableField(fill = FieldFill.INSERT)</p>
<p>createTime</p>
<p>@TableField(fill = FieldFill.insert_update)</p>
<p>updateTime</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMeteObjectHandler</span> <span class="token keyword">implements</span> <span class="token class-name">MetaObjectHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setFieldValByName</span><span class="token punctuation">(</span><span class="token string">"createTime"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> metaObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setFieldValByName</span><span class="token punctuation">(</span><span class="token string">"updateTime"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> metaObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setFieldValByName</span><span class="token punctuation">(</span><span class="token string">"updateTime"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> metaObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-乐观锁" tabindex="-1"><a class="header-anchor" href="#_2-5-乐观锁"><span>2.5 乐观锁</span></a></h3>
<p>乐观锁的实现方式:</p>
<ul>
<li>取出记录的时候获取当前的 version</li>
<li>更新的时候,带上这个version</li>
<li>执行更新时,set version = new version where version = oldversion</li>
<li>如果 version 不对,就会更新失败</li>
</ul>
<h4 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤"><span>实现步骤</span></a></h4>
<ol>
<li>给数据库添加version 字段,默认值为 1</li>
<li>实体类加对应的字段</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Version</span>
<span class="token keyword">private</span> <span class="token class-name">Integer</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>配置类</p>
<ol>
<li>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableTransactionManagement</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">"com.whattools.usercenter.mapper"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBatisPlusConfig</span> <span class="token punctuation">{</span>
<span class="token comment">//    注册乐观锁插件</span>
<span class="token comment">//    @Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">OptimisticLockerInterceptor</span> <span class="token function">optimisticLockerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">OptimisticLockerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li></li>
</ol>
</li>
</ol>
<h3 id="_2-6-分页插件" tabindex="-1"><a class="header-anchor" href="#_2-6-分页插件"><span>2.6 分页插件</span></a></h3>
<h4 id="添加配置项" tabindex="-1"><a class="header-anchor" href="#添加配置项"><span>添加配置项</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"scan.your.mapper.package"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 添加分页插件
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 完整版本</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//如果配置多个插件,切记分页最后添加</span>
        <span class="token comment">//interceptor.addInnerInterceptor(new PaginationInnerInterceptor()); 如果有多数据源可以不配具体类型 否则都建议配上具体的DbType</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
      
      
      <span class="token comment">// 简化版本</span>
       <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
userMapper<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-逻辑删除" tabindex="-1"><a class="header-anchor" href="#_2-7-逻辑删除"><span>2.7 逻辑删除</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@TableLogic</span>
<span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>mybatis<span class="token operator">-</span>plus<span class="token operator">:</span>
  global<span class="token operator">-</span>config<span class="token operator">:</span>
    db<span class="token operator">-</span>config<span class="token operator">:</span>
      logic<span class="token operator">-</span>delete<span class="token operator">-</span>field<span class="token operator">:</span> flag # 全局逻辑删除的实体字段名<span class="token punctuation">(</span>since <span class="token number">3.3</span><span class="token number">.0</span><span class="token punctuation">,</span>配置后可以忽略不配置步骤<span class="token number">2</span><span class="token punctuation">)</span>
      logic<span class="token operator">-</span>delete<span class="token operator">-</span>value<span class="token operator">:</span> <span class="token number">1</span> # 逻辑已删除值<span class="token punctuation">(</span>默认为 <span class="token number">1</span><span class="token punctuation">)</span>
      logic<span class="token operator">-</span>not<span class="token operator">-</span>delete<span class="token operator">-</span>value<span class="token operator">:</span> <span class="token number">0</span> # 逻辑未删除值<span class="token punctuation">(</span>默认为 <span class="token number">0</span><span class="token punctuation">)</span>
        
        
或者
        
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">ISqlInjector</span> <span class="token function">sqlInjector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LogicSqlInjector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-性能分析插件" tabindex="-1"><a class="header-anchor" href="#_2-8-性能分析插件"><span>2.8 性能分析插件</span></a></h3>
<h4 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1"><span>配置</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"test"</span><span class="token punctuation">,</span><span class="token string">"dev"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">PerformanceInterceptor</span> <span class="token function">performanceInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


