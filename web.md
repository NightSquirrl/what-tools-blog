https://sunfei123456.github.io/Blogs/VueStudy/Vue.js%20%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0.html
https://segmentfault.com/a/1190000044147982
https://vue3js.cn/reactivity/reactive.html
https://vue3js.cn/vue-composition-api/#reactive


redux :https://juejin.cn/post/6977992027459813407


多前端笔记:https://lq782655835.github.io/blogs/vue/vue3-code-2.reactive.html


定义: 接收一个普通对象然后返回该普通对象的响应式代理。

```javascript
const obj = reactive({ count: 0 })
```

响应式转换是“深层的”：会影响对象内部所有嵌套的属性。基于 `ES2015` 的 `Proxy` 实现，返回的代理对象不等于原始对象。

## 提要

> 1. 如果目标对象是一个只读的响应数据,则直接返回目标对象
>
>     1. ```javascript
>         let objReadonly = readonly(obj)
>         // 传给reactive方法的参数已被readonly处理过
>         let state = reactive(objReadonly) 
>         ```
> 2. 是否是对象,不是对象返回目标
> 3. 目标已经是一个proxy,直接返回目标
> 4. 目标是否可以被观察
>
>     1. 没有搭上__v_skip标记
>     2. 是可以观察的值的类型
>     3. 没有被frozen
> 5. 代理

### 代码

```javascript
export function reactive(target: object) {
  // 否则调用  createReactiveObject 创建 observe
  return createReactiveObject(
    target, 
    false,
    mutableHandlers,
    mutableCollectionHandlers
  )
}


// Target 目标对象
// isReadonly 是否只读 
// baseHandlers 基本类型的 handlers
// collectionHandlers 主要针对(set、map、weakSet、weakMap)的 handlers
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  // 如果不是对象
  if (!isObject(target)) {
    // 在开发模式抛出警告，生产环境直接返回目标对象
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }

  // 如果目标对象已经是个 proxy 直接返回
  if (target.__v_raw && !(isReadonly && target.__v_isReactive)) {
    return target
  }

  // 检查目标对象是否能被观察, 不能直接返回
  if (!canObserve(target)) {
    return target
  }

  // 使用 Proxy 创建 observe 
  const observed = new Proxy(
    target,
    baseHandlers
  )

 // 打上相应标记
  def(
    target,
    isReadonly ? ReactiveFlags.readonly : ReactiveFlags.reactive,
    observed
  )

  return observed
}

// 同时满足3个条即为可以观察的目标对象
// 1. 没有打上__v_skip标记
// 2. 是可以观察的值类型
// 3. 没有被frozen
const canObserve = (value: Target): boolean => {
  return (
    !value.__v_skip &&
    isObservableType(toRawType(value)) &&
    !Object.isFrozen(value)
  )
}

// 可以被观察的值类型
const isObservableType = /*#__PURE__*/ makeMap(
  'Object,Array,Map,Set,WeakMap,WeakSet'
)
```




https://www.yuque.com/xiumubai/doc



https://juejin.cn/post/6999922290628509732



https://juejin.cn/post/7077102548640858125


https://typescript.p6p.net/typescript-tutorial/tsconfig.json.html





## 1. GET 和 POST 请求的区别

**应用场景** :  `GET`属于((20250418110635-e6urerx '幂等请求')),`POST` 不属于幂等请求,会修改服务端的数据

**是否缓存** : 浏览器一般会对`GET`进行缓存,很少会对`POST`进行缓存

	浏览器对POST请求的缓存行为与GET请求有所不同。默认情况下，浏览器不会对POST请求的响应进行缓存。这是因为POST请求通常用于提交数据或执行操作，这些操作可能会导致服务器状态的改变，不适合被缓存。

**发送的报文格式 :**  Get 请求的报文中实体部分为空，Post 请求的报文中实体部分一般为向服务器发送的数据。

**安全性** : `GET`的参数放在URL中被暴露出来,相对`POST`来说不太安全

**请求长度** : 不同的浏览器对`GET`的限制存在差异,属于浏览器规定不属于`RFC`

**参数类型** : `POST`支持更多的数据类型


## 2. POST与PUT的区别

* `PUT` 请求是向服务器发送数据,从而修改数据的内容,但是不会增加数据的种类,简单的说就是,`PUT` N次,结果不会发生改变[更新数据]
* `POST` 他会创建新的内容

## 3. 常见的HTTP请求头和响应头

### 请求头

* Accept:浏览器能够处理的内容类型
* Accept-Charset:浏览器能够显示的字符集
* Accept-Encoding：浏览器能够处理的压缩编码
* Accept-Language：浏览器当前设置的语言
* Connection：浏览器与服务器之间连接的类型
* Cookie：当前页面设置的任何Cookie
* Host：发出请求的页面所在的域
* Referer：发出请求的页面的URL
* User-Agent：浏览器的用户代理字符串

### 响应头

* Date：表示消息发送的时间，时间的描述格式由rfc822定义
* server:服务器名称
* Connection：浏览器与服务器之间连接的类型
* Cache-Control：控制HTTP缓存
* content-type:表示后面的文档属于什么MIME类型

#### 常见的 Content-Type

（1）application/x-www-form-urlencoded：浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。该种方式提交的数据放在 body 里面，数据按照 key1\=val1&key2\=val2 的方式进行编码，key 和 val 都进行了 URL转码。

（2）multipart/form-data：该种方式也是一个常见的 POST 提交方式，通常表单上传文件时使用该种方式。

（3）application/json：服务器消息主体是序列化后的 JSON 字符串。

