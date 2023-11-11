---
title: 🪤 Webpack 
tag:
  - Webpack
---

> 高级篇 7.9

# 基础篇

## 1. Why? 为什么需要 webpack

> 问题
1. 作用于问题 GRUNT IIFE
```javascript
// 立即调用函数
;(function() {
    let name = "";
  // ...
})();
// 在外部调用
console.log(name) // 程序报错,无法访问到

let result = (function () {
    let name = "";
    return name;
})()
console.log(name) // 可以访问到

```
2. 代码拆分问题 - nodejs 提供 JavaScript 运行环境  模块化
COMMION JS -> module.exports = {} -> require
```javascript
// 新建文件 math.js
const add = (x + y)=> {
    return x + y;
}

module.exports = {
    add
}

// 引用
const  math = require('./math');
```
上述代码是 nodejs 代码,无法在浏览器运行

> 如何在浏览器上使用?

```javascript
// 新建文件 add.js
const add = (x + y)=> {
    return x + y;
}
// 第一个参数,所写的,模块依赖的其他模块
// 第二个参数,回调函数
define([],function (){
    return add
})

// 在 HTML 中使用
// 使用 require.js
// 新建入口文件 mian.js
require(['./add.js'],function (add) {
    console.log(add(1,2))
})
<script 
src="https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.js" 
    data-main=""
    ></script>
```
3. ECMAScript module
```javascript
// 新建文件 add.js
const add = (x + y)=> {
    return x + y;
}
export default add

// 使用
// 必须添加 type
<script type="module">
import add from "./add.js"

console.log(add(1,2))
</script>

// 当访问页面的时候 要使用 http server

// 使用临时 server

npx http-server

```
## 2. 安装 webpack
```shell
# 全局安装
npm i -g webpack webpack-cli

webpack -v
# 本地项目 安装
npm init -y
npm i webpack webpack-cli
```
### 简单的使用
```shell
webpack #开始打包
webpack --stats detailed # 展示打包信息
npx webpack  # 项目内命令
```
## 3. 基本自定义 webpack 配置
> 命令行的方式
```shell
npx webpack --entry ./src/index.js --output ./dist/main.js --mode production
```
> 配置文件方式

新建文件 webpack.config.js
```javascript
const path = require('path');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    mode: 'production',
}
```
### 3.1自动引入资源 - HtmlWebpackPlugin
```shell
npm i html-webpack-plugin
```
>webpack.config.js
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
plugin:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body',
    })
]
```
> 每次打包清空之前 dist 目录
```javascript
output:{
    clean: true,
}
```
### 3.2搭建开发环境

#### 3.2.1 sourece map

```javascript
devtool:"inline-source-map" //bundle.js文件正常的显示代码,并且报错的位置正常的显示
```

#### 3.2.2  watch 监听编译 热编译

```shell
npx webpack --watch
```

#### 3.2.3 webpack dev server  热更新

```shell
npm i webpack-dev-server -D # 开发依赖,只有 development 模式才会使用到的依赖
npx webpack-dev-server --open # 自动打开页面
```

```javascript
devServer:{
  static:"./dist"
}
```

## 4. Resource资源

```javascript
module:{
  rules:[
    {
      test:/\.png$/,
      type:"asset/resource",
      genterator:{
        filename:"images/test.png" // 优先级会更高
      }
    },
      {
      test:/\.svg$/,
      type:"asset/inline", // base64 格式
    },
    {
      test:/\.txt$/,
      type:"asset/source", // 读取文本内容,原始资源
    },
       {
      test:/\.jpg$/,
      type:"asset", // asset/resource 与asset/inline 切换 小于 8k使用 base64
      parser:{
          dataUrlCondition:{
						maxSize:4*1024*1024  // 4M  临界值
          }
       }
    }
  ]
},
output:{
  assetModuleFilename:"images/[contenthash][ext]"// 指定图片资源的存放路径
}
```

## 5. 管理资源

> webpack只能解析JS、JSON文件，通过loader可以实现在js上加载css等其他文件

### 5.1 css 模块

```shell
npm i css-loader -D # 解析 css 文件
npm i style-loader -D # 实现在页面写入 css 
```

```javascript
module:{
  rules:[
    {
      test:"/\.css$/",
      use:["style-loader","css-loader"] // 执行的循序,从后往前
    }
  ]
}
```

### 5.2 less loader

```shell
npm i less-loader less -D
```

```javascript
module:{
  rules:[
    {
      test:"/\.(css|less)$/",
      use:["style-loader","css-loader","less-loader"] // 执行的循序,从后往前
    }
  ]
}
```

### 5.3 抽离和压缩 css

```shell
npm i mini-css-extract-plugin -D
npm i css-minimizer-webpack-plugin -D # 压缩 css
```

```javascript
const MiniCssExtractPlugin = require("min-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")

