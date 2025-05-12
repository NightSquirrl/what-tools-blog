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

