---
title: 🦋 8-网络请求
tag:
  - harmony
star: true
---

# 网络请求

- http数据请求
- websocket
- socket



## HTTP

### 导入模块

```ts
import http from '@ohos.net.http';
```

### Demo

```ts
// 引入包名
import http from '@ohos.net.http';

// 每一个httpRequest对应一个HTTP请求任务，不可复用
let httpRequest = http.createHttp();
// 用于订阅HTTP响应头，此接口会比request请求先返回。可以根据业务需要订阅此消息
// 从API 8开始，使用on('headersReceive', Callback)替代on('headerReceive', AsyncCallback)。 8+
httpRequest.on('headersReceive', (header) => {
    console.info('header: ' + JSON.stringify(header));
});
httpRequest.request(
    // 填写HTTP请求的URL地址，可以带参数也可以不带参数。URL地址需要开发者自定义。请求的参数可以在extraData中指定
    "EXAMPLE_URL",
    {
        method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET
        // 开发者根据自身业务需要添加header字段
        header: {
            'Content-Type': 'application/json'
        },
        // 当使用POST请求时此字段用于传递内容
        extraData: {
            "data": "data to send",
        },
        expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型
        usingCache: true, // 可选，默认为true
        priority: 1, // 可选，默认为1
        connectTimeout: 60000, // 可选，默认为60000ms
        readTimeout: 60000, // 可选，默认为60000ms
        usingProtocol: http.HttpProtocol.HTTP1_1, // 可选，协议类型默认值由系统自动指定
    }, (err, data) => {
        if (!err) {
            // data.result为HTTP响应内容，可根据业务需要进行解析
            console.info('Result:' + JSON.stringify(data.result));
            console.info('code:' + JSON.stringify(data.responseCode));
            // data.header为HTTP响应头，可根据业务需要进行解析
            console.info('header:' + JSON.stringify(data.header));
            console.info('cookies:' + JSON.stringify(data.cookies)); // 8+
            // 取消订阅HTTP响应头事件
            httpRequest.off('headersReceive');
            // 当该请求使用完毕时，调用destroy方法主动销毁
            httpRequest.destroy();
        } else {
            console.info('error:' + JSON.stringify(err));
            // 取消订阅HTTP响应头事件
            httpRequest.off('headersReceive');
            // 当该请求使用完毕时，调用destroy方法主动销毁。
            httpRequest.destroy();
        }
    }
);
```

### requset 参数

| 名称                                                         | 类型                                                         | 必填   | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ |
| method                                                       | [RequestMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-http-0000001478061929-V3#ZH-CN_TOPIC_0000001523968386__requestmethod) | 否     | 请求方式。                                                   |
| extraData                                                    | `string `                                                    | Object | `ArrayBuffer8+发送请求的额外数据。- 当HTTP请求为POST、PUT等方法时，此字段为HTTP请求的content。当'Content-Type'为'application/x-www-form-urlencoded'时，请求提交的信息主体数据应在key和value进行URL转码后按照键值对"key1=value1&key2=value2&key3=value3"的方式进行编码。- 当HTTP请求为GET、OPTIONS、DELETE、TRACE、CONNECT等方法时，此字段为HTTP请求的参数补充，参数内容会拼接到URL中进行发送。- 开发者传入string对象，开发者需要自行编码，将编码后的string传入。` |
| [expectDataType9+](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-http-0000001478061929-V3#ZH-CN_TOPIC_0000001523968386__entry809654898152951p0) | [HttpDataType](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-http-0000001478061929-V3#ZH-CN_TOPIC_0000001523968386__httpdatatype9) | 否     | 指定返回数据的类型。如果设置了此参数，系统将优先返回指定的类型。 |
| usingCache9+                                                 | boolean                                                      | 否     | 是否使用缓存，默认为true。                                   |
| priority9+                                                   | number                                                       | 否     | 优先级，范围[1,1000]，默认是1。                              |
| header                                                       | Object                                                       | 否     | `HTTP请求头字段。默认{'Content-Type': 'application/json'}。` |
| readTimeout                                                  | number                                                       | 否     | 读取超时时间。单位为毫秒（ms），默认为60000ms。设置为0表示不会出现超时情况。 |
| connectTimeout                                               | number                                                       | 否     | 连接超时时间。单位为毫秒（ms），默认为60000ms。              |
| usingProtocol9+                                              | [HttpProtocol](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-http-0000001478061929-V3#ZH-CN_TOPIC_0000001523968386__httpprotocol9) | 否     | 使用协议。默认值由系统自动指定。                             |

## webSocket

### 导入模块

```ts
import webSocket from '@ohos.net.webSocket';
```

### Demo

```ts
import webSocket from '@ohos.net.webSocket';

var defaultIpAddress = "ws://";
let ws = webSocket.createWebSocket();
ws.on('open', (err, value) => {
    console.log("on open, status:" + value['status'] + ", message:" + value['message']);
    // 当收到on('open')事件时，可以通过send()方法与服务器进行通信
    ws.send("Hello, server!", (err, value) => {
        if (!err) {
            console.log("send success");
        } else {
            console.log("send fail, err:" + JSON.stringify(err));
        }
    });
});
ws.on('message', (err, value) => {
    console.log("on message, message:" + value);
    // 当收到服务器的`bye`消息时（此消息字段仅为示意，具体字段需要与服务器协商），主动断开连接
    if (value === 'bye') {
        ws.close((err, value) => {
            if (!err) {
                console.log("close success");
            } else {
                console.log("close fail, err is " + JSON.stringify(err));
            }
        });
    }
});
ws.on('close', (err, value) => {
    console.log("on close, code is " + value.code + ", reason is " + value.reason);
});
ws.on('error', (err) => {
    console.log("on error, error:" + JSON.stringify(err));
});
ws.connect(defaultIpAddress, (err, value) => {
    if (!err) {
        console.log("connect success");
    } else {
        console.log("connect fail, err:" + JSON.stringify(err));
    }
});
```