plugin:[
  new MiniCssExtractPlugin({
  	filename:"style/[contenthash].css" // 指定目录
  })
],
module:{
  rules:[
    {
      test:"/\.(css|less)$/",
      use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"] // MiniCssExtractPlugin 通过 link 引入 css
    }
  ]
},
optimization:{
  minimizer:[
    new CssMinimizerWebpackPlugin()
  ]
}
```

### 5.4 加载 fonts 字体

```javascript
module:{
  rules:[
    {
      test:"/\.(woff|woff2|eot|ttf|otf)$/",
      type:["asset/resource"]
    }
  ]
},
```

### 5.5 加载数据 xml csv

> xml会被解析为对象,csv 会被解析为数组

```shell
npm i csv-loader xml-loader -D
```

```javascript
module:{
  rules:[
    {
      test:"/\.(csv|tsv)$/",
      use:"csv-loader"
    },
     {
      test:"/\.xml$/",
      use:"xml-loader"
    }
  ]
},
```

### 5.6 自定义 JSON 模块 parser

> yaml taml json5

```shell
npm i tomal yaml json5 -D
```

```javascript
const toml = require("toml")
const yaml = require("yaml")
const json5 = require("json5")

module:{
  rules:[
    {
      test:"/\.toml$/",
      type:"json",
      parser:[
        parse:toml.parser
      ]
    },
   {
      test:"/\.yarml$/",
      type:"json",
      parser:[
        parse:yaml.parser
      ]
    },
     {
      test:"/\.json5$/",
      type:"json",
      parser:[
        parse:json5.parser
      ]
    },
  ]
},
```

## 6. babel-loader的使用

```shell
npm i babel-loader @babel/core @babel/preset-env -D
```

```javascript
const toml = require("toml")
const yaml = require("yaml")
const json5 = require("json5")

module:{
  rules:[
    {
      test:"/\.js$/",
      exclude:/node_modules/,
  		use:{
        loader:"babel-loader",
        options:{
          presets:["@babel/preset-env"]
        }
      }
    }
  ]
},
```



> regeneratorRuntime 是 webpack 打包生成的全局辅助函数,由babel生成,用于兼容 await/async

```shell
npm i @babel/runtime -D
npm i @babel/plugin-transfrom-runtime -D
```



```javascript
const toml = require("toml")
const yaml = require("yaml")
const json5 = require("json5")

module:{
  rules:[
    {
      test:"/\.js$/",
      exclude:/node_modules/,
  		use:{
        loader:"babel-loader",
        options:{
          presets:["@babel/preset-env"],
          plugins:[
            ["@babel/plugin-transform-runtime"]
          ]
        }
      }
    }
  ]
},
```

## 7. 代码分离

### 7.1修改 entry

> 缺点 公共文件重复打包

```javascript
entry:{
  index:"./src/index.js",
   another:"./src/another-module.js"
}, // 同时需要修改 output 的 filename
output:{
  filename:"[name].bundle.js"
}
```

### 7.2 防止重复打包

```javascript
// 方法一

entry:{
  index:{
  	import:"./src/index.js",
    dependOn:"shared"
  },
  another:{
    import:"./src/another-module.js",
    dependOn:"shared"
  },
  shared:"lodash"
}, // 同时需要修改 output 的 filename

  
// 方法二
  
entry:{
  index:"./src/index.js",
  another:"./src/another-module.js"
}, // 同时需要修改 output 的 filename
  
optimization:{
  splitChunks:{
    chunks:'all'
  }
}
```

### 7.3 动态导入

通过import实现动态引入，且不影响其他模块抽离方式

async-module.js 假设为功能模块

```javascript
// async-module.js
function getComponent(){
  return import('lodash').then(({default:_})=>{
    const element = document.createElement('div')
    element.innerHTML = _.join(['hello','webpack'],' ')
    return element
  })
}

getComponent().then((element)=>{
  document.body.appendChild(element)
})
```

> 在其他的里面使用

### 7.4  懒加载

可以加快应用的初始载入速度，减轻总体积

依旧通过import直接引入模块，区别在于：何时调用何时加载模块

节省流量的加载

```javascript
button.addEventListener('click',()=>{
  import('./math.js').then(({add})=>{
    console.log(add(4,5));
  })
})
```

模块别名

```javascript
import(/* webpackChunkName:'math' */'./math.js')
```

### 7.5 预获取预加载

在声明import时，使用下面这些内置指令，可以让webpack输出“resource hint（资源提示）”，来告知浏览器：

	<p style="color:red">prefetch（预获取）：将来某些导航下可能需要的资源 ，即在浏览器网络空闲时再获取资源</p>

preload（预加载）：当前导航下可能需要资源，和懒加载效果类似

​	依旧在import引入时的注释中添加

```javascript
const button = document.createElement('button')
button.textContent = '点击执行加法运算'
button.addEventListener('click',()=>{
  import(/* webpackChunkName:'math',webpackPrefetch:true */'./math.js').then(({add})=>{
    console.log(add(4,5));
  })
})
//button.addEventListener('click',()=>{
//  import(/* webpackChunkName:'math',webpackPreload:true */'./math.js').then(({add})=>{
//    console.log(add(4,5));
//  })
//})
document.body.appendChild(button)
```

## 8.  缓存

打包后的dist文件部署到服务器以后便能被浏览器客户端所访问，因浏览器的解析特性会优先选择缓存资源，我们要确保文件发生更新时浏览器能识别到，所以需要对输出文件的文件名做处理。

### 8.1 修改输出文件的文件名

我们可以通过替换 output.filename 中的 substitutions 设置，来定义输出文件的名称。webpack提供了一种使用 **substitution （可替换模板字符串）**的方式，通过带括号字符串来模板化文件名，其中，[contenthash] substitution 将根据资源内容创建出唯一的hash。当资源内容发生变化时， [contenthash] 也会发生变化。

```javascript
output:{
      ...
      assetModuleFilename:'images/[contenthash][ext]',
},
```

### 8.2 缓存第三方库

将第三方库 (library)  (例如 lodash)  提取到单独的 vendor chunk 文件中，是比较推荐的做法，第三方库文件很少像本地源码会频繁修改，所以我们可以利用client的长效缓存机制，命中缓存来消除请求，并减少向server 获取资源，同时保证client和server的代码一致。

> 在splitChunks中定义cacheGroups缓存组。

```javascript
	optimization:{
      ...
      splitChunks:{
        ...
        cacheGroups:{
          vendor:{
            test:/[\\/]node_modules[\\/]/,
            name:'vendors',
            chunks:'all'
          }
        },
      }
    }
