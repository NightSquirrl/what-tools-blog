---
title: 本项目的使用教程
description: 项目配置的使用教程
top: 1
---
## 本项目的使用教程

> 关于修改页面内目录显示的配置

[官网地址](https://vitepress.dev/reference/default-theme-config)

```tsx
interface Outline {
  /**
   * The levels of headings to be displayed in the outline.
   * Single number means only headings of that level will be displayed.
   * If a tuple is passed, the first number is the minimum level and the second number is the maximum level.
   * `'deep'` is same as `[2, 6]`, which means all headings from `<h2>` to `<h6>` will be displayed.
   *
   * @default 2
   */
  level?: number | [number, number] | 'deep'

  /**
   * The title to be displayed on the outline.
   *
   * @default 'On this page'
   */
  label?: string
}
```

> Markdown 内部头属性

```javascript
---

title: 卡片 banner 的 title

description: 卡片 banner 的描述 不设置的情况下，默认取文章内容的前100个字符

//使用自定义的HTML内容设置文章在首页卡片列表里展示的 描述信息
descriptionHTML:'
<span style="color:var(--description-font-color);">1分钟内完成自己的博客创建</span>
<pre style="background-color: #292b30; padding: 15px; border-radius: 10px;" class="shiki material-theme-palenight"><code>
    <span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@sugarat/theme@latest</span></span>
</code>
</pre>',


cover: https://img.cdn.sugarat.top/mdImg/MTY3MzE0Njg5NDY4OQ==673146894689

//hiddenCover 控制是否展示当前文章的封面，全局配置开关见 article.hiddenCover
hiddenCover: true 

//用于设置文章是否出现在首页的列表里
hidden: true

//用于单独设置文章的作者信息
author

//单独设置是否展示文章的预计阅读时间，全局配置开关见 article.readingTime
readingTime: true

//用于按标签给文章分类，同时，在文章页标签可点击跳转
tag:
 - 日志
tags:
 - 信息
categories:
 - 测试分类

//用于设置在首页展示的 精选文章，值越大展示越靠前
sticky: 1

//用于设置在首页置顶展示的文章，从 1 开始，值越小越靠前
top: 1

//用于设置文章左侧展示的 推荐文章 顺序（越小越靠前），或者在推荐列表中隐藏掉不展示
recommend: 1
---
```