（4）text/xml：该种方式主要用来提交 XML 格式的数据。

## 4. 常见的HTTP请求方法

* GET: 向服务器获取数据；
* POST：将实体提交到指定的资源，通常会造成服务器资源的修改；
* PUT：上传文件，更新数据；
* DELETE：删除服务器上的对象；
* HEAD：获取报文首部，与GET相比，不返回报文主体部分；
* OPTIONS：询问支持的请求方法，用来跨域请求；
* CONNECT：要求在与代理服务器通信时建立隧道，使用隧道进行TCP通信；
* TRACE: 回显服务器收到的请求，主要⽤于测试或诊断。

## 5. OPTIONS请求方法及使用场景

* 获取服务器支持的所有HTTP请求方法；
* 用来检查访问权限。例如：在进行 CORS 跨域资源共享时，对于复杂请求，就是使用 OPTIONS 方法发送嗅探请求，以判断是否有对指定资源的访问权限。


简单的说,获取指定的`URL`支持的请求方法,允许的来源,允许的请求头

## 6. HTTP1.0和HTTP1.1

**连接方面** 1.0 使用非持久连接,1.1默认使用持久连接.持久连接能够让多个`http`请求复用同一个TCP连接,避免每次都需要建立连接的时延.

**资源请求** 1.0存在浪费带宽的情况,比如,客户端只需要对象的一部分,但是服务器执行将整个对象发送过来,并且不支持断点续传,1.1引入range头域,他只允许请求资源的某个部分,返回码206

**缓存方面** 1.0使用If-Modified-Since,Expires作为缓存的判断标准. 1.1 引入更多的缓存策略,Etag,

**http1.1 中新增了 host 字段**  用来指定服务器的域名。http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个IP地址。因此有了 host 字段，这样就可以将请求发往到同一台服务器上的不同网站。

**请求方法**  http1.1 相对于 http1.0 还新增了很多**请求方法**，如 PUT、HEAD、OPTIONS 等。


## 7. HTTP 1.1 和 HTTP 2.0 的区别

**二进制协议**  HTTP/2 是二进制协议。HTTP/1.1 报文的请求头必须是文本(ASCII编码),数据体可以是文本也可以是二进制.`HTTP/2`彻底是是一个二进制协议,头信息和数据体都是二进制,统称为帧.可以分为头信息帧,和数据帧.帧的概念,是他实现多路复用的基础.

**多路复用**  `HTTP/2`实现了多路复用,复用`TCP`连接,但是在一个连接里面,客户端和服务端多都可以同时发送多个请求或者回应,而且不同按照顺序发送,这样避免`头对堵塞`的问题

**数据流**  `HTTP/2`使用数据流的概念,因为 HTTP/2 的数据包是不按顺序发送的，同一个连接里面连续的数据包，可能属于不同的请求。因此，必须要对数据包做标记，指出它属于哪个请求。HTTP/2 将每个请求或回应的所有数据包，称为一个数据流。每个数据流都有一个独一无二的编号。数据包发送时，都必须标记数据流 ID ，用来区分它属于哪个数据流.

**头信息压缩**  HTTP/2 实现了头信息压缩，由于 HTTP 1.1 协议不带状态，每次请求都必须附上所有信息。所以，请求的很多字段都是重复的，比如 Cookie 和 User Agent ，一模一样的内容，每次请求都必须附带，这会浪费很多带宽，也影响速度。HTTP/2 对这一点做了优化，引入了头信息压缩机制。一方面，头信息使用 gzip 或 compress 压缩后再发送；另一方面，客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就能提高速度了。

**服务器推送**  HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送。使用服务器推送提前给客户端推送必要的资源，这样就可以相对减少一些延迟时间。这里需要注意的是 http2 下服务器主动推送的是静态资源，和 WebSocket 以及使用 SSE 等方式向客户端发送即时数据的推送是不同的。


## 8. HTTP和HTTPS协议的区别

HTTP和HTTPS协议的主要区别如下：

* HTTPS协议需要CA证书，费用较高；而HTTP协议不需要；
* HTTP协议是超文本传输协议，信息是明文传输的，HTTPS则是具有安全性的SSL加密传输协议；
* 使用不同的连接方式，端口也不同，HTTP协议端口是80，HTTPS协议端口是443；
* HTTP协议连接很简单，是无状态的；HTTPS协议是有SSL和HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP更加安全。

## 9. GET方法URL长度限制的原因

实际上HTTP协议规范并没有对get方法请求的url长度进行限制，这个限制是特定的浏览器及服务器对它的限制。

IE对URL长度的限制是2083字节(2K+35)。由于IE浏览器对URL长度的允许值是最小的，所以开发过程中，只要URL不超过2083字节，那么在所有浏览器中工作都不会有问题。

>  GET的长度值 = URL（2083）- （你的Domain+Path）-2（2是get请求中?=两个字符的长度）

下面看一下主流浏览器对get方法中url的长度限制范围：

* Microsoft Internet Explorer (Browser)：IE浏览器对URL的最大限制为2083个字符，如果超过这个数字，提交按钮没有任何反应。
* Firefox (Browser)：对于Firefox浏览器URL的长度限制为 65,536 个字符。
* Safari (Browser)：URL最大长度限制为 80,000 个字符。
* Opera (Browser)：URL最大长度限制为 190,000 个字符。
* Google (chrome)：URL最大长度限制为 8182 个字符。

## 10. 当在浏览器中输入 Google.com 并且按下回车之后发生了什么？


## 11. 对keep-alive的理解

