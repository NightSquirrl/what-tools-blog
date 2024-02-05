<template><div><h1 id="readme-frontend" tabindex="-1"><a class="header-anchor" href="#readme-frontend"><span>README-frontend</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li>
<p><a href="#qrcode%E5%89%8D%E7%AB%AF">QRcode→前端</a></p>
<ul>
<li>
<p><a href="#-%E7%89%88%E6%9C%AC%E7%BA%AA%E5%BD%95"> 版本纪录</a></p>
</li>
<li>
<p><a href="#%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E4%B8%8E%E7%8E%AF%E5%A2%83">开发工具与环境</a></p>
</li>
<li>
<p><a href="#%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C">项目运行</a></p>
</li>
<li>
<p><a href="#%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E4%BE%9D%E8%B5%96%E5%8C%85">项目核心依赖包</a></p>
</li>
<li>
<p><a href="#%E9%A1%B9%E7%9B%AE%E8%A7%84%E8%8C%83">项目规范</a></p>
<ul>
<li>
<p><a href="#%E5%91%BD%E5%90%8D%E7%9A%84%E8%A7%84%E5%88%99">命名的规则</a></p>
</li>
<li>
<p><a href="#%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%BB%93%E6%9E%84">项目的结构</a></p>
</li>
<li>
<p><a href="#%E5%B7%A5%E7%A8%8B%E6%96%87%E4%BB%B6%E4%B9%A6%E5%86%99%E6%A0%BC%E5%BC%8F">工程文件书写格式</a></p>
</li>
</ul>
</li>
<li>
<p><a href="#%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E4%BB%8B%E7%BB%8D">项目核心库的介绍</a></p>
<ul>
<li>
<p><a href="#%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%94%9F%E6%88%90%E5%BA%93-react-qrbtf">二维码生成库 react-qrbtf</a></p>
<ul>
<li>
<p><a href="#%E7%9B%B4%E6%8E%A5%E8%B0%83%E7%94%A8%E6%8F%90%E4%BE%9B%E7%9A%84-api">直接调用提供的 API</a></p>
</li>
<li>
<p><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">自定义样式</a></p>
</li>
<li>
<p><a href="#qe-%E7%A0%81%E7%AC%A6%E5%8F%B7%E7%9A%84%E7%BB%93%E6%9E%84">QE 码符号的结构</a></p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="#%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BB%8B%E7%BB%8D">项目核心模块的介绍</a></p>
<ul>
<li>
<p><a href="#%E5%85%A8%E5%B1%80-theme-%E8%AE%BE%E7%BD%AE">全局 Theme 设置</a></p>
<ul>
<li>
<p><a href="#%E8%B0%83%E8%89%B2%E6%9D%BF%E8%AE%BE%E7%BD%AE">调色板设置</a></p>
</li>
<li>
<p><a href="#%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2%E6%96%AD%E7%82%B9%E8%AE%BE%E7%BD%AE">媒体查询断点设置</a></p>
</li>
<li>
<p><a href="#%E5%85%A8%E5%B1%80-font-%E8%AE%BE%E7%BD%AE">全局 Font 设置</a></p>
</li>
<li>
<p><a href="#%E4%BF%AE%E6%94%B9mui%E7%BB%84%E4%BB%B6%E7%9A%84%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F">修改MUI组件的默认样式</a></p>
</li>
<li>
<p><a href="#%E5%85%A8%E5%B1%80-context-%E7%9A%84%E4%BD%BF%E7%94%A8">全局 Context 的使用</a></p>
</li>
<li>
<p><a href="#uselocalstorage">useLocalStorage</a></p>
</li>
<li>
<p><a href="#%E5%B0%86%E7%8A%B6%E6%80%81%E5%AD%98%E5%82%A8%E8%87%B3%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8%E4%B8%AD">将状态存储至本地存储中</a></p>
</li>
<li>
<p><a href="#%E5%B0%86%E7%8A%B6%E6%80%81%E4%BD%BF%E7%94%A8usestate%E5%AD%98%E5%82%A8">将状态使用useState存储</a></p>
</li>
<li>
<p><a href="#%E5%8F%96%E5%87%BA%E6%83%B3%E8%A6%81%E4%BD%BF%E7%94%A8%E7%9A%84%E5%85%A8%E5%B1%80%E7%8A%B6%E6%80%81">取出想要使用的全局状态</a></p>
</li>
</ul>
</li>
<li>
<p><a href="#%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC">页面路由跳转</a></p>
<ul>
<li>
<p><a href="#%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1%E8%A1%A8">配置路由表</a></p>
</li>
<li>
<p><a href="#%E9%80%9A%E8%BF%87%E7%82%B9%E5%87%BB%E5%AE%9E%E7%8E%B0%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC">通过点击实现路由跳转</a></p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="#%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%94%9F%E6%88%90%E6%B5%81%E7%A8%8B">二维码生成流程</a></p>
<ul>
<li>
<p><a href="#%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%94%9F%E6%88%90%E5%BA%93%E7%9A%84%E5%B0%81%E8%A3%85">二维码生成库的封装</a></p>
<ul>
<li>
<p><a href="#codegenerationinterfacejsx">CodeGenerationInterface.jsx</a></p>
</li>
<li>
<p><a href="#%E4%BA%8C%E7%BB%B4%E7%A0%81%E6%A0%B7%E5%BC%8F%E4%B8%8Etype%E7%9A%84%E5%8C%B9%E9%85%8D">二维码样式与type的匹配</a></p>
</li>
<li>
<p><a href="#codelistpointsjsx">CodeListPoints.jsx</a></p>
</li>
<li>
<p><a href="#codelistpointscirclejsx">CodeListPointsCircle.jsx</a></p>
</li>
<li>
<p><a href="#codelistpointsdisturbjsx">CodeListPointsDisturb.jsx</a></p>
</li>
<li>
<p><a href="#codelistpointsdsjjsx">CodeListPointsDSJ.jsx</a></p>
</li>
</ul>
</li>
<li>
<p><a href="#%E5%9F%BA%E6%9C%AC%E7%94%9F%E6%88%90%E7%9A%84%E6%B5%81%E7%A8%8B">基本生成的流程</a></p>
</li>
<li>
<p><a href="#%E6%96%87%E6%9C%AC%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E7%B1%BB%E5%9E%8Bwebsitetextappstore">文本自动生成类型(website、text、appstore)</a></p>
<ul>
<li>
<p><a href="#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%89%8B%E5%8A%A8%E7%94%9F%E6%88%90%E7%B1%BB%E5%9E%8Bmp3pdfimage">文件上传手动生成类型(mp3、pdf、image)</a></p>
</li>
<li>
<p><a href="#%E6%96%87%E6%9C%AC%E6%89%8B%E5%8A%A8%E7%94%9F%E6%88%90%E7%B1%BB%E5%9E%8Bvcardemailwifisms">文本手动生成类型(vcard、eMail、wifi、sms）</a></p>
</li>
<li>
<p><a href="#%E4%BA%8C%E7%BB%B4%E7%A0%81%E5%AD%98%E5%82%A8%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E6%B5%81%E7%A8%8B">二维码存储历史记录流程</a></p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="#ui-%E7%95%8C%E9%9D%A2%E9%9A%BE%E7%82%B9%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88">UI 界面难点实现方案</a></p>
<ul>
<li>
<ul>
<li><a href="#%E9%A6%96%E9%A1%B5%E4%BA%8C%E7%BB%B4%E7%A0%81-tab-%E5%88%87%E6%8D%A2">首页二维码 tab 切换</a></li>
</ul>
</li>
<li>
<p><a href="#%E9%A6%96%E9%A1%B5%E5%8D%8A%E5%9C%86%E5%87%B9%E5%BD%A2%E8%BE%B9%E6%A1%86">首页半圆凹形边框</a></p>
</li>
</ul>
</li>
<li>
<p><a href="#%E5%90%8E%E7%AB%AF%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3">后端接口文档</a></p>
</li>
</ul>
</li>
</ul>
<h1 id="qrcode→前端" tabindex="-1"><a class="header-anchor" href="#qrcode→前端"><span>QRcode→前端</span></a></h1>
<h2 id="版本纪录" tabindex="-1"><a class="header-anchor" href="#版本纪录"><span> 版本纪录</span></a></h2>
<h2 id="开发工具与环境" tabindex="-1"><a class="header-anchor" href="#开发工具与环境"><span>开发工具与环境</span></a></h2>
<ol>
<li>
<p><a href="https://code.visualstudio.com/" title="vscode 编辑器" target="_blank" rel="noopener noreferrer">vscode 编辑器<ExternalLinkIcon/></a></p>
</li>
<li>
<p>node 版本 &gt;= 14.0.0</p>
</li>
<li>
<p>npm 版本 &gt;= 5.6</p>
</li>
<li>
<p>前端框架采用 <a href="https://reactjs.org/" title="React 17" target="_blank" rel="noopener noreferrer">React 17<ExternalLinkIcon/></a></p>
</li>
<li>
<p>UI 组件采用 <a href="https://mui.com/" title="MUI" target="_blank" rel="noopener noreferrer">MUI<ExternalLinkIcon/></a></p>
</li>
</ol>
<h2 id="项目运行" tabindex="-1"><a class="header-anchor" href="#项目运行"><span>项目运行</span></a></h2>
<ol>
<li>
<p>安装项目依赖 npm install</p>
</li>
<li>
<p>开发环境运行 npm start</p>
</li>
<li>
<p>正式环境打包 npm run build</p>
</li>
</ol>
<h2 id="项目核心依赖包" tabindex="-1"><a class="header-anchor" href="#项目核心依赖包"><span>项目核心依赖包</span></a></h2>
<table>
<thead>
<tr>
<th>依赖包名</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>axios</td>
<td>网络请求框架</td>
</tr>
<tr>
<td>ahooks</td>
<td>useResponsive界面相响应式</td>
</tr>
<tr>
<td>react-qrbtf</td>
<td>二维码生成库</td>
</tr>
<tr>
<td>react-router-dom</td>
<td>React路由跳转</td>
</tr>
<tr>
<td>react-color</td>
<td>颜色拾取库</td>
</tr>
<tr>
<td>@emotion/react、@emotion/styled</td>
<td>MUI样式</td>
</tr>
<tr>
<td>@mui/icons-material</td>
<td>MUI图标库</td>
</tr>
</tbody>
</table>
<h2 id="项目规范" tabindex="-1"><a class="header-anchor" href="#项目规范"><span>项目规范</span></a></h2>
<h3 id="命名的规则" tabindex="-1"><a class="header-anchor" href="#命名的规则"><span>命名的规则</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>1. 变量名 小驼峰 例子：qrCodeEmail

2. 方法名 小驼峰 例子：qrCodeEmailRequireData

3. 组件名 大驼峰 例子：History

4. 命名要求尽可能见名知意,可以多个单词拼接组成,命名不用在意长度.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目的结构" tabindex="-1"><a class="header-anchor" href="#项目的结构"><span>项目的结构</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>
├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token constant">README</span><span class="token operator">-</span>frontend<span class="token punctuation">.</span>md  <span class="token comment">//前端项目文档</span>
├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token constant">README</span><span class="token operator">-</span>project<span class="token punctuation">.</span>md  <span class="token comment">//二维码工程文档</span>
├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token constant">README</span><span class="token operator">-</span>version<span class="token operator">-</span>todo<span class="token punctuation">.</span>md 
├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json
├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">package</span><span class="token punctuation">.</span>json  <span class="token comment">//依赖配置包</span>
├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">public</span> <span class="token comment">//项目静态资源存储路径</span>
│   ├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>images
│   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>images<span class="token operator">/</span>icon  <span class="token comment">//svg图片存放</span>
│   │   └── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>images<span class="token operator">/</span>style
│   │       ├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>images<span class="token operator">/</span>style<span class="token operator">/</span>edge  <span class="token comment">//二维码边缘信息svg</span>
│   │       └── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>images<span class="token operator">/</span>style<span class="token operator">/</span>inform  <span class="token comment">//二维码信息点样式svg</span>
│   ├── <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>index<span class="token punctuation">.</span>html
└── <span class="token punctuation">.</span><span class="token operator">/</span>src
    ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>index<span class="token punctuation">.</span>js  <span class="token comment">//项目入口文件</span>
    ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page  <span class="token comment">//存放页面</span>
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>History<span class="token punctuation">.</span>jsx  <span class="token comment">//历史页面入口文件</span>
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>Home<span class="token punctuation">.</span>jsx     <span class="token comment">//主页入口文件</span>
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>Profile      <span class="token comment">//用户信息入口文件</span>
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>Profile<span class="token operator">/</span>Profile<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>Profile<span class="token operator">/</span>ProfilePassword<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>Profile<span class="token operator">/</span>ProfilePlan<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>Profile<span class="token operator">/</span>RenewSubscription<span class="token punctuation">.</span>jsx
    │   │   └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>Profile<span class="token operator">/</span>TryDaysFreeDrawer<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>Subscribe<span class="token punctuation">.</span>jsx <span class="token comment">//订阅入口文件</span>
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab  <span class="token comment">//主页tab标签的封装组件</span>
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>AppStoreComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>EmailComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>ImagesComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>MusicComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>PdfComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>SMSComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>TextComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>VcardComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>WebsiteComponent<span class="token punctuation">.</span>jsx
    │   │   └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>TypeOfTab<span class="token operator">/</span>WifiComponent<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component  <span class="token comment">//各页面组件</span>
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>BeautifyTab<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>Footer<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>ForgetPasswordWeb<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>HistoryBeautifyFrame<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>HistoryBeautifyLogo<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>HistoryBeautifyStyle<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>HistoryDialogs<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>HistoryItem<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>HistoryQrCode<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>Login<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>MyDrawer<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>NavBar<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>Pricing<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>QrCodeGenerationComponent<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>Register<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>SubscribeDialogs<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>SubscribeSelect<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>TabSwitch<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>TabSwitchPad<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>TabSwitchPhone<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>UserHome<span class="token punctuation">.</span>jsx
    │   │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>historyList<span class="token punctuation">.</span>jsx
    │   │   └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>component<span class="token operator">/</span>userAction<span class="token punctuation">.</span>jsx
    │   └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>scanResultPage  <span class="token comment">//扫码结果页</span>
    │       └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>page<span class="token operator">/</span>scanResultPage<span class="token operator">/</span>ScanResultPage<span class="token punctuation">.</span>jsx
    ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>router  <span class="token comment">//路由表</span>
    │   └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>router<span class="token operator">/</span>Router<span class="token punctuation">.</span>jsx
    ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>theme   <span class="token comment">//MUI主题定制</span>
    │   └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>theme<span class="token operator">/</span>GlobalTheme<span class="token punctuation">.</span>jsx
    ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool    <span class="token comment">//生成二维码的组件封装</span>
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>BuiltinDrawIcon<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>CodeGenerationInterface<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>CodeListPoints<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>CodeListPointsCircle<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>CodeListPointsDSJ<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>CodeListPointsDisturb<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>CodeListPointsImages<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>FrameStyle<span class="token punctuation">.</span>jsx
    │   ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>QRRound<span class="token punctuation">.</span>jsx
    │   └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>tool<span class="token operator">/</span>presetLogo<span class="token punctuation">.</span>jsx
    └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils   <span class="token comment">//工具文件</span>
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>FileUploadImages<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>FileUploadMP3<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>FileUploadPDF<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>GlobalContext<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>QrCodeData<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>QrCodeMethod<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>RequireUrl<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>SketchColor<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>SketchColorAnchor<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>dateFormat<span class="token punctuation">.</span>jsx
        ├── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>subFromPayPal<span class="token punctuation">.</span>jsx
        └── <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>utils<span class="token operator">/</span>verifyFormat<span class="token punctuation">.</span>jsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工程文件书写格式" tabindex="-1"><a class="header-anchor" href="#工程文件书写格式"><span>工程文件书写格式</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 文件名</span>
<span class="token comment">// 引入组件</span>
<span class="token keyword">import</span>
<span class="token comment">// 页面公共属性</span>
<span class="token keyword">const</span> publicValue<span class="token operator">=</span><span class="token operator">...</span>
<span class="token comment">// 页面组件</span>
<span class="token keyword">function</span> <span class="token function">ComponentName</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token comment">// 页面主体</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">PageName</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//定义常量</span>
    <span class="token keyword">const</span> value<span class="token operator">=</span><span class="token operator">...</span> <span class="token comment">//一般用于保存引入的方法</span>
    <span class="token comment">//定义变量,一般使用useState</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>stateName<span class="token punctuation">,</span>setStateName<span class="token punctuation">]</span><span class="token operator">=</span>React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span>
    <span class="token comment">//定义方法</span>
    <span class="token keyword">const</span> <span class="token function-variable function">method</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">argment</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
    <span class="token comment">// 页面初始化</span>
    React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听状态值变化</span>
    React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>listenValue<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// 渲染页面</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token constant">JSX</span><span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目核心库的介绍" tabindex="-1"><a class="header-anchor" href="#项目核心库的介绍"><span>项目核心库的介绍</span></a></h2>
<h3 id="二维码生成库-react-qrbtf" tabindex="-1"><a class="header-anchor" href="#二维码生成库-react-qrbtf"><span>二维码生成库 react-qrbtf</span></a></h3>
<h4 id="直接调用提供的-api" tabindex="-1"><a class="header-anchor" href="#直接调用提供的-api"><span>直接调用提供的 API</span></a></h4>
<p>组件类别</p>
<p>1.1 QRNormal</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>信息点显示类型(<code v-pre>&quot;rect&quot;, &quot;round&quot;, &quot;rand&quot;</code>)</td>
<td>&quot;rect&quot;</td>
</tr>
<tr>
<td>size</td>
<td>Number</td>
<td>信息点的大小(缩放)</td>
<td>100</td>
</tr>
<tr>
<td>opacity</td>
<td>Number</td>
<td>信息点的不透明度</td>
<td>100</td>
</tr>
<tr>
<td>posType</td>
<td>String</td>
<td>3 个定位点的显示类型 (<code v-pre>&quot;rect&quot;, &quot;round&quot;, &quot;planet&quot;, &quot;roundRect&quot;</code>)</td>
<td>&quot;rect&quot;</td>
</tr>
<tr>
<td>otherColor</td>
<td>String</td>
<td>信息点的颜色</td>
<td>&quot;#000000“</td>
</tr>
<tr>
<td>posColor</td>
<td>String</td>
<td>3 个定位点的颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image__qRBwY469_.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image__r7jx8HDw8.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_WUgSUIs15l.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1.2 QRRandRect</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_7VS0MvNeh0.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1.3 QRDsj</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
<tr>
<td>scale</td>
<td>Number</td>
<td>信息点的大小(缩放)</td>
<td>70</td>
</tr>
<tr>
<td>crossWidth</td>
<td>Number</td>
<td>叉点的宽度</td>
<td>70</td>
</tr>
<tr>
<td>posWidh</td>
<td>Number</td>
<td>定位点的宽度</td>
<td>90</td>
</tr>
<tr>
<td>posType</td>
<td>String</td>
<td>3 个定位点的显示类型 (<code v-pre>&quot;rect&quot;, &quot;dsj&quot;</code>)</td>
<td>&quot;dsj&quot;</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_lfHHa23pd7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1.4 QR25D</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
<tr>
<td>height</td>
<td>Number</td>
<td>信息点柱体高度</td>
<td>0.5</td>
</tr>
<tr>
<td>posHeight</td>
<td>Number</td>
<td>定位点柱体高度</td>
<td>0.5</td>
</tr>
<tr>
<td>topColor</td>
<td>String</td>
<td>顶部颜色</td>
<td>&quot;#FF7F89&quot;</td>
</tr>
<tr>
<td>leftColor</td>
<td>String</td>
<td>左侧颜色</td>
<td>&quot;#FFD7D9&quot;</td>
</tr>
<tr>
<td>rightColor</td>
<td>String</td>
<td>右侧颜色</td>
<td>&quot;#FFEBF3&quot;</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_04dlIJvqxk.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1.5 QRImage</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>信息点显示类型(<code v-pre>&quot;rect&quot;, &quot;round&quot;, &quot;rand&quot;</code>)</td>
<td>&quot;rect&quot;</td>
</tr>
<tr>
<td>size</td>
<td>Number</td>
<td>信息点的大小(缩放)</td>
<td>100</td>
</tr>
<tr>
<td>opacity</td>
<td>Number</td>
<td>信息点的不透明度</td>
<td>100</td>
</tr>
<tr>
<td>image</td>
<td>String</td>
<td>图片的路径或者 base64</td>
<td></td>
</tr>
<tr>
<td>darkColor</td>
<td>String</td>
<td>深色信息点的颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
<tr>
<td>lightColor</td>
<td>String</td>
<td>浅色信息点的颜色</td>
<td>&quot;#FFFFFF&quot;</td>
</tr>
<tr>
<td>posType</td>
<td>String</td>
<td>3 个定位点的显示类型 (<code v-pre>&quot;rect&quot;, &quot;round&quot;, &quot;planet&quot;</code>)</td>
<td>&quot;rect&quot;</td>
</tr>
<tr>
<td>posColor</td>
<td>String</td>
<td>3 个定位点的颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_Kb_TxECb3_.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1.6 QRResImage</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
<tr>
<td>image</td>
<td>String</td>
<td>图片的路径或者 base64</td>
<td></td>
</tr>
<tr>
<td>contrast</td>
<td>Number</td>
<td>图片对比度调整</td>
<td>0</td>
</tr>
<tr>
<td>exposure</td>
<td>Number</td>
<td>图片曝光度调整</td>
<td>0</td>
</tr>
<tr>
<td>alignType</td>
<td>String</td>
<td>小定位点的类型(<code v-pre>&quot;none&quot;, &quot;white&quot;, &quot;bw&quot;</code>)</td>
<td>&quot;none&quot;</td>
</tr>
<tr>
<td>timingType</td>
<td>String</td>
<td>对齐线的类型(<code v-pre>&quot;none&quot;, &quot;white&quot;, &quot;bw&quot;</code>)</td>
<td>&quot;none&quot;</td>
</tr>
<tr>
<td>otherColor</td>
<td>String</td>
<td>信息点的颜色</td>
<td>&quot;#000000“</td>
</tr>
<tr>
<td>posColor</td>
<td>String</td>
<td>3 个定位点的颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_GXNlAKfTj3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1.7QRBubble</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
<tr>
<td>circleColor</td>
<td>String</td>
<td>圆圈颜色</td>
<td>&quot;#8ED1FC&quot;</td>
</tr>
<tr>
<td>posColor</td>
<td>String</td>
<td>3 个定位点的颜色</td>
<td>&quot;#0693E3&quot;</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_FPVgDuRh4i.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1.8 QRFunc</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
<tr>
<td>funcType</td>
<td>String</td>
<td>干扰函数类型(<code v-pre>&quot;A&quot;, &quot;B&quot;</code>)</td>
<td>&quot;A&quot;</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>信息点显示类型(<code v-pre>&quot;rect&quot;, &quot;round&quot;</code>)</td>
<td>&quot;rect&quot;</td>
</tr>
<tr>
<td>posType</td>
<td>String</td>
<td>3 个定位点的显示类型 (<code v-pre>&quot;rect&quot;, &quot;round&quot;, &quot;planet&quot;, &quot;roundRect&quot;</code>)</td>
<td>&quot;rect&quot;</td>
</tr>
<tr>
<td>otherColor1</td>
<td>String</td>
<td>信息点的颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
<tr>
<td>otherColor2</td>
<td>String</td>
<td>干扰点的颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
<tr>
<td>posColor</td>
<td>String</td>
<td>3 个定位点的颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_5V23WTDEp2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_315OD6s4N3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1.9 QRLine</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数功能</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>二维码原始数据</td>
<td>&quot;<a href="https://qrbtf.com/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a><a href="https://qrbtf.com/" title="https://qrbtf.com" target="_blank" rel="noopener noreferrer">https://qrbtf.com<ExternalLinkIcon/></a>&quot;</td>
</tr>
<tr>
<td>qrcode</td>
<td>QRCode</td>
<td>计算好的二维码点阵信息对象</td>
<td></td>
</tr>
<tr>
<td>level</td>
<td>String</td>
<td>二维码的纠错级别</td>
<td>&quot;M&quot;</td>
</tr>
<tr>
<td>className</td>
<td>String</td>
<td>最外层 Svg 的 Class name</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>styles</td>
<td>Object</td>
<td>组件内部可能用到的所有样式对象</td>
<td>{ svg:</td>
</tr>
<tr>
<td>funcType</td>
<td>String</td>
<td>干扰函数类型(<code v-pre>&quot;A&quot;, &quot;B&quot;</code>)</td>
<td>&quot;A&quot;</td>
</tr>
<tr>
<td>posType</td>
<td>String</td>
<td>3 个定位点的显示类型 (<code v-pre>&quot;rect&quot;, &quot;round&quot;, &quot;planet&quot;, &quot;roundRect&quot;</code>)</td>
<td>&quot;rect&quot;</td>
</tr>
<tr>
<td>posColor</td>
<td>String</td>
<td>3 个定位点的颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
<tr>
<td>direction</td>
<td>String</td>
<td>连线方向(<code v-pre>&quot;left-right&quot;, &quot;up-down&quot;, &quot;h-v&quot;, &quot;loop&quot;, &quot;topLeft-bottomRIght&quot;, &quot;topRight-bottomLeft&quot;, &quot;cross&quot;</code>)</td>
<td>&quot;left-right&quot;</td>
</tr>
<tr>
<td>lineWidth</td>
<td>Number</td>
<td>连线宽度</td>
<td>50</td>
</tr>
<tr>
<td>lineOpacity</td>
<td>Number</td>
<td>连线不透明度</td>
<td>100</td>
</tr>
<tr>
<td>lineColor</td>
<td>String</td>
<td>连线颜色</td>
<td>&quot;#000000&quot;</td>
</tr>
</tbody>
</table>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_upXoJSSEf8.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_XnbkMn4UWD.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>使用范例</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QRNormal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-qrbtf'</span>

<span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>QRNormal value<span class="token operator">=</span><span class="token string">"https://8vs.com"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义样式" tabindex="-1"><a class="header-anchor" href="#自定义样式"><span>自定义样式</span></a></h4>
<p>新建 QRRound.js 文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  defaultViewBox<span class="token punctuation">,</span>
  getTypeTable<span class="token punctuation">,</span>
  QRPointType<span class="token punctuation">,</span>
  RendererWrapper
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-qrbtf'</span>

<span class="token keyword">const</span> <span class="token function-variable function">QRRound</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> qrcode<span class="token punctuation">,</span> className<span class="token punctuation">,</span> styles <span class="token punctuation">}</span> <span class="token operator">=</span> props
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>svg
      className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>svg<span class="token punctuation">}</span>
      width<span class="token operator">=</span><span class="token string">"100%"</span>
      height<span class="token operator">=</span><span class="token string">"100%"</span>
      viewBox<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">defaultViewBox</span><span class="token punctuation">(</span>qrcode<span class="token punctuation">)</span><span class="token punctuation">}</span>
      fill<span class="token operator">=</span><span class="token string">"white"</span>
      xmlns<span class="token operator">=</span><span class="token string">"http://www.w3.org/2000/svg"</span>
      xmlnsXlink<span class="token operator">=</span><span class="token string">"http://www.w3.org/1999/xlink"</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token function">listPoints</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">listPoints</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> qrcode<span class="token punctuation">,</span> size<span class="token punctuation">,</span> dataColor <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  size <span class="token operator">=</span> size <span class="token operator">/</span> <span class="token number">100</span>

  <span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">//行数列数</span>
  <span class="token keyword">const</span> nCount <span class="token operator">=</span> qrcode<span class="token punctuation">.</span><span class="token function">getModuleCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">//各个点位信息</span>
  <span class="token keyword">const</span> typeTable <span class="token operator">=</span> <span class="token function">getTypeTable</span><span class="token punctuation">(</span>qrcode<span class="token punctuation">)</span>
  <span class="token comment">//存储最后的结果 svg</span>
  <span class="token keyword">const</span> pointList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span> nCount<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> y <span class="token operator">&lt;</span> nCount<span class="token punctuation">;</span> y<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 填充的点位信息</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>qrcode<span class="token punctuation">.</span><span class="token function">isDark</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
      <span class="token comment">// 等于1</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>typeTable<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> QRPointType<span class="token punctuation">.</span><span class="token constant">POS_CENTER</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在3个定位点的中心生成同心的圆和环</span>
        pointList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>circle key<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token operator">++</span><span class="token punctuation">}</span> fill<span class="token operator">=</span><span class="token string">"#000000"</span> cx<span class="token operator">=</span><span class="token punctuation">{</span>x <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">}</span> cy<span class="token operator">=</span><span class="token punctuation">{</span>y <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">}</span> r<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1.5</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span>
        pointList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>circle
            key<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token operator">++</span><span class="token punctuation">}</span>
            fill<span class="token operator">=</span><span class="token string">"none"</span>
            strokeWidth<span class="token operator">=</span><span class="token string">"1"</span>
            stroke<span class="token operator">=</span><span class="token string">"#000000"</span>
            cx<span class="token operator">=</span><span class="token punctuation">{</span>x <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">}</span>
            cy<span class="token operator">=</span><span class="token punctuation">{</span>y <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">}</span>
            r<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span>
        <span class="token comment">// 等于3  4  5</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
        typeTable<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> QRPointType<span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span> <span class="token operator">||</span>
        typeTable<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> QRPointType<span class="token punctuation">.</span><span class="token constant">ALIGN_OTHER</span> <span class="token operator">||</span>
        typeTable<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> QRPointType<span class="token punctuation">.</span><span class="token constant">TIMING</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 特殊点使用黑色的圆点</span>
        pointList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>circle
            opacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1.0</span><span class="token punctuation">}</span>
            r<span class="token operator">=</span><span class="token punctuation">{</span>size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">}</span>
            key<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token operator">++</span><span class="token punctuation">}</span>
            fill<span class="token operator">=</span><span class="token string">"#000000"</span>
            cx<span class="token operator">=</span><span class="token punctuation">{</span>x <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">}</span>
            cy<span class="token operator">=</span><span class="token punctuation">{</span>y <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span>
        <span class="token comment">// 等于2</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>typeTable<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">!=</span> QRPointType<span class="token punctuation">.</span><span class="token constant">POS_OTHER</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 其他的信息点使用dataColor色的圆点</span>
        pointList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>circle
            opacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1.0</span><span class="token punctuation">}</span>
            r<span class="token operator">=</span><span class="token punctuation">{</span>size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">}</span>
            key<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token operator">++</span><span class="token punctuation">}</span>
            fill<span class="token operator">=</span><span class="token punctuation">{</span>dataColor<span class="token punctuation">}</span>
            cx<span class="token operator">=</span><span class="token punctuation">{</span>x <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">}</span>
            cy<span class="token operator">=</span><span class="token punctuation">{</span>y <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> pointList
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">RendererWrapper</span><span class="token punctuation">(</span>QRRound<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>QRRound value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'http://www.8vs.com/'</span><span class="token punctuation">}</span> size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span> dataColor<span class="token operator">=</span><span class="token string">"#c95eb7"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数详解</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>二维码中间图标参数
  <span class="token literal-property property">icon</span><span class="token operator">:</span> 图标地址，支持 jpg<span class="token operator">/</span>png<span class="token operator">/</span>svg等，gif动态图没测试过
  <span class="token literal-property property">iconScale</span><span class="token operator">:</span> 图标大小比例，不超过 <span class="token number">0.33</span><span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> 显示的文字
  <span class="token literal-property property">titleSize</span><span class="token operator">:</span> 文字大小<span class="token punctuation">,</span> 默认 12px
  <span class="token literal-property property">titleColor</span><span class="token operator">:</span> 文字颜色<span class="token punctuation">,</span> 默认 黑色
  <span class="token literal-property property">titleAlign</span><span class="token operator">:</span> 文字位置<span class="token punctuation">,</span> 支持 middel<span class="token operator">|</span>bottom

  <span class="token literal-property property">defaultViewBox</span><span class="token operator">:</span> react<span class="token operator">-</span>qrbtf默认对所有生成的二维码的四边有留白，如果您不喜欢，可以自行调整
  <span class="token literal-property property">RendererWrapper</span><span class="token operator">:</span> react<span class="token operator">-</span><span class="token function">qrbtf提供的高阶组件</span><span class="token punctuation">(</span><span class="token constant">HOC</span><span class="token punctuation">)</span>，
  封装了根据value计算qrcode，styles与defaultCSS的合并等等
  <span class="token literal-property property">listPoints</span><span class="token operator">:</span> 实际上只是为了代码的结构性而独立设置出来的函数，
  他根据传入的props来计算并返回一个包含<span class="token operator">&lt;</span>svg<span class="token operator">></span>相关标签的数组用于显示

  <span class="token keyword">const</span> nCount <span class="token operator">=</span> qrcode<span class="token punctuation">.</span><span class="token function">getModuleCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//nCount就是计算出来的二维码的模块大小</span>
  <span class="token comment">//getTypeTable对二维码进行逐点分类，返回一个记录了每一点类型的二维数组，</span>
  <span class="token keyword">const</span> typeTable <span class="token operator">=</span> <span class="token function">getTypeTable</span><span class="token punctuation">(</span>qrcode<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//QRPointType是一个对不同点类型的枚举类型(Enum)，</span>
  <span class="token comment">//类型名称可以对应上图 (CENTER后缀代表中心，OTHER后缀代表中心以外四周的点)</span>

  typeTable<span class="token punctuation">.</span><span class="token constant">DATA</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token comment">// 信息点</span>
  typeTable<span class="token punctuation">.</span><span class="token constant">POS_CENTER</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token comment">// 定位中心</span>
  typeTable<span class="token punctuation">.</span><span class="token constant">POS_OTHER</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token comment">// 定位点</span>
  typeTable<span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token comment">// 对齐中心</span>
  typeTable<span class="token punctuation">.</span><span class="token constant">ALIGN_OTHER</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token comment">// 对齐点</span>
  typeTable<span class="token punctuation">.</span><span class="token constant">FORMAT</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token comment">// 格式信息点</span>
  typeTable<span class="token punctuation">.</span><span class="token constant">VERSION</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token comment">// 版本信息点</span>
  typeTable<span class="token punctuation">.</span><span class="token constant">TIMING</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token comment">// 时钟</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="qe-码符号的结构" tabindex="-1"><a class="header-anchor" href="#qe-码符号的结构"><span>QE 码符号的结构</span></a></h4>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_85Ewfb345Q.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="项目核心模块的介绍" tabindex="-1"><a class="header-anchor" href="#项目核心模块的介绍"><span>项目核心模块的介绍</span></a></h2>
<h3 id="全局-theme-设置" tabindex="-1"><a class="header-anchor" href="#全局-theme-设置"><span>全局 Theme 设置</span></a></h3>
<h4 id="调色板设置" tabindex="-1"><a class="header-anchor" href="#调色板设置"><span>调色板设置</span></a></h4>
<figure><img src="https://cdn.jsdelivr.net/gh/NightSquirrl/cloudImages@master/20220516/image_U1nqIqml4m.webp" alt="imageU1nqIqml4m" tabindex="0" loading="lazy"><figcaption>image_U1nqIqml4m</figcaption></figure>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">palette</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 默认主题颜色(按钮)</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">"rgba(6, 161, 58, 1)"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 次要主题颜色(输入框)</span>
    <span class="token literal-property property">secondary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">"#85bd8d"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="媒体查询断点设置" tabindex="-1"><a class="header-anchor" href="#媒体查询断点设置"><span>媒体查询断点设置</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 媒体查询断点</span>
  <span class="token literal-property property">breakpoints</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 断点值(屏幕宽度)</span>
    <span class="token literal-property property">values</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">xs</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sm</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
      <span class="token literal-property property">md</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lg</span><span class="token operator">:</span> <span class="token number">1200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">xl</span><span class="token operator">:</span> <span class="token number">1536</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局-font-设置" tabindex="-1"><a class="header-anchor" href="#全局-font-设置"><span>全局 Font 设置</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 文字铸排</span>
  <span class="token literal-property property">typography</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 文字变体(variant)</span>
    <span class="token comment">// 全局默认字体大小16px(1rem=16px)</span>
    <span class="token comment">// 标题</span>
    <span class="token literal-property property">h1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 默认字体大小</span>
      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"5.125rem"</span><span class="token punctuation">,</span> <span class="token comment">//82px</span>
      <span class="token comment">// 默认行高</span>
      <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">"6.4375rem"</span><span class="token punctuation">,</span>
      <span class="token comment">// 默认字重</span>
      <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">h2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"2.875rem"</span><span class="token punctuation">,</span> <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">"3.625rem"</span><span class="token punctuation">,</span> <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span> 
      <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">"Quicksand-Bold, Quicksand"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"@media (max-width:600px)"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"1.25rem"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">"1.5rem"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//46px  24 pxpricing 标题</span>
    <span class="token literal-property property">h3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">"Quicksand-Bold, Quicksand"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"1.5rem"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">"3.625rem"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span>
      <span class="token string-property property">"@media (max-width:600px)"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"1.875rem"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//登录，注册标题  24px</span>
    <span class="token literal-property property">h4</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"1.125rem"</span><span class="token punctuation">,</span> <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">"1.5rem"</span><span class="token punctuation">,</span> <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">"Quicksand-Bold, Quicksand"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#2A2A2A"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//18px Narbar导航标签</span>
    <span class="token literal-property property">h5</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span> <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">"1.25rem"</span><span class="token punctuation">,</span> <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">"Quicksand-Bold, Quicksand"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#2A2A2A"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token comment">//16px 页脚顶部字体样式 solution</span>
    <span class="token literal-property property">h6</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span> <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">"1.25rem"</span><span class="token punctuation">,</span> <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> 
      <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">"Quicksand-Medium, Quicksand"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#2A2A2A"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"@media (max-width:600px)"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"0.75rem"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//16px 页脚顶部其他字体样式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改mui组件的默认样式" tabindex="-1"><a class="header-anchor" href="#修改mui组件的默认样式"><span>修改MUI组件的默认样式</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件名称 修改MUI Input输入框的样式</span>
    <span class="token literal-property property">MuiInput</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">styleOverrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插槽名称</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//修改MUI单选按钮的样式，按钮的大小</span>
    <span class="token literal-property property">MuiFormControlLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">styleOverrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"0.875rem"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">"1.125rem"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//修改Input输入框label的样式</span>
    <span class="token literal-property property">MuiInputLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">styleOverrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局-context-的使用" tabindex="-1"><a class="header-anchor" href="#全局-context-的使用"><span>全局 Context 的使用</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//引入createContext，以及useState</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">// 创建Context对象</span>

<span class="token keyword">const</span> GlobalContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//定义provide函数</span>

<span class="token keyword">function</span> <span class="token function">GlobalContextProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">//将所有要共享的状态保存至</span>

<span class="token comment">// 保存全局状态</span>

<span class="token keyword">const</span> globalState <span class="token operator">=</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 发布全局状态</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Fragment<span class="token operator">></span>
<span class="token operator">&lt;</span>GlobalContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>globalState<span class="token punctuation">}</span><span class="token operator">></span>
<span class="token punctuation">{</span>children<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>GlobalContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>Fragment<span class="token operator">></span>
<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//将provide以及全局状态暴露出去</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> GlobalContext<span class="token punctuation">,</span> GlobalContextProvider <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="uselocalstorage" tabindex="-1"><a class="header-anchor" href="#uselocalstorage"><span>useLocalStorage</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//对localStorage的封装</span>
<span class="token comment">// LocalStorage状态管理方法</span>
<span class="token keyword">function</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> initialValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// State to store our value</span>
  <span class="token comment">// Pass initial state function to useState so logic is only executed once</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>storedValue<span class="token punctuation">,</span> setStoredValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">===</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> initialValue
    <span class="token punctuation">}</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// Get from local storage by key</span>
      <span class="token keyword">const</span> item <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      <span class="token comment">// Parse stored json or if none return initialValue</span>
      <span class="token keyword">return</span> item <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">:</span> initialValue
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If error also return initialValue</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token keyword">return</span> initialValue
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// Return a wrapped version of useState's setter function that ...</span>
  <span class="token comment">// ... persists the new value to localStorage.</span>
  <span class="token keyword">const</span> <span class="token function-variable function">setValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// Allow value to be a function so we have same API as useState</span>
      <span class="token keyword">const</span> valueToStore <span class="token operator">=</span>
        value <span class="token keyword">instanceof</span> <span class="token class-name">Function</span> <span class="token operator">?</span> <span class="token function">value</span><span class="token punctuation">(</span>storedValue<span class="token punctuation">)</span> <span class="token operator">:</span> value
      <span class="token comment">// Save state</span>
      <span class="token function">setStoredValue</span><span class="token punctuation">(</span>valueToStore<span class="token punctuation">)</span>
      <span class="token comment">// Save to local storage</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>valueToStore<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// A more advanced implementation would handle the error case</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>storedValue<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="将状态存储至本地存储中" tabindex="-1"><a class="header-anchor" href="#将状态存储至本地存储中"><span>将状态存储至本地存储中</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token punctuation">[</span>xxx<span class="token punctuation">,</span> setXxx<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token string">"本地存储的名称"</span><span class="token punctuation">,</span> 对应的值<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//该方法除了全局可以取到，并且会将对应的值保存至本地存储中</span>
  <span class="token comment">//本地存储 关闭当前tab甚至于在关闭浏览器时候数据依旧会保存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="将状态使用usestate存储" tabindex="-1"><a class="header-anchor" href="#将状态使用usestate存储"><span>将状态使用useState存储</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>xxx<span class="token punctuation">,</span> setXxx<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span>对应的初试值<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取出想要使用的全局状态" tabindex="-1"><a class="header-anchor" href="#取出想要使用的全局状态"><span>取出想要使用的全局状态</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//引入全局的状态</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GlobalContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../utils/GlobalContext'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token comment">//取出想要使用的状态</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>GlobalContext<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面路由跳转" tabindex="-1"><a class="header-anchor" href="#页面路由跳转"><span>页面路由跳转</span></a></h3>
<h4 id="配置路由表" tabindex="-1"><a class="header-anchor" href="#配置路由表"><span>配置路由表</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 全局路由管理文件</span>
<span class="token comment">// REACT</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token comment">// ROUTER</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>BrowserRouter<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> Route<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"../page/Home"</span><span class="token punctuation">;</span>



<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span>
            <span class="token punctuation">{</span><span class="token comment">/* 路由模式 */</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token comment">/* 主页 */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
                <span class="token comment">//为没有配置的路由添加匹配页面</span>
                <span class="token operator">&lt;</span>Route
                    path<span class="token operator">=</span><span class="token string">"*"</span>
                    element<span class="token operator">=</span><span class="token punctuation">{</span>
                        <span class="token operator">&lt;</span>main style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>p<span class="token operator">></span>There's nothing here<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
                    <span class="token punctuation">}</span>
                <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//在入口文件index.jsx 配置路由站位</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">'./router/Router'</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>GlobalContextProvider<span class="token operator">></span>
      <span class="token operator">&lt;</span>GlobalTheme<span class="token operator">></span>
        <span class="token operator">&lt;</span>Router <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>GlobalTheme<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>GlobalContextProvider<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通过点击实现路由跳转" tabindex="-1"><a class="header-anchor" href="#通过点击实现路由跳转"><span>通过点击实现路由跳转</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//从路由表依赖中引入useNavgite</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>
<span class="token comment">// 路由导航</span>
<span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> <span class="token function">navgiate</span><span class="token punctuation">(</span><span class="token operator">/</span>想要去的路由<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二维码生成流程" tabindex="-1"><a class="header-anchor" href="#二维码生成流程"><span>二维码生成流程</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//全局定义</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>qrcodeGenerator<span class="token punctuation">,</span> setQrcodeGenerator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token comment">//存储生成二维码的字符串</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维码生成库的封装" tabindex="-1"><a class="header-anchor" href="#二维码生成库的封装"><span>二维码生成库的封装</span></a></h3>
<blockquote>
<p>BuiltinDrawIcon.jsx
CodeGenerationInterface.jsx
CodeListPoints.jsx
CodeListPointsCircle.jsx
CodeListPointsDisturb.jsx
CodeListPointsDSJ.jsx</p>
</blockquote>
<h4 id="codegenerationinterface-jsx" tabindex="-1"><a class="header-anchor" href="#codegenerationinterface-jsx"><span>CodeGenerationInterface.jsx</span></a></h4>
<p>二维码生成界面，需要将二维码的类型、边框、logo的生成在此处进行拼接、并接收父组件传入的二维码信息。</p>
<h4 id="二维码样式与type的匹配" tabindex="-1"><a class="header-anchor" href="#二维码样式与type的匹配"><span>二维码样式与type的匹配</span></a></h4>
<p>0→矩形、1→圆形、2→随机圆、3→左右、4→上下、5→纵横、6→回环、7→左上-右下、8→右上-左下、9→交叉、10→气泡、11→干扰线点、12→干扰线圆、13→DJS</p>
<h4 id="codelistpoints-jsx" tabindex="-1"><a class="header-anchor" href="#codelistpoints-jsx"><span>CodeListPoints.jsx</span></a></h4>
<p>普通二维码类型存储</p>
<p>包含type（0-9）类型的生成</p>
<h4 id="codelistpointscircle-jsx" tabindex="-1"><a class="header-anchor" href="#codelistpointscircle-jsx"><span>CodeListPointsCircle.jsx</span></a></h4>
<p>气泡类型的二维码，存储type=10</p>
<h4 id="codelistpointsdisturb-jsx" tabindex="-1"><a class="header-anchor" href="#codelistpointsdisturb-jsx"><span>CodeListPointsDisturb.jsx</span></a></h4>
<p>包含干扰线的二维码，存储type（11-12）</p>
<h4 id="codelistpointsdsj-jsx" tabindex="-1"><a class="header-anchor" href="#codelistpointsdsj-jsx"><span>CodeListPointsDSJ.jsx</span></a></h4>
<p>DJS手工类型的二维码，存储type=13</p>
<h3 id="基本生成的流程" tabindex="-1"><a class="header-anchor" href="#基本生成的流程"><span>基本生成的流程</span></a></h3>
<ol>
<li>
<p>全局状态定义</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//二维码的value值</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>qrcodeGenerator<span class="token punctuation">,</span> setQrcodeGenerator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token comment">// 颜色数值</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>sketchColor<span class="token punctuation">,</span> setSketchColor<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token string">'sketch_color'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token string">'241'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token string">'112'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">'19'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">'1'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 锚点颜色数值</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>sketchColorAnchor<span class="token punctuation">,</span> setSketchColorAnchor<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span>
  <span class="token string">'sketch_color_Anchor'</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token string">'241'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token string">'112'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">'19'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">'1'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// 定位点样式</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>styleEdgeType<span class="token punctuation">,</span> setStyleEdgeType<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token string">'style_edge_type'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 二维码边框的样式</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>frameStyle<span class="token punctuation">,</span> setFrameStyle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token string">"frame_style"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">//预定义的logo样式状态</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>logoStyle<span class="token punctuation">,</span> setLogoStyle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token string">"logo_style"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">//用户上传的logo状态</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>uploadLogo<span class="token punctuation">,</span> setuploadLogo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span><span class="token string">"upload_logo"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>将二维码value传入</p>
<p>&lt;CodeGenerationInterface value={qrcodeGenerator}/&gt;</p>
</li>
<li>
<p>用户选择自己的二维码的样式</p>
<p>所有的状态值保存至全局</p>
</li>
</ol>
<h3 id="文本自动生成类型-website、text、appstore" tabindex="-1"><a class="header-anchor" href="#文本自动生成类型-website、text、appstore"><span>文本自动生成类型(website、text、appstore)</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//每一个都属于一个多行文本输入框</span>
<span class="token comment">//事件绑定</span>
<span class="token comment">// website多行文本输入框，当输入框改变时生成二维码</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleWebsiteChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//为当前的输入框的value绑定一个特定的状态，防止多个状态共享一个状态产生的干扰</span>
    <span class="token function">setWebsiteValue</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token comment">// 设置二维码的状态</span>
    <span class="token function">setQrcodeGenerator</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token comment">//以为二维码是在前端生成的，当拿到字符串之后生成的时间是立即生成</span>
    <span class="token comment">//为了转移用户的注意力，所以需要一个圆形绿色的进度条，在50毫秒之后触发</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>circularProgress <span class="token operator">===</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token function">setCircularProgress</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setCircularProgress</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//传值 生成二维码</span>
  <span class="token operator">&lt;</span>CodeGenerationInterface value<span class="token operator">=</span><span class="token punctuation">{</span>qrcodeGenerator<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件上传手动生成类型-mp3、pdf、image" tabindex="-1"><a class="header-anchor" href="#文件上传手动生成类型-mp3、pdf、image"><span>文件上传手动生成类型(mp3、pdf、image)</span></a></h4>
<ol>
<li>
<p>通过点击或者和拖拽上传多个或者单个文件</p>
</li>
<li>
<p>将上传的文件列表展示到界面，并且可以点击右上角的按钮移除对应的文件</p>
</li>
<li>
<p>上传成功之后会拿到后台给我们的存储连接地址</p>
</li>
<li>
<p>将存储链接地址传入保存二维码信息的全局状态之中生成相对应的二维码</p>
</li>
<li>
<p>用户点击Generate按钮才会生成二维码</p>
</li>
</ol>
<h4 id="文本手动生成类型-vcard、email、wifi、sms" tabindex="-1"><a class="header-anchor" href="#文本手动生成类型-vcard、email、wifi、sms"><span>文本手动生成类型(vcard、eMail、wifi、sms）</span></a></h4>
<ol>
<li>
<p>数据定义</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//所有的输入框等均使用form表单包括</span>
<span class="token comment">//所有的输入框添加name属性</span>
<span class="token comment">//为form标点添加id</span>
<span class="token comment">//获取form的dom元素</span>
<span class="token keyword">let</span> xxxFrom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>'xxx<span class="token punctuation">)</span>
<span class="token keyword">let</span> xxxFormData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>xxxForm<span class="token punctuation">)</span>
xxxForm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token comment">//获取到输入框对应的数值</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>数据拼接</p>
<p>vcard</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"> BEGIN:VCARD
VERSION:3.0
N:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'lastName'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'firstName'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
FN:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'firstName'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'lastName'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
ORG:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'company'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
TITLE:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'yourJob'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
ADR:;;;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'city'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
  <span class="token string">'state'</span>
<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'zip'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'country'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
TEL;WORK;VOICE:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'phone'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
TEL;CELL:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'mobileNumber'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
TEL;FAX:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'fax'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
EMAIL;WORK;INTERNET:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'mail'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
URL:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vCardFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'web'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
END:VCARD
</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>email</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">MATMSG:TO:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>emailFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'emailAddress'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
SUB:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>emailFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'emailSubject'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
BODY:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>emailFormData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'emailMessage'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>wifi</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">WIFI:T:自定义的数据;S:自定义的数据;P:自定义的数据;H;;</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sms</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SMSTO:自定义数据:自定义数据</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>生成二维码</p>
<p>每一个表单form绑定onChange事件，完成模板字符串的拼接，存储至一个变量中去</p>
<p>当用户点击生成按钮之后调用onChange事件，拿到返回值，将返回值设置为二维码value</p>
</li>
</ol>
<h4 id="二维码存储历史记录流程" tabindex="-1"><a class="header-anchor" href="#二维码存储历史记录流程"><span>二维码存储历史记录流程</span></a></h4>
<ol>
<li>
<p>历史记录生成的原理</p>
<ol>
<li>
<p>Website、vCard、Email、Text、WiFi、App Stores、SMS当用户输入或者点击生成按钮之后会生成一个二维码，但是不会保存到数据库中，当用户选择时间（默认时间一天）然后点击保存之后，会将二维码的信息存储到数据库中
MP3、Images、PDF当用户点击生成按钮之后，就会自动保存（默认一天），而后用户根据自己的意愿保存二维码</p>
</li>
<li>
<p>当数据存入数据库之后，当用点击进入历史按钮之后，便会根据当前用户的id查询数据库中的数据</p>
</li>
</ol>
</li>
<li>
<p>具体实现、</p>
<p>二维码保存→文件路径：page/component/BeautifyTab.jsx</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 网络请求</span>
  <span class="token keyword">const</span> <span class="token function-variable function">saveQrCodeFunction</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断当前用户是否登录</span>
    <span class="token comment">// 初始化二维码的类型</span>
    <span class="token keyword">let</span> codeType <span class="token operator">=</span> <span class="token string">''</span>
    <span class="token comment">// 判断当前保存二维码的类型，根据当前用户选择的tab标签匹配对应的类型</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>qrCodeClassTab<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">'0'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'Website'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'1'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'MP3'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'2'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'Images'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'3'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'PDF'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'4'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'vCard'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'5'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'Email'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'6'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'Text'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'7'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'WiFi'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'8'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'AppStores'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'9'</span><span class="token operator">:</span>
        codeType <span class="token operator">=</span> <span class="token string">'SMS'</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 保存的网络请求</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>saveQrCodeUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">{</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>codeType<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>qrcodeGenerator<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"}</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">code_type</span><span class="token operator">:</span> codeType<span class="token punctuation">,</span>
      <span class="token literal-property property">user_id</span><span class="token operator">:</span> userName<span class="token punctuation">,</span>
      <span class="token literal-property property">expires</span><span class="token operator">:</span> selectedAging
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    如果当前的返回的状态为<span class="token number">3000</span>则成功，在左下角弹出成功的下
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token number">3000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setSaveQrCodeOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setSaveQrCodeOpen</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="ui-界面难点实现方案" tabindex="-1"><a class="header-anchor" href="#ui-界面难点实现方案"><span>UI 界面难点实现方案</span></a></h2>
<h4 id="首页二维码-tab-切换" tabindex="-1"><a class="header-anchor" href="#首页二维码-tab-切换"><span>首页二维码 tab 切换</span></a></h4>
<p>使用MUI中的无样式系统</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//引入MUI的样式系统</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> styled <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mui/system'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TabsUnstyled <span class="token keyword">from</span> <span class="token string">'@mui/base/TabsUnstyled'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TabsListUnstyled <span class="token keyword">from</span> <span class="token string">'@mui/base/TabsListUnstyled'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TabPanelUnstyled <span class="token keyword">from</span> <span class="token string">'@mui/base/TabPanelUnstyled'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TabUnstyled<span class="token punctuation">,</span> <span class="token punctuation">{</span> tabUnstyledClasses <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mui/base/TabUnstyled'</span><span class="token punctuation">;</span>
<span class="token comment">//每一个tab标签的样式封装</span>
<span class="token keyword">const</span> Tab <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>TabUnstyled<span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  color: #000000;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  font-size: 0.875rem;
  background-color: transparent;
  border: none;
  text-align: center;
  border-bottom: 2px solid rgba(6, 161, 58, 1);
  margin: 0px;
  padding: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: center;
  //tab标签选中后的样式
  &amp;.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tabUnstyledClasses<span class="token punctuation">.</span>selected<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> {
  选中之后上、左、右添加绿色边框，下添加白色的边框
    border: 2px solid rgba(6, 161, 58, 1);
    border-bottom: 0px solid #ffffff;
    color: #000000;
  }
</span><span class="token template-punctuation string">`</span></span>
<span class="token comment">// 切换内容体的样式</span>
<span class="token keyword">const</span> TabPanel <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>TabPanelUnstyled<span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  width: 800px;
  font-size: 0.875rem;
  boxSizing: 'border-box',
  //为每一个内容的边框添加绿色的边框
  border: '2px solid rgba(6, 161, 58, 1)',
</span><span class="token template-punctuation string">`</span></span>

<span class="token constant">HTML</span>
<span class="token operator">&lt;</span>TabsUnstyled
  defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">></span>
<span class="token operator">></span>
<span class="token comment">//包裹所有的tab</span>
  <span class="token operator">&lt;</span>TabsList<span class="token operator">></span>
    <span class="token operator">&lt;</span>Tab<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span>Tab<span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Tab<span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span>Tab<span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Tab<span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span>Tab<span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>TabsList<span class="token operator">/</span><span class="token operator">></span>
  <span class="token comment">//tab对应的内容体</span>
  <span class="token operator">&lt;</span>TabPanel<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span>TabPanel<span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>TabPanel<span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span>TabPanel<span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>TabPanel<span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span>TabPanel<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>TabsUnstyled<span class="token operator">/</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="首页半圆凹形边框" tabindex="-1"><a class="header-anchor" href="#首页半圆凹形边框"><span>首页半圆凹形边框</span></a></h4>
<p>方式一</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//tab切换、中间凹陷边框、右侧生成区域采用弹性盒子布局居中</span>
<span class="token comment">//中间定义出一个父亲盒子采用relective布局</span>
<span class="token comment">//内部定义三个平级的盒子</span>
<span class="token number">1.</span>圆形
<span class="token comment">//上边框以及左边框颜色相同、右边框、下边框颜色相同</span>
<span class="token comment">//逆时针旋转45deg</span>
<span class="token comment">//采用绝对布局</span>
   <span class="token operator">&lt;</span>Box
    sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#FAFAFA'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'65px'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'65px'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderTop</span><span class="token operator">:</span> <span class="token string">'2px solid rgba(6, 161, 58, 1)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderLeft</span><span class="token operator">:</span> <span class="token string">'2px solid rgba(6, 161, 58, 1)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderBottom</span><span class="token operator">:</span> <span class="token string">'2px solid rgba(0, 0, 0, 0.06)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderRight</span><span class="token operator">:</span> <span class="token string">'2px solid rgba(0, 0, 0, 0.06)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">'50%'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">' rotateZ(-45deg)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'absolute'</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
  <span class="token number">2.</span>虚线以及灰色圆圈
  <span class="token comment">//使用img图片的形式，同样采用absolute布局</span>
  <span class="token number">3.</span>遮罩条子，负责将一个完整的愿遮罩成两个相对较小的半圆
     <span class="token punctuation">{</span><span class="token comment">/* 遮罩条子 */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Box
  sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#FAFAFA'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'348px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token string">'1'</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">></span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"/images/dottedLine.png"</span> alt<span class="token operator">=</span><span class="token string">""</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二</p>
<blockquote>
<p>上述方法存在色差</p>
</blockquote>
<p>使用svg图生成两侧不同的圆形边框，解决色差</p>
</div></template>


