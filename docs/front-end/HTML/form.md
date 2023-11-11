---
title: 🫠 Form 表单的使用
tag:
  - HTML
---

![download.png](https://www.z4a.net/images/2023/10/24/download.png)
# Form 的基本使用
> Form 的使用能够数据的收集更简单,否则每一个 input 都需要单独的进行数据的绑定.
## Form 的属性
> `<button type="submit">提交</button>` 会自动触发 form 表单的提交事件
> 
>  `<button type="reset">reset</button>` 会自动触发 form 表单的重置事件

|属性|值|描述|
|-|-|-|
|[accept](https://www.runoob.com/tags/att-form-accept.html)|*MIME_type*|HTML5 不支持。规定服务器接收到的文件的类型。（文件是通过文件上传提交的）|
|[accept-charset](https://www.runoob.com/tags/att-form-accept-charset.html)|*character_set*|规定服务器可处理的表单数据字符集。|
|[action](https://www.runoob.com/tags/att-form-action.html)|*URL*|规定当提交表单时向何处发送表单数据。|
|[autocomplete](https://www.runoob.com/tags/att-form-autocomplete.html)|on off|规定是否启用表单的自动完成功能。|
|[enctype](https://www.runoob.com/tags/att-form-enctype.html)|application/x-www-form-urlencoded multipart/form-data text/plain|规定在向服务器发送表单数据之前如何对其进行编码。（适用于 method="post" 的情况）|
|[method](https://www.runoob.com/tags/att-form-method.html)|get post|规定用于发送表单数据的 HTTP 方法。|
|[name](https://www.runoob.com/tags/att-form-name.html)|*text*|规定表单的名称。|
|[novalidate](https://www.runoob.com/tags/att-form-novalidate.html)|novalidate|如果使用该属性，则提交表单时不进行验证。|
|[target](https://www.runoob.com/tags/att-form-target.html)|_blank _self _parent _top|规定在何处打开 action URL。|


## 使用案例
## 数据的提交收集
> HTML
```html
<form onsubmit="formOnSubmit(event)">
    <input type="text" name="name" placeholder="请输入姓名"/>
    <input type="number" name="age" placeholder="请输入年龄"/>
    <input type="email" name="email" placeholder="请输入邮箱"/>
    <button type="submit">submit</button>
</form>
```
>Javascript
```javascript
const formOnSubmit = (event)=> {
    event.preventDefault();//阻止默认事件,否则会触发表单的默认提交事件
    const formData = new FormData(event.target);
    // 取出 formData 中的数据
    const name = formData.get('name'); // 输入的值来自于 input 属性 name
    const age = formData.get('age');
    const email = formData.get('email');
    console.log(name, age, email);
    // 或者转换为对象
    console.log(Object.fromEntries(formData));
}
```
## 表单的重置
```javascript
    event.target.reset(); // 获取到 form 的 dom 调用 reset()方法即可
```
### 演示区域

<FormDemo/>


## 数据验证
> 第三方库 zod 
> [官网地址](https://www.npmjs.com/package/zod)
> npm i zod

```typescript
import { z } from 'zod';

const UserSchema = z.object({
    name: z.string().min(3),
    age: z.number().optional(),//可选属性 -- 可以为空
    email: z.string().email(),
});

// 当前收集到的数据
const formData = {
    name: '张三',
    age: 18,
    email: '123@qq.com',
    
}
UserSchema.parse(formData); // 如果数据不符合规则，则会报错
UserSchema.safeParse(formData); // 只会输出错误,但是不会阻止程序的运行
```


<script setup lang="ts">
import FormDemo from './components/FormDemo.vue';
</script>