HTTP1.0 中默认是在每次请求/应答，客户端和服务器都要新建一个连接，完成之后立即断开连接，这就是**短连接**。当使用Keep-Alive模式时，Keep-Alive功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接，这就是**长连接**。其使用方法如下：

* HTTP1.0版本是默认没有Keep-alive的（也就是默认会发送keep-alive），所以要想连接得到保持，必须手动配置发送Connection: keep-alive字段。若想断开keep-alive连接，需发送Connection:close字段；
* HTTP1.1规定了默认保持长连接，数据传输完成了保持TCP连接不断开，等待在同域名下继续用这个通道传输数据。如果需要关闭，需要客户端发送Connection：close首部字段。

Keep-Alive的**建立过程**：

* 客户端向服务器在发送请求报文同时在首部添加发送Connection字段
* 服务器收到请求并处理 Connection字段
* 服务器回送Connection:Keep-Alive字段给客户端
* 客户端接收到Connection字段
* Keep-Alive连接建立成功

**服务端自动断开过程（也就是没有keep-alive）** ：

* 客户端向服务器只是发送内容报文（不包含Connection字段）
* 服务器收到请求并处理
* 服务器返回客户端请求的资源并关闭连接
* 客户端接收资源，发现没有Connection字段，断开连接

**客户端请求断开连接过程**：

* 客户端向服务器发送Connection:close字段
* 服务器收到请求并处理connection字段
* 服务器回送响应资源并断开连接
* 客户端接收资源并断开连接

开启Keep-Alive的**优点：**

* 较少的CPU和内存的使⽤（由于同时打开的连接的减少了）；
* 允许请求和应答的HTTP管线化；
* 降低拥塞控制 （`TCP`连接减少了）；
* 减少了后续请求的延迟（⽆需再进⾏握⼿）；
* 报告错误⽆需关闭`TCP`连；

开启Keep-Alive的**缺点**：

* 长时间的`TCP`连接容易导致系统资源无效占用，浪费系统资源。

## 12. 页面有多张图片，HTTP是怎样的加载表现？

* 在HTTP 1下，浏览器对一个域名下最大TCP连接数为6，所以会请求多次。可以用**多域名部署**解决。这样可以提高同时请求的数目，加快页面图片的获取速度。
* 在HTTP 2下，可以一瞬间加载出来很多资源，因为，HTTP2支持多路复用，可以在一个TCP连接中发送多个HTTP请求。

## 13. HTTP2的头部压缩算法是怎样的？

HTTP2的头部压缩是HPACK算法。在客户端和服务器两端建立“字典”，用索引号表示重复的字符串，采用哈夫曼编码来压缩整数和字符串，可以达到50%\~90%的高压缩率。

具体来说:

* 在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送；
* 首部表在HTTP/2的连接存续期内始终存在，由客户端和服务器共同渐进地更新；
* 每个新的首部键值对要么被追加到当前表的末尾，要么替换表中之前的值。

## 14. HTTP请求报文的是什么样的？

四部分组成:

* 请求行
* 请求头
* 空行
* 请求体

1. 请求⾏包括：请求⽅法字段、URL字段、HTTP协议版本字段。它们⽤空格分隔。例如，GET /index.html HTTP/1.1。

2. 请求头部:请求头部由关键字/值对组成，每⾏⼀对，关键字和值⽤英⽂冒号“:”分隔

    1. User-Agent：产⽣请求的浏览器类型。
    2. Accept：客户端可识别的内容类型列表。
    3. Host：请求的主机名，允许多个域名同处⼀个IP地址，即虚拟主机。
3. 请求体: post put等请求携带的数据

## 15. HTTP响应报文的是什么样的？

>  响应行 响应头 空行 响应体

* 响应⾏：由网络协议版本，状态码和状态码的原因短语组成，例如 HTTP/1.1 200 OK 。
* 响应头：响应部⾸组成
* 响应体：服务器响应的数据


## 16. HTTP协议的优缺点

HTTP 是超文本传输协议，它定义了客户端和服务器之间交换报文的格式和方式，默认使用 80 端口。它使用`TCP`作为传输层协议，保证了数据传输的可靠性。


HTTP协议具有以下**优点**：

* 支持客户端/服务器模式
* **简单快速**：客户向服务器请求服务时，只需传送请求方法和路径。由于 HTTP 协议简单，使得 HTTP 服务器的程序规模小，因而通信速度很快。
* **无连接**：无连接就是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接，采用这种方式可以节省传输时间。
* **无状态**：HTTP 协议是无状态协议，这里的状态是指通信过程的上下文信息。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能会导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就比较快。
* **灵活**：HTTP 允许传输任意类型的数据对象。正在传输的类型由 Content-Type 加以标记。


## 17. 说一下HTTP 3.0

HTTP/3基于UDP协议实现了类似于TCP的多路复用数据流、传输可靠性等功能，这套功能被称为QUIC协议。

1. 流量控制、传输可靠性功能：QUIC在UDP的基础上增加了一层来保证数据传输可靠性，它提供了数据包重传、拥塞控制、以及其他一些TCP中的特性。
2. 集成TLS加密功能：目前QUIC使用TLS1.3，减少了握手所花费的RTT数。
3. 多路复用：同一物理连接上可以有多个独立的逻辑数据流，实现了数据流的单独传输，解决了TCP的队头阻塞问题。
4. 快速握手：由于基于UDP，可以实现使用0 \~ 1个RTT来建立连接。







# Service Worker
## 什么是`Service Worker`

能够拦截当前网站的所有请求,如果可以直接使用缓存,直接返回缓存,否则再转给服务器.在**Service Worker** 中可以做拦截客户端的请求、向客户端发送消息、向服务器发起请求等先关操作，其中最重要且广泛的的作用就是离线资源缓存。