```

### 8.2 汇总js文件

在output.filename加上scripts前缀即可汇总js文件至指定文件夹下生成。

```javascript
output:{
    filename:'scripts/[name].[contenthash].js',
    ...
}
```

## 9.拆分开发环境和生成环境

### 9.1  公共路径

> publicPath 配置选项在各种场景中都非常有用，你可以通过它来指定应用程序中所有资源的基础路径。

``` javascript
output:{
    filename:'scripts/[name].[contenthash].js',
    path:path.resolve(__dirname,'./dist'),
    clean:true,
    assetModuleFilename:'images/[contenthash][ext]',
    publicPath:'http://localhost:8080/'
},
```

### 9.2 环境变量

> npx webpack --env production 可以通过命令传入变量区分环境

```javascript
module.exports = (env)=>{
  return {
    ...
  }
 }
```

### 9.3 压缩代码

```shell
npm install terser-webpack-plugin -D
```

```javascript
const TerserWebpackPlugin = require("terser-webpack-plugin")


optimization:{
  minimizer:[
     new TerserWebpackPlugin()
  ]
}
```

### 9.4 拆分配置文件

新建文件夹 config

新建文件 webpack.config.dev.js

新建文件 webpack.config.prod.js

```shell
npx webpack -c ./config/webpack.config.dev.js
```

> 修改配置文件夹里面的输出文件的位置

> 启动一个服务

```shell
npx webpack serve -c ./config/webpack.config.dev.js
```

### 9.5 npm命令配置

```json
"scripts": {
    "start": "webpack serve -c ./config/webpack.config.dev.js,
    "build": "webpack -c ./config/webpack.config.prod.js "
},
```

> 关闭生产环境打包的文件过大警告提示 webpack.config

```json
performance:{
    hints:false
}
```

### 9.6  提取公共配置

新建文件 webpack.config.common.js

> 合并配置

```shell
npm i webpack-merge -D
```

新建文件 webpack.config.js

```javascript
const {merge} = require('webpack-merge')

const commonConfig = require('./webpack.config.common')
const productionConfig = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')

module.exports=((env)=>{
  switch(true){
    case env.development:
      return merge(commonConfig,developmentConfig)
    case env.production:
      return merge(commonConfig,productionConfig)
    default:
      return new Error('No matching configuration was found')
  }
})
```

注意：package.json中的config文件路径需统一为新创建的config文件，且需要添加环境变量

```
"scripts": {
    "start": "webpack serve -c ./config/webpack.config.js --env development",
    "build": "webpack -c ./config/webpack.config.js --env production"
},
```

# 高级篇

## 1. source map

在开发过程中提供源码支持，便于开发者使用，又细分为以下7种。

| 模式                    | 作用                                                         |
| ----------------------- | ------------------------------------------------------------ |
| eval                    | 每个module会封装到eval里包裹起来执行，并且会在末尾追加注释   |
| source-map              | 生成一个SourceMap文件                                        |
| hidden-source-map       | 和source-map一样，但不会在bundle末尾追加注释                 |
| inline-source-map       | 生成一个DataUrl形式的SourceMap文件                           |
| eval-source-map         | 每个module会通过eval（）来执行，并生成一个DataUrl形式的SourceMap |
| cheap-source-map        | 生成一个没有列信息（column-mappings）的SourceMaps文件，不包含loader的sourcemap（譬如babel的sourcemap） |
| cheap-module-source-map | 生成一个没有列信息（column-mappings）的SourceMaps文件，同时loader的sourcemap也被简化为只包含对应行的。 |

> 开发环境推荐使用 cheap-module-source-map

注意：生产环境一般不会开启sourcemap功能，有2点原因：

- 通过bundle和sourcemap文件，可以反编译出源码——也就是说，线上有sourcemap文件的话就意味着有暴露源码的风险
- sourcemap文件的体积相对巨大，不宜放在生产环境

## 2. devServer

开发环境下，我们往往需要启动一个web服务，方便我们模拟一个用户从浏览器中访问服务，读取打包产物，以此观测代码在客户端的表现，webpack内置了这样的功能，我们只需要简单配置就可以开启。

```shell
 npm install webpack-dev-server -D
