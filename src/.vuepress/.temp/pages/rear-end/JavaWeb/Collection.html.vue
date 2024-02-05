<template><div><h2 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置"><span>1. 配置</span></a></h2>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token comment">#环境变量</span>
<span class="token key attr-name">springprofiles.active</span> <span class="token punctuation">=</span> <span class="token value attr-value">dev</span>


<span class="token comment">#mysql</span>

<span class="token comment">#驱动类名称</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token comment">#数据库连接的url</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/mybatis</span>
<span class="token comment">#连接数据库的用户名</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token comment">#连接数据库的密码</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">1234</span>


<span class="token comment">#mybatis</span>

<span class="token comment">#指定mybatis输出日志的位置, 输出控制台</span>
<span class="token key attr-name">mybatis.configuration.log-impl</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.ibatis.logging.stdout.StdOutImpl</span>
<span class="token comment"># 开启 mybatis 的驼峰命名</span>
<span class="token key attr-name">mybatis.configuration.map-underscore-to-camel-case</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment">#mybatis-plus</span>



<span class="token comment">#配置单个文件最大上传大小</span>
<span class="token key attr-name">spring.servlet.multipart.max-file-size</span><span class="token punctuation">=</span><span class="token value attr-value">10MB</span>
<span class="token comment">#配置单个请求最大上传大小(一次请求可以上传多个文件)</span>
<span class="token key attr-name">spring.servlet.multipart.max-request-size</span><span class="token punctuation">=</span><span class="token value attr-value">100MB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-lombok" tabindex="-1"><a class="header-anchor" href="#_2-lombok"><span>2. <strong>lombok</strong></span></a></h2>
<p>Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须有但显得很臃肿的Java代码。</p>
<p>通过注解的形式自动生成构造器、getter/setter、equals、hashcode、toString等方法，并可以自动化生成日志变量，简化java开发、提高效率。</p>
<figure><img src="https://img.picgo.net/2023/11/17/image-202311172347023778abf09bb52abba08.png" alt="image-20231117234702377" tabindex="0" loading="lazy"><figcaption>image-20231117234702377</figcaption></figure>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span><strong>使用</strong></span></a></h3>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 在springboot的父工程中，已经集成了lombok并指定了版本号，故当前引入依赖
时不需要指定version --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Short</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Short</span> gender<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> phone<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-mybatisx" tabindex="-1"><a class="header-anchor" href="#_2-mybatisx"><span>2. MybatisX</span></a></h2>
<p>MybatisX是一款基于IDEA的快速开发Mybatis的插件，为效率而生。</p>
<p>MybatisX的安装：</p>
<figure><img src="https://img.picgo.net/2023/11/18/image-2023111800133042623d964eef949c590.png" alt="image-20231118001330426" tabindex="0" loading="lazy"><figcaption>image-20231118001330426</figcaption></figure>
</div></template>