### 特性

1. 基于web worker（JavaScript主线程的独立线程，如果执行消耗大量资源的操作也不会堵塞主线程）
2. 在web worker的基础上增加了离线缓存的能力
3. 本质上充当Web应用程序（服务器）与浏览器之间的代理服务器
4. 创建有效的离线体验（将一些不常更新的内容缓存在浏览器，提高访问体验）
5. 由事件驱动的,具有生命周期
6. 可以访问cache和indexDB
7. 支持消息推送
8. 并且可以让开发者自己控制管理缓存的内容以及版本
9. 可以通过 postMessage 接口把数据传递给其他 JS 文件

### 注意点

1. 不能访问DOM(因为service worker运行在worker上下文)
2. 不能进行同步操作(如 localStorage)
3. 只能在`HTTPS`中使用或者本地开发的`localhost`
4. 独立的生命周期

    1. Service Worker的生命周期与页面无关(关联页面未关闭时，它也可以退出，没有关联页面时，它也可以启动）注册Service Worke后，浏览器会默默地在背后安装Service Worke

## 生命周期

其生命周期分为**首次加载**和**更新加载**

首次访问页面时候**Service Worker**会立即被下载下来并进行尝试安装,安装成功后就会尝试去激活等操作

更新在默认情况下**Service Worker** 一定会每24小时被下载一次,如果下载的文件是最新文件,那么它就会被重新注册和安装但不会被激活<span data-type="text" style="color: var(--b3-font-color9);">[此时该时序称为working in waiting]</span>，当不再有页面使用旧的 **Service Worker** 的时候，它就会被激活。

### 首次加载

1. 注册(register)
2. 安装(installing)
3. 活动(activated)或者异常(error)
4. 空闲(idle)
5. 拦截(fetch)或终止(terminated)

### 更新加载

1. 更新(update)
2. 安装(installing)
3. 等待活动(waiting)或者异常(error)

## 注册

### 直接注册

```javascript
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
```

### 页面加载完成注册

```javascript
if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
       navigator.serviceWorker.register('sw.js');
  });
}
```

### 注册作用域(scope)

```javascript
if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('sw.js', { scope: './' });
}
```

>  **scope**表示定义**service worker**注册范围的URL ；**service worker**可以控制的URL范围。通常是相对URL。默认值是基于当前的location，并以此来解析传入的路径.

在同一个 Origin 下，我们可以注册多个 Service Worker,但是注意,这些 Service Worker 所使用的 scope 必须是唯一且不同的

```javascript
if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('sw.js', { scope: './' });
  
  navigator.serviceWorker.register('/sw2/sw.js', { scope: './sw2' });
}
```

## 安装

sw注册完成之后,浏览器就开始尝试进行安装操作了可以通过安装事件进行监听(sw内可以使用**self**也可以使用this,每个sw仅会安装一次,除非发生更新)

### sw.js

```javascript
self.addEventListener('install', function (event) {
  console.log('Service Worker install');
});
```

安装过程中缓存一些静态文件

```javascript
cons CACHE_NAME="site:static:file:v1"

self.addEventListener('install', function (event) {
  
  let url_list=[
      '/',
	 'xxx'
  ];
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        consloe.log("缓存打开成功");
        cache.addAll(url_list).then(function(){
            consloe.log("所有资源都已获取并缓存");
        });
      }).catch(function(error) {
          console.log('缓存打开失败:', error);
        })
  );
});
```

因为缓存文件需要时间所以可以通过**waitUntil**来防止缓存未完成就关闭**serviceWorker**一旦所有文件缓存成功那么**serviceWorker**就安装成功了,只要一个缓存失败就会导致安装失败**waitUntil**也会通过内部**promise**来获取安装事件和是否成功

## 激活

一旦首次安装成功后或者**sw**进行更新就会触发**activated**相对首次安装会直接进入激活状态更新触发会显得比较复杂比如

**A**为老的**sw**
**B**为新的**sw**
**B**进入安装更新阶段时候**A**还在工作状态那么**B**就会进waiting阶段,只有等到**A**被terminated后,**B**才能完全替换**A**的工作

**activated**阶段可以做很多有意义的事情，比如更新存储在cache中的key和value,可以清理旧缓存和旧的service worker关联的东西

```javascript
self.addEventListener('activate', function(event) {
  console.log('Service Worker activate');
    event.waitUntil(
        // 遍历 caches 里所有缓存的 keys 值
        caches.keys().then(function() {
          return caches.keys().then(function (keys) {
              const all = keys.map(function (key) {
                  if (key.indexOf(CACHE_NAME) !== -1){
                      console.log('[SW]: Delete cache:' + key);
                      return caches.delete(key);
                  }
              });
              return Promise.all(all);
          });
      })
    );
});
```

## 空闲

**idle**空闲状态一般是不可见的，这种一般说明sw的事情都处理完毕了,然后处于闲置状态了,浏览器会周期性的轮询，去释放处于idle的sw占用的资源

## 终止

**terminated**终止状态一般触发条件由下面几种方式

1. 关闭浏览器一段时间
2. 手动清除serviceworker
3. 在sw安装时直接跳过waiting阶段

```javascript
self.addEventListener('install', function(event) {
    //跳过等待过程
    self.skipWaiting();
});
```

## 拦截

**fetch**拦截阶段是**sw**最重要阶段,主要用于拦截代理所有指定的请求,然后进行二次相应的处理操作通过这个阶段我们可以实现很多有意思的操作

### 输出缓存

```javascript
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                //该fetch请求已经缓存
                if (response) {
                    return response;
                }
                return fetch(event.request);
                }
            )
    );
});
```

### 输出JSON

```javascript
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                //该fetch请求已经缓存
                if (response) {
                    return response;
                }
                return fetch(event.request);
                }
            )
    );
});
```

### 输出HTML

```javascript
const html = `<!DOCTYPE html>
<body>
  <h1>Hello World</h1>
  <p>This markup was generated by a Cloudflare Worker.</p>
</body>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
```

### 重定向URL

```javascript
const destinationURL = "https://www.baidu.com"
const statusCode = 301

async function handleRequest(request) {
  return Response.redirect(destinationURL, statusCode)
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})
```

### 缓存请求

```javascript
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                //该fetch请求已经缓存
                if (response) {
                    return response;
                }
                return fetch(event.request)
                  .then(function(response){
                
                  // 检查是否响应成功 basic是判断是否为源发起的请求不缓存第三方资源
                  if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                  }
            
                  // response是一个数据流 因为浏览器会消耗掉流所有先克隆一个流 响应体只会被消耗一次
                  let responseClone = response.clone();
            
                  caches.open(CACHE_NAME)
                  .then(function(cache) {
                    cache.put(event.request, responseClone);
                  });
            
            
                  return response;
                   })
             })
    );
});
```

### 开发环境的简化配置

因为**Service Worker**只有在特定情况下才会下载更新这对我们开发很不方便我们可以通过浏览器开发工具勾选**Update on reload**  选中之后每次我们刷新都能够使用最新的**Service Worker**文件

### 通信

>  页面发送数据

```javascript
if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('sw.js', { scope: './' })
    .then(function (reg) {
      console.log('success', reg);
      navigator.serviceWorker.controller && 
        navigator.serviceWorker.controller.postMessage("hello im page");
    });
}
```

为了保证 Service Worker 能够正常接收到来自页面的信息,可以在它被注册完成之后再发送信息
**navigator.serviceWorker.controller**  为**ServiceWorker**实例 我们需要在**ServiceWorker** 实例上调用**postMessage**注意当我们使用的scope不是当前Origin **navigator.serviceWorker.controller**将为**Null**不可使用

>  接收消息 sw.js

```javascript
this.addEventListener('message', function (event) {
  console.log(event.data);
})
```

### 不同的范围域

> 发送消息

```javascript
if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './sw' })
    .then(function (reg) {
      console.log('success', reg);
      reg.active.postMessage("sw.js");
    })
  navigator.serviceWorker.register('./sw2.js', { scope: './sw2' })
    .then(function (reg) {
      console.log('success', reg);
      reg.active.postMessage("sw2.js");
    })
}
```

>  sw.js

```javascript
this.addEventListener('message', function (event) {
  console.log(event.data);
});
```

>  sw2.js

```javascript
this.addEventListener('message', function (event) {
  console.log(event.data);
});
```

但是由于**Service Worker**  的激活是异步的,因此首次注册 **Service Worker**  的时候可能**Service Worker**  不会被立刻激活,  **reg.active**  为 **Null**，系统就会报错。

这个时候我们可以采用**Promise**内部轮询逻辑进行处理如果 **Service Worker** 已经被激活那就**resolve**

>  发送

```javascript
if ('serviceWorker' in window.navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(function (reg) {
      return new Promise((resolve, reject) => {
        const interval = setInterval(function () {
          if (reg.active) {
            clearInterval(interval);
            resolve(reg.active);
          }
        }, 50)
      })
    }).then(sw => {
      sw.postMessage("im sw");
    })
```

### SW通信到页面

了解完页面到sw通讯我们现在了解下SW通信到页面不同于页面向 **Service Worker** 发送信息,我们需要在 WindowClient 实例上调用 postMessage 方法才能达到目的,而在页面的JS文件中监听 **navigator.serviceWorker** 的 **message**  事件就可以收到信息

#### 定向发送

>  谁发给我的,我就发给谁

```javascript
this.addEventListener('message', function (event) {
  event.source.postMessage('我是 sw 将发送信息到 page');
});
```

>  接收

```javascript
if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.addEventListener('message', function (e) {
    console.log(e.data);
  });
}
```

#### 批量发送

```javascript
this.clients.matchAll().then(client => {
  client[0].postMessage('我是 sw 将发送信息到 page');
})
```

### 跨端通讯

**Message Channel 消息通道**一种比较好用的通讯方法,使用这种方式能够使得通道两端之间可以相互通信，而不是只能向消息源发送信息

>  页面

```javascript
navigator.serviceWorker.register('sw.js')
    .then(function (reg) {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = e => {
        console.log(e.data); // 此消息从SW发送到页面
      }
      reg.active.postMessage("此消息从页面发送到SW", [messageChannel.por2]);
})
```

>  sw

```javascript
this.addEventListener('message', function (event) {
  console.log(event.data); // 此消息从页面发送到SW
  event.ports[0].postMessage('此消息从SW发送到页面');
});
```

### 两个sw服务之间进行通讯

>  页面

```javascript
var messageChannel = new MessageChannel();