```



```javascript
module.exports={
    ...
    devServer:{
        static:'./dist',
        compress:true, // 配置是否压缩文件传输
        port：'3000', // 运行端口号
        headers:{
            'X-Access-Token':'123213' // 自定义头部
    	}，
        proxy:{
        	'/api':'http://localhost:9000' // 配置代理  一般用来解决快鱼的问题
    	}，
        https:true, // 设置https协议
        http2:true, 
        historyApiFallBack：true,
				host:'0.0.0.0' //如果在开发环境中启动了一个devserve服务，并期望其他人能访问到，只需要配置该项即可
    }
}
```



webpack-dev-sever是静态资源服务器，他会通过你的output配置去读取文件，通过’/’分割以文件查找的模式匹配文件。这样自然就产生问题了，因为你配置的路由并不是实际存在的文件，根据文件查找的方式是找不到的，只会404。



```javascript
{
  output:{
    publicPath:"/"
  }
}
```

## 3. 模块热替换与热加载

模块热替换：

模块热替换（HMR - hot module replacement）功能会在应用程序运行过程中，替换、添加或删除 模块 ，而无需重新加载整个页面。

启用webpack的热模块替换特性，需要配置devServer.hot 参数

```javascript
module.exports={
    ...
    devServer:{
        ...
        hot:true,
        liveReload:true, // 热加载 新版webpack-dev-server默认已经开启热加载功能
    }
}
```

自定义模块可以用hot.accept方法来实现热替换

```javascript
if(module.hot){
    module.hot.accept('./input.js',()=>{
        
    })
}
```

## 4. eslint

多人协同开发时，用以规范代码格式的工具

本地安装eslint 

```shell
npm i eslint -D
```

运行 npx eslint --init 初始化eslint配置

```json
{
    "env": {
        "browser": true, // 支持运行在浏览器中
        "es2021": true // 支持es2021
    },
    "extends": [
        "airbnb-base" // 支持的扩展文件
    ],
    "parserOptions": {
        "ecmaVersion": 12, // ecmaVersion 版本
        "sourceType": "module"
    },
    "rules": {
    	//启用的规则
    },
    "globals":{
        
    }
}
```

### 4.1借助 webpack

​	运行eslint检查： npx eslint 目录

​	当项目中其他人没有安装eslint插件至IDE时，可以加装webpack插件来支持eslint

​	本地安装babel-loader、eslint-webpack-plugin

​	npm install babel-loader eslint-webpack-plugin -D

```javascript
module:{
	rules:{
		test:/\.js$/,
		use:['bable-loader','eslint-webpack-plugin']
	}
}
```

> 关闭网页 eslint 的错误提示

```javascript
devServer:{
	client:{
  	overlay:false
	}
}
```

## 5. git-hooks与husky

为保证团队的开发人员提交代码时符合规范，可以选择在上传代码时进行校验，我们常用husky来协助代码提交时的eslint校验。

```shell
git init
ls -la # 显示所有的文件包括隐藏的文件
cd .git
cd hooks
touch pre-commit
vim pre-commit

	echo pre-commit # 终端打印
	npx eslint ./src
# 修改文件的读写权限
chomd +x ./pre-commit
```

修.git 中默认路径,读取自定义的路径

新建文件夹.mygithooks 新建文件 pre-commit

```shell
git config core.hooksPath .mygithoos
chomd +x .mygithooks/pre-commit
```

### 5.1 使用 husky 完成以上功能

[官网地址](https://typicode.github.io/husky/)

```shell
npm i husky -D
npx husky install
```

fix package.json

```json
{
	"script":{
    "prepare":"husky install"
  }
}
```

> 创建 hook

```shell
npx husky add .husky/pre-commit "npm test"

#然后在.husky 中生成了一个文件 如果是空白,则添加 npx eslint ./src
# 授权 chomd +x .husky/pre-commit
```

## 6. 模块解析（resolve）

> 不同时期模块的引入和导出

```javascript
// ECMAScript 模块
import a from "./a";
export default a
// CommonJS 模块
const a = require("./a")
module.exports = a
// AMD 模块
define([],function(){return ()=>{}})
require(['./a.js','./b.js'],function(a,b) {})

```

webpack通过Resolvers实现了模块之间的依赖与引用

```javascript
import _ form 'lodash'

