---
sticky: 2
title: HTML 知识点 
tag:
  - 面试
top: 1
sidebar: true
---

## 1. defer 和 async

defer 和 async 是 script标签的两个属性,用于在不阻塞页面文档解析的前提下,控制脚本的下载和执行.
先了解一下页面的加载和渲染过程
1. 浏览器发送请求,获取 HTM文档开始从上往下解析并构建 DOM
2. 构建 DOM 过程,若遇到外联样式声明和脚本声明,会暂停文档解析,并开始下载样式和文件
3. 样式文件下载完成之后,构建 CSSDOM,脚本文件下载完成之后,解析并执行,再继续解析文档构建 DOM
4. 文档解析完成之后,将 DOM 和 CSSDOM 进行关联映射,最后将视图渲染到浏览器窗口
注意，在上述过程中，脚本文件的下载和执行是和文档解析同步的，即它会阻塞文档的解析，若控制的不好，会影 响用户体验，造成页面卡顿。

因此我们可以在scriptr中声明defer和async这两个属性。

defer:用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。async:HTML5新增属性，用于异步 下载脚本文件，下载完毕立即解释执行代码。

共同点
* 都是异步加载外部脚本文件
* 不会阻塞贡面的解析

区别
* async表示异步加载，表后续文档的加载和渲染与JS脚本加载和执行并行进行，脚本文件一旦加载完成，会立即执 行，我们无法预测每个脚本的下载和执行时间顺序，谁先下载好谁执行。
* defer表示延迟加载，加载后续文档和S脚本加载（仅加载不执行）并行进行，JS脚本的执行需要等待文档所有元 素解析完之后，load和DOMContentLoaded事件之前执行，有顺序而言。

## 2. HTML 语义化

根据内容的结构选择合适的标签
### 2.1 优点
* 增加代码可读性，结构清晰，便于开发和维护
* 对机器友好，文字表现力丰富，有利于SEO。SEO(Search Engine Optimization)是搜索引擎优化，为了让用户在 搜索和网站相关的关键词的时候，可以使网站在搜索引擎的排名尽量靠前，从而增加流量。
* 方便设备解析（如盲人阅读器等），可用于智能分析
* 在没有CSS样式下，页面也能呈现出很好地内容结构、代码结构

### 2.2 常见的语义化标签
* title:页面主体内容
* header：页眉通常包括网站标志、主导航、全站链接以及搜索框。
* nav：标记导航，仅对文档中重要的链接群使用。
* section：定义文档中的节(section、区段)。比如章节、页眉、页脚或文档中的其他部分。
* main,帮助到搜索引擎以及搜索工程师找到网站的主要内容，本身并不承载特殊的功能和意义。
* article:定义外部的内容，其中的内容独立于文档的其余部分。
* aside 定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。
* footer:页脚，只有当父级是body时，才是整个页面的页脚。
* address:作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。

## 3. meta标签
meta标签用来描述一个HTML网页文档的属性，例如作者、日期和时间、网页描述、关键词、页面刷新等。
meta标签的作用有：搜索引擎优化(SEO),定义页面使用语言，自动刷新并指向新的页面，实现网页转换时的动 态效果，控制页面缓冲，网页定级评价，控制网页显示的窗口等。

### 3.1 meta分类
1) 页面描述信息(NAME):常用的选项有Keywords(关键字)，description(网站内容描述)，author(作者)， robots(机器人向导)等。
2) HTTP标题信息(TTP-EQUIV):可用于代替name项，常用的选项有Expires(期限)，Pragma(cache模式)，Refresh(刷新)，Set-Cookie(cookie设定)，Window-target(显示窗口的设定)，content-Type(显示字符集的设定)等。
3) content项：根据name项或http-equiv7项的定义来决定此项填写什么样的字符串。

## HTML5新特性

### 新增
* 新的选择器document.querySelector、document.querySelectorAll
* 媒体播放的video和audio标签
* 以前用的flash.实现
* 本地存储localStorage和sessionStorage
* 浏览器通知Notifications
* 语义化标签，例如header,nav,footer,section,article等标签。
* 地理位置Geolocation
* 鉴于隐私性，除非用户同意，否则不可获取用户地理位置信息
* 离线应用manifest
* 全双工通信协议websocket
* 浏览器历史对象history
* 多任务处理web worker
* 运行在后台的JS,独立于其他脚本，不影响性能
* 拖拽相关API
* 增强表单控件url,date,time,email,calendar,search
* 页面可见性改变事件visibilitychange
* 跨窗口通信PostMessage
* 表单FormData对象
* canvas+SVG

### 移除
* 纯表现的元素：basefont、big、center、font、s、strike、tt、u
* "对可用性产生负面影响的元素：frame、frameset、.noframes