navigator.serviceWorker.register('sw.js')
    .then(function (reg) {
      console.log(reg)
      return new Promise((resolve, reject) => {
        const interval = setInterval(function () {
          if (reg.active) {
            clearInterval(interval);
            resolve(reg.active);
          }
        }, 50)
      })
    }).then(sw => {
      sw.postMessage("此消息从页面发送到SW", [messageChannel.port1]);
    })

navigator.serviceWorker.register('sw2.js')
    .then(function (reg) {
      return new Promise((resolve, reject) => {
        const interval = setInterval(function () {
          if (reg.active) {
            clearInterval(interval);
            resolve(reg.active);
          }
        }, 50)
      })
    }).then(sw => {
      sw.postMessage("此消息从页面发送到SW2", [messageChannel.port2]);
    })
```

>  sw

```javascript
this.addEventListener('message', function (event) {
  console.log(event.data); // 此消息从页面发送到SW
  event.ports[0].onmessage = e => {
    console.log('sw:', e.data); // sw: 此消息从SW2发送到SW1
  }
  event.ports[0].postMessage('此消息从SW发送到SW2');
});
```

> sw2

```javascript
this.addEventListener('message', function (event) {
  console.log(event.data); // 此消息从页面发送到SW2
  event.ports[0].onmessage = e => {
    console.log('sw2:', e.data); // sw2: 此消息从SW发送到SW2
  }
  event.ports[0].postMessage('此消息从SW2发送到SW1');
});
```

首先页面同时给两个不同的sw发送消息并且把信息通道的端口一块发送出去,然后两个不同的sw分别使用设置接收消息的回调函数之后他们之间就可以相互发送接收来自对方的消息了

## 后台同步

假如用户在页面上操作数据点击了提交,而这个时候呢又刚好网络情况不好或者干脆就断网了这个时候页面只能一直在打转。。。。无尽等待直到有网,然后用户就会直接关掉页面这次请求也就中断了,这种情况就出现了两种问题

1. 在Service Worker中监听sync事件
2. 在浏览器中发起后台同步sync
3. 就会触发Service Worker的sync事件,在该监听的回调中进行操作,例如向后端发起请求
4. 然后可以在Service Worker中对服务端返回的数据进行处理

### 页面触发同步

```javascript
if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('sw.js')
 
  navigator.serviceWorker.ready.then(function (registration) {
      var tag = "data_sync";
      document.getElementById('submit-btn').addEventListener('click', function () {
          registration.sync.register(tag).then(function () {
              console.log('后台同步已触发', tag);
          }).catch(function (err) {
              console.log('后台同步触发失败', err);
          });
      });
  });
}
```

由于后台同步功能需要在**Service Worker**注册完成后触发,所有我们可以使用**navigator.serviceWorker.ready**等待注册完成准备好之后使用**registration.sync.register**注册同步事件
**registration.sync**  会返回一个**SyncManager**对象其中包含**register**方法和**getTags方法**

>  register() **Create a new sync registration and return a Promise.**
>
> getTags() **Return a list of developer-defined identifiers for SyncManager registration.**

>  SW监听同步事件

当点击**submit-btn**触发同步事件后接下来的操作就可以交给SW **sync**  处理了

>  sw.js

```javascript
self.addEventListener('sync', function (e) {
  console.log(e);
    console.log(`需要进行后台同步,tag: ${e.tag}`);
  
  var init = {
        method: 'GET'
  };
  
  switch (e.tag){
    case "data_sync":
       var request = new Request(`xxxxx/sync`, init);
        e.waitUntil(
            fetch(request).then(function (response) {
                response.json().then(console.log.bind(console));
                return response;
            })
        );
        break;

  }
});
```













==================================================================================================================================================



>  CommonJS、AMD、CMD、UMD、ES6模块化

## 默认代码的编写模式

```javascript
<script>
  function add(a, b){
    return a+b
  }
  add(1, 2)