const add = require('./utils/add')
```

所引用的模块可以是来自应用程序的代码，也可以是第三方库。resolver帮助webpack从每个require/import 语句中，找到需要引入到bundle中的模块代码。当打包模块时，webpack使用enhanced-resolve 来解析文件路径。

### 6.1 webpack中的模块路径解析规则

通过内置的enhanced-resolve，webpack能解析三种文件路径

#### 6.1.1绝对路径

```javascript
import '/home/me/file'
import 'C:\\Users\\me\\file'
```

由于已经获得文件的绝对路径，因此不需要再做进一步解析

#### 6.1.2相对路径

```javascript
import '../utils/reqFetch'
import './styles.css'
```

这种情况下，使用import或require的资源文件所处的目录，被认为是上下文目录。在import/require中给定的相对路径，enhanced-resolve会拼接此上下文路径，来生成模块的绝对路劲path.resolve(__dirname,RelativePath)。

#### 6.1.3 路径别名

> 修改 webpack

```javascript
const path = require("path")
resolve:{
  alias:{
    "@":path.resolve(__dirname,"./src")
  }
}
```

#### 6.1.4修改默认的引入扩展名

当引入的时候没有填写文件的扩展名,按照数组的顺序引入对应的后缀文件

```javascript
extensions:[
  ".json","js",".vue"
]
```

### 6.2 外部扩展

有时我们为了减小bundle体积，会把一些不变的第三方库用cdn的形式引入。

```javascript
module.exports={
    ...
    externalsType:'script', // 选择加载类型
    externals:{
        jquery:[
            'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
            '$'
        ]
    }
}
```

### 6.3 依赖图

每当一个文件依赖另一个文件时，webpack会直接将文件视为存在依赖关系。这使得webpack可以获取非代码资源，如images或web字体等。并会把它们作为依赖提供给应用程序。



当webpack开始工作时，他会根据我们的配置，从entry开始递归构建一个依赖关系图，其中包含着应用程序所需的每个模块，然后将所有模块打包为bundle（也就是output的配置项）。

bundle analysis工具：

- **webpack-chart：**webpack stats 可交互饼图

- **webpack-visualizer：**可视化bundle，检查模块占用空间及重复使用

- **webpack-bundle-analyzer：**一个plugin和CLI工具，它将bundle内容展示为一个便捷的、交互式、可缩放的树状图形式

- **webpack bundle optimize helper：**可以分析bundle，并提供可操作的改进措施，以减少包体积大小

- **bundle-stats：**生成一个bundle报告（大小、资源、模块），并自动比较不同构建之间的结果。

```shell
npm i webpack-bundle-analyzer -D
```

```javascript
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")
plugins:[
  new BundleAnalyzerPlugin()
]
```

## 7. 扩展功能

### 7.1 PostCSS和CSS模块

```shell
npm install postcss-loader autoprefixser -D
npm i postcss-nested -D  # 可以使用 less sass 嵌套语法
```

新建文件postcss.config.js至根目录下，并配置

```javascript
module.exports={
  plugins:[
    require('autoprefixer'),
    require("postcss-nested")
  ]
}
```

 ```javascript
 module:{
   rules:[
     {
       test:/\.css$/,
       use:[
         'style-loader',
         {
           loader:"css-loader",
           options:{
             modules:true // 开启 css 模块化
           }
         },
         'postcss-loader'
       ]
     }
   ]
 }
 ```



注意，还需在package.json中配置浏览器列表以实现兼容效果

```json
{
    ...
    "browserslist":[
        "> 1%",
        "last 2 versions"
    ]
}
```

### 7.2 Web Worker

webpack5自带，不需要安装loader就能在webpack中使用：

```javascript
// 假设work.js代码如下
self.onmessage = (msg)=>{
  self.postMessage({
    answer:1111
  })
}
```

```javascript
// 在其他js中引入并调用即可
const worker = new Worker(new URL('./work.js',import.meta.url))

