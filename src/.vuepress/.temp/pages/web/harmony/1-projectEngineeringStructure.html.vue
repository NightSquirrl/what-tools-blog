<template><div><h2 id="stage-模型下的工程结构" tabindex="-1"><a class="header-anchor" href="#stage-模型下的工程结构"><span>Stage 模型下的工程结构</span></a></h2>
<h3 id="宏观" tabindex="-1"><a class="header-anchor" href="#宏观"><span>宏观</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>├── AppScope
│   ├── app.json5  <span class="token comment"># 应用的全局配置信息</span>
│   └── resources <span class="token comment"># 全局的配置的资源</span>
│       └── base
│           ├── element
│           │   └── string.json
│           └── media
│               └── app_icon.png
├── build-profile.json5 <span class="token comment"># 应用级配置信息 包括签名 产品配置</span>
├── entry <span class="token comment"># 应用/服务模块 编译构建生成一个HAP</span>
│   ├── build-profile.json5 <span class="token comment"># 当前的模版信息 编译信息配置项</span>
│   ├── hvigorfile.ts <span class="token comment"># 模块编译构建任务脚本</span>
│   ├── oh-package.json5
│   └── src
│       ├── main
│       │   ├── ets <span class="token comment"># 存放 ARTS 源码</span>
│       │   │   ├── entryability
│       │   │   │   └── EntryAbility.ts <span class="token comment"># 应用服务的入口</span>
│       │   │   └── pages
│       │   │       └── Index.ets <span class="token comment"># 应用服务包含页面</span>
│       │   ├── module.json5 <span class="token comment"># Stage 模型模块配置模块</span>
│       │   └── resources <span class="token comment"># 用于存放应用服务资源</span>
│       │       ├── base
│       │       │   ├── element
│       │       │   │   ├── color.json
│       │       │   │   └── string.json
│       │       │   ├── media
│       │       │   │   └── icon.png
│       │       │   └── profile
│       │       │       └── main_pages.json
│       │       ├── en_US
│       │       │   └── element
│       │       │       └── string.json
│       │       ├── rawfile
│       │       └── zh_CN
│       │           └── element
│       │               └── string.json
│       └── ohosTest
│           ├── ets
│           │   ├── <span class="token builtin class-name">test</span>
│           │   │   ├── Ability.test.ets
│           │   │   └── List.test.ets
│           │   ├── testability
│           │   │   ├── TestAbility.ets
│           │   │   └── pages
│           │   │       └── Index.ets
│           │   └── testrunner
│           │       └── OpenHarmonyTestRunner.ts
│           ├── module.json5
│           └── resources
│               └── base
│                   ├── element
│                   │   ├── color.json
│                   │   └── string.json
│                   ├── media
│                   │   └── icon.png
│                   └── profile
│                       └── test_pages.json
├── hvigor
│   ├── hvigor-config.json5
│   └── hvigor-wrapper.js
├── hvigorfile.ts <span class="token comment"># 应用级编译构建脚本</span>
├── hvigorw
├── hvigorw.bat
├── local.properties
├── oh-package-lock.json5
├── oh-package.json5
└── oh_modules <span class="token comment"># 第三方依赖模块</span>
    └── @ohos
        └── hypium -<span class="token operator">></span> <span class="token punctuation">..</span>/.ohpm/@ohos+hypium@1.0.6/oh_modules/@ohos/hypium

<span class="token number">37</span> directories, <span class="token number">34</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微观" tabindex="-1"><a class="header-anchor" href="#微观"><span>微观</span></a></h3>
<h4 id="appscope" tabindex="-1"><a class="header-anchor" href="#appscope"><span><strong>AppScope</strong></span></a></h4>
<blockquote>
<p>全局的共有资源存放目录。</p>
</blockquote>
<div class="language-markdo line-numbers-mode" data-ext="markdo" data-title="markdo"><pre v-pre class="language-markdo"><code>resources：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。

    base&gt;element：包括字符串、整型数、颜色、样式等资源的json文件。每个资源均由json格式进行定义

                boolean.json：布尔型

                color.json：颜色

                float.json：浮点型

                intarray.json：整型数组

                integer.json：整型

                pattern.json：样式

                plural.json：复数形式

                strarray.json：字符串数组

                string.json：字符串值

    base&gt;media：多媒体文件，如图形、视频、音频等文件，支持的文件格式包括：.png、.gif、.mp3、.mp4等。

    rawfile ：用于存储任意格式的原始资源文件。rawfile不会根据设备的状态去匹配不同的资源，需要指定文件路径和文件名进行引用。

app.json5：应用的全局配置信息。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="entry" tabindex="-1"><a class="header-anchor" href="#entry"><span><strong>entry</strong></span></a></h4>
<p>HarmonyOS工程模块，编译构建生成一个HAP包。</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code>src > main > ets：用于存放ArkTS源码。

<span class="token code keyword">        entryability：应用/服务的入口。</span>

<span class="token code keyword">        pages：应用/服务包含的页面。</span>

src > main > resources：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等，和上面的共享目录是一致的。

src > main > module.json5：Stage模型模块配置文件。主要包含HAP包的配置信息、应用/服务在具体设备上的配置信息以及应用/服务的全局配置信息。

build-profile.json5：当前的模块信息、编译信息配置项，包括buildOption、targets配置等。其中targets中可配置当前运行环境，默认为HarmonyOS。

hvigorfile.ts：模块级编译构建任务脚本，开发者可以自定义相关任务和代码实现。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hvigor" tabindex="-1"><a class="header-anchor" href="#hvigor"><span><strong>hvigor</strong></span></a></h4>
<p>构建配置文件信息，是一款全新基于TS实现的前端构建任务编排工具，结合npm包管理机制，主要提供任务管理机制，任务注册编排、工程模型管理、配置管理等关键能力，更符合ArkTS/JS开发者的开发习惯。</p>
<h4 id="oh-modules" tabindex="-1"><a class="header-anchor" href="#oh-modules"><span><strong>oh_modules</strong></span></a></h4>
<p>用于存放三方库依赖信息。</p>
<h4 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore"><span><strong>gitignore</strong></span></a></h4>
<p>git过滤配置。</p>
<h4 id="build-profile-json5" tabindex="-1"><a class="header-anchor" href="#build-profile-json5"><span><strong>build-profile.json5</strong></span></a></h4>
<p>应用级配置信息，包括签名、产品配置等。</p>
<h4 id="hvigorfile-ts" tabindex="-1"><a class="header-anchor" href="#hvigorfile-ts"><span><strong>hvigorfile.ts</strong></span></a></h4>
<p>应用级编译构建任务脚本。</p>
<h4 id="hvigorw和hvigorw-bat" tabindex="-1"><a class="header-anchor" href="#hvigorw和hvigorw-bat"><span><strong>hvigorw和hvigorw.bat</strong></span></a></h4>
<p>ohpm编译构建工具。</p>
<h4 id="local-properties" tabindex="-1"><a class="header-anchor" href="#local-properties"><span><strong>local.properties</strong></span></a></h4>
<p>存储本地属性的文件。</p>
<h4 id="oh-package-json5" tabindex="-1"><a class="header-anchor" href="#oh-package-json5"><span><strong>oh-package.json5</strong></span></a></h4>
<p>依赖配置，可以设置三方包依赖。</p>
</div></template>