</script>
```

### 问题?

1. 代码的的复用率低
2. 全局作用域污染:无法保证不与其他的模块发生变量冲突,而且模块成员之间没有什么关系.
3. 可维护性差


## 命名空间和IIEF

### 命名空间

```javascript
var namespace = {}
namespace.add = function(a, b){ return a + b }
namespace.add(1, 2)
```

#### 缺点：

1. 文件依赖的顺序

    1. ```javascript
        <script src="./jquery.js"></script>
        <script src="./utils.js"></script>
        // 如果 utils.js 依赖于 jquery.js， 那么引用顺序就必须是 jquery 在前面，否则就会报错
        ```

2. 外部可以随意修改内部成员

    1. ```javascript
        // 例如外部调用 
        utils.add = 100
        // 其他地方在调用 utils.add(1,2) 就会报错
        ```


### IIEF: 立即执行函数

> 可以通过立即函数可以达到隐藏细节的目的，这样在模块外部无法修改我们暴露的变量、函数

```javascript
// IIEF
var utils = (function(){
  var module = {}
  module.add = function(a,b){ return a + b }
  return module
})()
utils.add(1, 2)
```

#### 引入依赖

```javascript
var Module = (function($){
  var _$body = $('body')
  var foo = function(){
    console.log(_$body)
  }
  return {
    foo: foo
  }
})(jQuery)
Module.foo()

```

## 为什么要模块化

1. 网页变为单页面应用
2. 复杂度增加
3. 解耦性越来越被需要
4. 部署希望得到优化，提高性能

### 模块化希望带来的好处

1. 避免命名冲突，减少命名空间污染
2. 更好的文件分离，按需加载
3. 更高的复用性
4. 更高的维护性

### 模块化以后带来的问题

页面由引用一个js文件变为引用多个js文件

```javascript
<scirpt src="a.js"></scirpt>
<scirpt src="b.js"></scirpt>
<scirpt src="c.js"></scirpt>
<scirpt src="d.js"></scirpt>
<scirpt src="e.js"></scirpt>
<scirpt src="f.js"></scirpt>