worker.postMessage({
  question:'喂喂喂'
})
worker.onmessage = (msg)=>{
  console.log(msg);
}
```

### 7.3 TypeScript

webpack也提供typescript的良好支持

安装typescript：

```shell
npm install typescript ts-loader -D
```

初始化ts配置：

```shell
npx tsc --init
```

并修改tsconfig.json中的文件目录

```json
{   
    ...
	"rootDir": "./src",
    "outDir": "./dist"
}
// 这里只修改了输入和输出文件目录
```

注：在ts中引入的第三方库需要单独进行下载，如 npm install @types/loadsh -D 一样

### 7.4 多页面应用

#### entry配置

当需要适配多页面应用时，可以通过配置entry来支持

```javascript
module.exports={
    ...
    entry:{
        main:{
            import:['./src/app.js','./src/work.js'],
            dependOn:'lodash' 
        },
        main2:{
            import:'./src/craft.js',
            dependOn:'lodash'
        },
        lodash:'lodash' // 共用第三方库时可整合在一起
    }
}
```

#### index.html 模板配置

想要自定义一些html相关的配置项时，可以通过htmlwebpackplugin的模板配置生成

```javascript
module.exports={
	...
	plugins:[
		new HtmlWebpackPlugin({
            title:'多页面应用',
            template:'./index.html',
            inject:'body', // 定义script标签的生成位置
            chunks:['main'] // webpack会默认根据entry自动生成chunks，手动配置以后只会生成对应键的chunks 
        })
	],
    entry:{
        main:{
            import:['./src/app.js','./src/work.js'],
            dependOn:'lodash' 
        },
        main2:{
            import:'./src/craft.js',
            dependOn:'lodash'
        },
        lodash:'lodash' // 共用第三方库时可整合在一起
    }
}
```

```html
// 并在html中添加对应配置
<title><%= htmlWebpackPlugin.options.title %></title>
```

### 7.5 Try Shaking

当 Javascript 项目达到一定体积时，将代码分成模块会更易于管理。

但是，当这样做时，我们最终可能会导入实际上未使用的代码。Tree Shaking 是一种通过消除最终文件中未使用的代码来优化体积的方法。

```javascript
module.exports = {
      ...
      mode:'production',
      optimization:{
        usedExports:true
      }
}
```

#### sideEffects

tree-shaking 会导致无差别删除代码，我们可以通过配置sideEffects来手动调节模块

在package.json中编辑，下方示例即为对css后缀的文件不过滤

```json
{
    "sideEffects":["*.css"],
}
```

### 7.6 渐进式网络应用程序 PWA

[了解详情](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Tutorials/js13kGames)

简而言之，PWA是一个网站，但是它们采用了最新的Web标准来允许在用户在设备上安装它。他提供了和App一样的用户体验。当没有网络连接时，它可以离线使用，它可以缓存上一次联网交互过程中的数据。它将App应用程序的外观美感和网站的易开发特性融合在了一起。

这里主要使用 http-server 来体验

本地安装 http-server

```shell
npm install http-server --save-dev
```

注意：默认情况下，webpack DevServer 会写入到内存。我们需要启用 devserverdevmiddleware.writeToDisk 配置项，来让 http-server 处理 ./dist 目录中的文件

````javascript
devServer:{
	devMiddleWare:{
        index:true,
        writeToDisk:true
    }
}
````

在package.json中配置脚本

```json
{
    "scripts":{
        "start":"http-server dist"
    }
}
```

#### 添加Workbox

添加 workbox-webpack-plugin 插件，然后调整 webpack.config.js 文件

以实现离线环境下依然能够访问应用

```shell
npm install workbox-webpack-plugin --save-dev
```

```javascript
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports={
    plugins:[
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助快速启用 ServiceWorkers
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaims: true,
            skipWaiting: true
        })
    ]
}
```

#### 注册Service-Worker

```javascript
if('serviceWorker' in navigator){
    window.addEventListener('load',()={
        navigator.serviceWorker.register('/service-worker.js')
    	.then(registration=>{
			console.log('SW 注册成功',registration)
        })
    	.catch(registrationError=>{
			console.log('SW 注册失败',registrationError)
        })
    })
}
```

### 7.7 shimming 预置依赖

将模块添加至全局，比如lodash直接定义为全局变量

#### shimming预置全局变量

```javascript
const webpack = require('webpack')
module.exports = {
    ...
    plugins:[
        // 将下划线指定为全局变量
        new webpack.ProvidPlugin({
            _:'lodash' 
        })
    ]
}
```



#### 细粒度 Shimming

```shell
npm i imports-loader -D
```



一些遗留模块依赖的 <span style="color:red">this 指向的是 window 对象</span>。在rules中配置imports以覆盖exports的指向

```javascript
module.exports = {
    ...
	module:{
        rules:[
            {
                test:require.resolve('./src/index.js')
                use:'imports-loader?wrapper=window'
            }
        ]
    }
}
```

#### 全局exports

```javascript
module.exports = {
    ...
	module:{
        rules:[
            // 全局定义 了commonjs的导出方法来导出file变量
            {
                test:require.resolve('./src/global.js')
                use:'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse'
            }
        ]
    }
}
```

### 7.8 加载polyfills

**注：现目前建议不再使用polyfill，而是改为core.js**

本地安装 polyfill

```shell
npm install @babel/polyfill -D
```

然后直接引入到主bundle文件中

```javascript
import '@babel/polyfill'

// 当前主bundle文件
// 业务代码
```

#### 进一步优化polyfills

不建议直接使用 Import @babel/polyfill 。会导致全局引入整个polyfill 包，体积大且污染全局环境。

babel-preset-env package 通过 browserlist 来转译那些浏览器中不支持的特性。preset使用 useBuiltIns 选项，默认false，这种方式可以将全局 babel-polyfill 导入，改进为细粒度更高的import格式

>  本地安装 @babel/preset-env 及相关包

```shell
npm install core-js@3 babel-loader @babel/core @babel/preset-env -D
```

在webpack.config.js中配置

```javascript
module.exports={
	...
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            [
                                
                                '@babel/preset-env',
                                {
                                    targets:[
                                        'last 1 version',
                                        '> 1%'
                                    ],
                                    useBuiltIns:'usage',
                                    corejs:3
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
    
}
```

### 7.9 构建Library

配置 webpack.config.js

```javascript
const path = require('path')
module.exports = {
  mode:'production',
  entry:'./src/app.js',
  experiments:{ //当library类型为module时 此项必填
	outputModule:true 
  }
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'mylib.js',
    library:{
        // name:'mylib', 当type为module时，不需要name
        type:'module' // 可选 commonjs 
    }
  },
}
```

想要同时支持commonJs和module时，使用umd规范配置

```javascript
module.exports = {
	...
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'mylib.js',
        library:{
			name:'mylib',
            type:'umd'
        },
        globalObject:'globalThis'
    },
}
```

#### 创建一个library

使用npm初始化项目后，安装webpack、webpack-cli 和 lodash

```shell
npm init -y
```

```shell
npm install webpack webpack-cli lodash -D
```

将lodash安装位devDependencies 而非 dependencies ，这样就不需要打包到库，减少包体积

```javascript
module.exports = {
	...
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'mylib.js',
        library:{
			name:'mylib',
            type:'umd'
        },
        globalObject:'globalThis'
    },
    externals:{
        lodash:{
            commonjs:'lodash',
            amd:'lodash',
            root:'_'
        }
    }
}
```

#### 发布为npm-package

```shell
npm config get registry
npm adduser
// 然后输入用户名密码邮箱登录
npm publish
```

### 7.10 模块联邦（Module Federation）

模块联邦是 Webpack5 新内置的一个重要功能，可以让跨应用间真正做到模块共享， [webpack-5-module-federation-a-game-changer-in-javascript-architecture](https://link.zhihu.com/?target=https%3A//indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/%23its-important-to-note-these-are-special-entry-points-they-are-only-a-few-kb-in-size-containing-a-special-webpack-runtime-that-can-interface-with-the-host-it-is-not-a-standard-entry-point--7/) 这篇文章了解什么是 “模块联邦” 功能。



原知乎链接：https://zhuanlan.zhihu.com/p/115403616

#### 使用模块联邦

模块联邦本身是一个普通的 Webpack 插件 `ModuleFederationPlugin`，插件有几个重要参数：

`name` 当前应用名称，需要全局唯一。

`remotes` 可以将其他项目的 `name` 映射到当前项目中。

`exposes` 表示导出的模块，只有在此申明的模块才可以作为远程依赖被使用。

`shared` 是非常重要的参数，制定了这个参数，可以让远程加载的模块对应依赖改为使用本地项目的 React 或 ReactDOM。

```javascript
const { ModuleFederationPlugin } = require('webpack').container
module.exports={
    ...
    plugins:[
        ...
        new ModuleFederationPlugin({
            name:'nav',
            filename:'remoteEntry.js',
            remote:{
                app_two: "app_two_remote",
        		app_three: "app_three_remote"
            },
            exposes:{
                AppContainer: "./src/App"
            },
            shared: ["react", "react-dom", "react-router-dom"]
        })
    ]
}
```

比如设置了 `remotes: { app_tw0: "app_two_remote" }`，在代码中就可以直接利用以下方式直接从对方应用调用模块：

```javascript
import { Search } from "app_two/Search";
```

这个 `app_two/Search` 来自于 `app_two` 的配置：

```javascript
// app_two 的 webpack 配置
export default {
  plugins: [
    new ModuleFederationPlugin({
      name: "app_two",
      library: { type: "var", name: "app_two" },
      filename: "remoteEntry.js",
      exposes: {
        Search: "./src/Search"
      },
      shared: ["react", "react-dom"]
    })
  ]
};
```

正是因为 `Search` 在 `exposes` 被导出，我们因此可以使用 `[name]/[exposes_name]` 这个模块，这个模块对于被引用应用来说是一个本地模块。

### 7.11 通用构建优化

#### 通用环境提升构建性能

将webpack和nodeJs更新到最新版本

将loader应用于最少数量的必要模块

```javascript
const path = require('path')

module.exports = {
    ...
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.resolve(__diranme,'src'),  // 只解析src目录下的文件
                loader:'babel-loader'
            }
        ]
    }
}
```

#### 引导（boostrap）

每个额外的 loader/plugin 都有其启动时间，尽量少地使用工具

#### 提高解析速度

- 减少resolve.modules、resolve.extensions、resolve.mainFiles、resolve.descriptionFiles 中条目数量，因为他们会增加文件系统调用的次数

- 如果不适用symlinks（例如 npm link 或 yarn link），可以设置resolve.symlinks: false

- 如果你使用自对应resolve plugin 规则，并且没有指定context 上下文，可以设置 resolve.cacheWithContext: false

#### 小即是快

减少编译结果的整体大小，以提高构建性能。尽量保持chunk体积小



- 使用数量更少/体积更小的 library

- 在多页面应用程序中使用 SplitChunksPlugin，并开启async模式

- 移除未引用代码

- 只编译当前正在开发的代码

#### 持久化缓存

在webpack 配置中使用 cache 选项。使用 package.json 中的postinstall 清除缓存目录。

将 cache 类型设置为内存或者文件系统。memory 选项很简单，它告诉 webpack 在内存中存储缓存，不允许额外的配置：

```javascript
module.exports={
	//
	cache:{
		type:'memory'
	}
}
```

#### 自定义 plugin/loader

对它们进行概要分析，以免在此处引入性能问题

#### progress plugin

将 ProgressPlugin 从 webpack 中删除，可以缩短一定的构建时间

#### dll

使用 DllPlugin 为更改不频繁的代码生成单独的编译结果。这可以提高应用程序的编译速度，尽管它增加了构建过程的复杂度。

在根目录中新建webpack.dll.config.js

```javascript
const path = require('path')
const webpack = require('webpack')