```

产生的问题? 请求的文件数量变多,同时可能存在依赖顺序的问题


## 模块化规范

### CommonJs/CJS:用在服务端

>  网页端没有模块化编程时候只是页面 JS 逻辑复杂，但还是可以工作下去，在服务端却一定要有模块，所以JS 发展这么多年，第一个流行的模块化规范却是由服务端的 JS 应用带来的，CommonJS 规范是由 nodejs 发扬光大，这标志着 JS 模块化正式登上舞台

1. 定义模块

    1. 一个单独的文件就是一个模块,每一个模块都是一个单独的作用域,也就是说,在该模块内部定义额度变量,无法被其他模块读取,除非定义的变量为global对象的属性
2. 模块输出

    1. 模块只有一个输出,module.exports对象
3. 暴露模块方式

    1. ```javascript
        export.xxx = value
        module.exports = xxx
        ```

4. 加载模块:

    1. 加载模块使用`require`方法,该方法读取一个文件并执行,返回内部的`module.exports`对象
5. 实现:

    1. 服务器端实现： Node.js
    2. 浏览器端实现：Browserify （Browserify是一个node.js模块，主要用于改写现有的CommonJS模块，使得浏览器端也可以使用这些模块。）
    3. 注意：浏览器不识别require 方法，需要提前编译打包处理
    4. ```javascript
        // utils.js文件
        function add(a,b){
          return a + b
        }
        module.exports = { add }

        // main.js
        var nameModule = require('./utils.js') 
        nameModule.add(1,2)
        ```

缺点：**加载模块是同步的**，只有加载完后才能执行后面的操作；**现加载现用**，在服务器端编程，加载的模块一般存在本地硬盘里，加载起来比较快，不用考虑异步加载的问题，因为 CommonJS 规范比较适用。然后，并不适用于浏览器环境，同步意味着阻塞线程，浏览器资源的加载方式是异步的。

### AMD

>  AMD是`"Asynchronous Module Definition"`的缩写，意思就是"异步模块定义"。

它采用异步加载方式加载模块，模块的加载不影响它后面的语句的运行，所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完毕之后，这个回调函数才会执行。

由于不是 `JS` 原生支持，使用`AMD` 规范进行页面开发需要用到对应的库函数，也就是大名鼎鼎的 `RequireJS`，实际上`AMD`是` requireJS` 在推广过程中对模块定义的规范化的产生。

`RequireJS` 也是采用require() 加载模块，但是不同于 CommonJS，它要求两个参数

```javascript
require([module], callback)
```

第一个参数 module 是一个数组，里面的成员就是要加载的模块，第二个参数是callback 则是加载成功之后的回调函数。

`requireJS`它也定义了一个函数 define, 他是全局变量，用来定义模块：

```javascript
define(id?, dependencies?, factory)
// 第一个参数id,为定义的模块的名称,如果不传属于匿名模块,匿名模块需要在引用的使用需要使用相对路径来引用
// 第二个参数,依赖的其他模块,比如:
// 定义模块
define(['jquery'], function($) {
    return {
        init: function() {
            $('body').append('<h1>Hello AMD</h1>');
        }
    };
});

// 模块的依赖
// 定义模块A
define('moduleA', [], function() {
    return {
        sayA: function() {
            console.log('Module A');
        }
    };
});

// 定义模块B，依赖模块A
define('moduleB', ['moduleA'], function(moduleA) {
    return {
        sayB: function() {
            moduleA.sayA();
            console.log('Module B');
        }
    };
});

// 使用模块B
require(['moduleB'], function(moduleB) {
    moduleB.sayB();
});
```

#### 基本的使用

1. 引入`require.js`

    1. ```javascript
        /** 网页中引入require.js及main.js **/
        <script src="js/require.js" data-main="js/main"></script>
        ```

2. 入口文件配置

    1. ```javascript
        // 首先用config()指定各模块路径和引用名
        require.config({
          baseUrl: "js/lib",
          paths: {
            "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
            "underscore": "underscore.min",
          }
        });
        ```

3. 执行基本操作

    1. ```javascript
        // 执行基本操作
        require(["jquery","underscore"],function($,_){依赖引入的回调
          // some code here
        });
        ```


### CMD

CMD规范是国内发展起来的，就像AMD有一个 requirejs, CMD 有个浏览器的实现 SeaJS. SeaJS 要解决的问题和 requirejs一样，只不过在模块定义方式和模块加载(可以说运行、解析) 时机上有所不同。

在CMD 中，一个模块就是一个文件，代码的书写格式如下：

```javascript
// 定义有依赖的模块
define(function(require, exports, module){
  // 模块代码
  // 引入依赖模块(同步)
  var module2 = require('./module2')
  // 引入依赖模块(异步)
  require.sync("./module3", function(m3){
    // 模块代码
  })
  // 暴露模块
  export.xxx = value
})
```

* require 是可以把其他模块导入进来的一个参数
* exports 是可以把模块内的一些属性和方法导出，
* module 是一个对象，上面存储了与当前模块相关联的一些属性和方法

### AMD和CMD：区别

AMD是依赖关系前置，在定义模块的时候就要声明其依赖的模块

CMD是按需加载依赖就近，只有在用到某个模块的时候再去 require

```javascript
// CMD
define(function(require, exports, module) {
  var a = require('./a')
  a.doSomething()
  // 此处略去 100 行
  var b = require('./b') // 依赖可以就近书写
  b.doSomething()
  // ... 
})