module.exports={
  mode:'production',
  entry:{
    jquery:['jquery']
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'dll'),
    library:'[name]_[hash]'
  },
  plugins:[
    new webpack.DllPlugin({
      name:'[name]_[hash]',
      path:path.resolve(__dirname,'dll/manifest.json')
    })
  ]
}
```

并在package.json 中定义脚本

```json
{
    "scripts":{
        "dll":"webpack --config ./webpack.dll.config.js"
    }
}
```

安装 add-asset-html-webpack-plugin 并在webpack.conig.js 中配置

```shell
npm install add-asset-html-webpack-plugin -D
```

```javascript
const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
module.exports = {
  mode:'production',
  entry:'./src/index.js',
  plugins:[
      new webpack.DllReferencePlugin({
          mainfest: path.resolve(__dirname,'./dll/manifest.json')
      }),
      new AddAssetHtmlPlugin({
          filepath:path.resolve(__dirname,'./dll/jquery.js'),
          publicPath:'./'
      })
  ]
}
```

#### worker 池（worker pool）

thread-loader 可以将非常消耗资源的loader分流给一个 worker pool

安装相关插件

```shell
npm install thread-loader babel-loader @babel/core @babel/preset-env -D
```

配置webpack.config.js

```javascript
module.exports={
	...
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:['@babel/preset-env']
						}
					},
                    {
                        loader:'thread-loader',
                        options:{
                            workers:2 // 调用CPU核心数
                        }
                    }
				]
			}
		]
	}
}
```

### 7.12 开发环境提升构建性能

#### 增量编译

使用webpack的 watch mode（监听模式）。而不使用其他工具来watch文件和调用webpack。内置的watch mode 会记录时间戳并将此信息传递给 compilation 以使缓存失效。

在某些配置环境中，watch mode 会回退到 pull mode （轮询模式）。监听许多文件会导致 CPU 大量负载。在这些情况下，可以使用 watchOptions.poll 来增加轮询的间隔。

#### 在内存中编译

下面几个工具通过在内存中（而不是写入磁盘）编译和 serve 资源来提高性能：

- webpack-dev-server

- webpack-hot-middleware

- webpack-dev-middleware

#### stats.toJson加速

webpack 4 默认使用 stats.toJson() 输出大量数据。除非在增量步骤中做必要统计，否则请避免获取 stats 对象的部分内容。

webpack-dev-server 在 v3.1.3 以后的版本，包含一个重要的性能修复，即最小化每个增量构建步骤中，从stats对象获取数据量

#### Devtool

注意：不同的 devtool 设置会导致性能差异

- “eval” 具有最好的性能，但并不能转译代码

- 如果接受稍差的 map 质量，可以使用 cheap-source-map 变体配置进行增量编译

- 使用 eval-source-map 变体配置进行增量编译

在多数情况下，最佳选择仍是 eval-cheap-module-source-map

#### 避免在生产环境才用到的工具

某些 utility, plugin 和 loader 都只用于生产环境。例如，在开发环境下使用TerserPlugin 来 minify(压缩) 和 mangle(混淆破坏) 代码是没有意义的。通常在开发环境下，应该排除以下这些工具︰



- TerserPlugin

- [fullhash]/[chunkhash]/[contenthash]

- AggressiveSplittingPlugin

- AggressiveMergingPlugin

- ModuleConcatenationPlugin

#### 最小化entry chunk

Webpack 只会在文件系统中输出已经更新的 chunk。某些配置选项(HMR,
output.chunkFilename的[name]/[chunkhash]/[contenthash]，[fullhash])来说，除了对已经更新的chunk无效之外，对于entry chunk 也不会生效。
确保在生成entry chunk时，尽量减少其体积以提高性能。下面的配置为运行时代码创建了一个额外的chunk，所以它的生成代价较低:

```javascript
module.exports = {
	...
	optimization:{
		runtimeChunk:true,
	}
}
```

#### 避免额外的优化步骤

Webpack通过执行额外的算法任务，来优化输出结果的体积和加载性能。这些优化适用于小型代码库，但是在大型代码库中却非常耗费性能:

```javascript
module.exports={
    ...
    optimization:{
        removeAvailableModules:false,
        removeEmptyChunks:false,
        splitChunks:false
    }
}
```

#### 输出结果不携带路径信息

Webpack 会在输出的bundle 中生成路径信息。然而，在打包数千个模块的项目中，这会导致造成垃圾回收性能压力。在 options.output.pathinfo 设置中关闭：

```javascript
module.exports = {
    ...
    output: {
    	pathinfo: false,
	}，
};
```

#### Node.js版本8.9.10-9.11.1

Node.js v8.9.10- v9.11.1中的ES2015 Map 和 Set 实现，存在性能回退。Webpack大量地使用这些数据结构，因此这次回退也会影响编译时间。
之前和之后的Node.js版本不受影响。

#### TypeScript Loader

你可以为loader传入transpileOnly选项，以缩短使用ts-loader时的构建时间。使用此选项，会关闭类型检查。如果要再次开启类型检查，请使用ForkTsCheckerWebpackPlugin。使用此插件会将检查过程移至单独的进程，可以加快TypeScript 的类型检查和ESLint 插入的速度。

```javascript
module.exports = {
    ...
    test: .tsx?$/,
    use: [
        {
            loader: "ts-loader " ,
    		options: {
            	transpileonly: true,
			},
        }，
    ],
};
```