// AMD 默认推荐的是
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
  a.doSomething()
  // 此处略去 100 行
  b.doSomething()
  ...
}) 
```

### UMD

>  `UMD (Universal Module Definition)`，就是一种`javascript`通用模块定义规范，让你的模块能在`javascript`所有运行环境中发挥作用。

UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式, 在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。

```javascript
(function(root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        console.log('是commonjs模块规范，nodejs环境')
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        console.log('是AMD模块规范，如require.js')
        define(factory())
    } else if (typeof define === 'function' && define.cmd) {
        console.log('是CMD模块规范，如sea.js')
        define(function(require, exports, module) {
            module.exports = factory()
        })
    } else {
        console.log('没有模块环境，直接挂载在全局对象上')
        root.umdModule = factory();
    }
}(this, function() {
    return {
        name: '我是一个umd模块'
    }
}))
```

### ES6 modules

>  需要对依赖模块进行编译打包, 使用 **Babel**

```javascript
// a.js
import { age } from './b.js';

console.log(age);
setTimeout(() => {
    console.log(age);
    import('./b.js').then(({ age }) => {
        console.log(age);
    })
}, 100);

// b.js
export let age = 1;

setTimeout(() => {
    age = 2;
}, 10);
// 打开 index.html 引用的是 a.js
// 执行结果：
// 1
// 2
// 2
```

### CommonJS 与ES6的区别

* CommonJS 是运行时候加载，ES6 模块是编译时候输出接口
  原因：因为 CommonJS 加载的时候是一个对象 (即 module.exports 属性)，该对象只有在脚本运行完才会生成；而 ES6 模块不是对象，它的对外接口只是一个静态定义，在代码静态解析阶段就会生成。
  ES6 模块的设计思想是尽量放入静态化，使得在编译时候就确定依赖关系
  而CommonJS 就只能在运行时候确定这些输入和输出的变量
* CommonJS 模块输出的是一个值的复制，ES6 模块输出的值是值的引用
* CommonJS 加载的是整个模块，即将所有的方法全部加载出来，ES6可以单独加载其中某个方法
* CommonJS 中的 this 指向当前模块，ES6 中的 this 指向 undefined
* CommonJS 默认非严格模式，ES6的模块自动采用严格模式












==============================================================================================================================================
### 严格模式的主要特征:

1. **限制全局变量的创建**：

    1. 在严格模式下，未声明的变量赋值会抛出`ReferenceError`，而不是自动创建全局变量。这有助于避免意外的全局变量污染。
    2. ```javascript
        "use strict";
        // 以下代码会抛出错误
        myVar = 42; // ReferenceError: myVar is not defined
        ```

2. **禁止使用八进制字面量**：

    1. 严格模式下，以`0`开头的数字会被视为十进制，而不是八进制，避免潜在的混淆。
    2. ```javascript
        "use strict";
        var octal = 077; // SyntaxError: Octal literals are not allowed in strict mode.
        ```

3. **禁止删除变量、函数和函数参数**：

    1. 严格模式下，`delete`操作符不能用于变量、函数或函数参数，防止意外删除。
    2. ```javascript
        "use strict";
        function test() {
            var x = 10;
            delete x; // SyntaxError: Cannot delete variable 'x'
        }
        ```

4. **禁止重复的参数名称**：

    1. 严格模式下，函数不能有重复的参数名称，避免逻辑错误。
    2. ```javascript
        "use strict";
        function test(a, a) { // SyntaxError: Duplicate parameter names not allowed in strict mode
            // 函数体
        }
        ```

5. **限制**​**​`this`​**​**的值**：

    1. 严格模式下，函数不能有重复的参数名称，避免逻辑错误
    2. ```javascript
        "use strict";
        function test() {
            console.log(this); // 输出: undefined
        }
        test();
        ```

6. **禁止使用**​**​`with`​**​**语句**：

    1. 严格模式下，`with`语句被禁止，因为它们会改变作用域链，导致变量查找变得复杂和难以调试
    2. ```javascript
        "use strict";
        with (obj) { // SyntaxError: 'with' statements are not allowed in strict mode
            // 代码
        }
        ```

7. **提升错误处理**：

    1. 严格模式下，某些潜在的错误会被更早地捕获，例如对不可写的属性进行赋值会抛出`TypeError`。
    2. ```javascript
        "use strict";
        Object.defineProperty(global, 'x', { writable: false });
        x = 5; // TypeError: Cannot assign to read-only property 'x' of global
        ```




==================================================================================================================
内存泄露



const person = [
    { name:'aa',age:20},
    { name:'bb',age:21},
    { name:'cc',age:31},
    { name:'dd',age:10},
];
const averageAge = person.length 
  ? (person.reduce((a, b) => a + b.age, 0) / person.length).toFixed(2)
  : 0;
  console.log(averageAge )
垃圾回收的算法
引用计数
标记清除
新生代/旧生代

闭包
内存泄露与闭包没有任何的关系
function createIncrease() {
    let count = 0;
    return function() {
        return count++
    }
}

let increase = createIncrease();
let handler = functrion() {
    const n = increase ();
   // if(n === 4) {
   // window.removeEventListener('click',handler)
   // handler  = null
   // increase = null
   // }
    console.log(n)
}

window.addEventListener('click',handler )
引起泄露的原因
1. 挂在到全局的变量 且未正确的销毁
2. 闭包未正确的使用
3. 游离的DOM
function test() {
  let el = document.createElement("div");
  document.body.appendChild(el);
  let child = document.createElement("div");
  el.appendChild(child);
  
  document.body.removeChild(el) // 由于 el 变量存在，el及其子元素都不能被GC
  el = null;   // 虽置空了 el 变量，但由于 child 变量引用 el 的子节点，所以 el 元素依然不能被GC
  child = null; // 已无变量引用，此时el可以GC
  
}
​
test();

4. 事件监听器未移除
5. 定时器未清理
6. console
